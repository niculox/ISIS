import * as THREE from 'three';
import { PLYLoader } from 'three/addons/loaders/PLYLoader.js';

const container = document.getElementById('isis-pointcloud');
if (!container) {
  throw new Error('Element #isis-pointcloud not found in the DOM.');
}

const getSize = () => ({
  width: container.clientWidth || 600,
  height: container.clientHeight || 510,
});

const { width, height } = getSize();

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

const camera = new THREE.PerspectiveCamera(45, width / height, 0.01, 1000);
camera.position.set(0, 0, 3.2);

const renderer = new THREE.WebGLRenderer({
  antialias: true,
  powerPreference: 'high-performance',
});
renderer.setSize(width, height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

container.innerHTML = '';
container.appendChild(renderer.domElement);

const pointerNDC = new THREE.Vector2(999, 999);
let pointerActive = false;

container.addEventListener('pointermove', (event) => {
  const rect = renderer.domElement.getBoundingClientRect();
  pointerNDC.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  pointerNDC.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
  pointerActive = true;
});

container.addEventListener('pointerleave', () => {
  pointerActive = false;
  pointerNDC.set(999, 999);
});

// Dispersion parameters
const DISPERSION_RADIUS = 0.2; // Radius of influence around the cursor
const DISPERSION_STRENGTH = 1; // Degree of separation between the points
const RETURN_SPEED = 0.001; // Speed ​​at which they return to their original format
const DISPERSE_SPEED = 0.09; // Speed ​​at which they move away

let pointsMesh = null;
let basePositions = null;
let currentPositions = null;
const tempVec = new THREE.Vector3();
const cursorWorld = new THREE.Vector3();
const raycaster = new THREE.Raycaster();
const pointerPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);

const loader = new PLYLoader();
loader.load(
    '../assets/pointcloud/isis_pointcloud.ply',
  (geometry) => {
    geometry.computeBoundingBox();
    const center = new THREE.Vector3();
    geometry.boundingBox.getCenter(center);
    geometry.translate(-center.x, -center.y, -center.z);

    const size = new THREE.Vector3();
    geometry.boundingBox.getSize(size);
    const maxDim = Math.max(size.x, size.y, size.z) || 1;
    const scale = 1.8 / maxDim;
    geometry.scale(scale, scale, scale);

    // ignore colors in the .ply file
    if (geometry.hasAttribute('color')) {
      geometry.deleteAttribute('color');
    }

    const posAttr = geometry.getAttribute('position');
    basePositions = new Float32Array(posAttr.array);
    currentPositions = new Float32Array(posAttr.array);

    const material = new THREE.PointsMaterial({
      size: 0.001,
      color: 0xffffff,
      vertexColors: false,
      transparent: true,
      opacity: 0.92,
    });

    pointsMesh = new THREE.Points(geometry, material);
    scene.add(pointsMesh);
  },
  undefined,
  (error) => {
    console.error('Failed to load the .ply file:', error);
    container.innerHTML =
      '<p class="font-mono text-xs text-white/60">Error loading point cloud</p>';
  }
);

window.addEventListener('resize', () => {
  const next = getSize();
  if (!next.width || !next.height) return;
  camera.aspect = next.width / next.height;
  camera.updateProjectionMatrix();
  renderer.setSize(next.width, next.height);
});

function updatePointDispersion() {
  if (!pointsMesh || !basePositions || !currentPositions) return;

  const posAttr = pointsMesh.geometry.getAttribute('position');
  const arr = posAttr.array;

  let hasCursorPoint = false;
  if (pointerActive) {
    raycaster.setFromCamera(pointerNDC, camera);
    hasCursorPoint = Boolean(raycaster.ray.intersectPlane(pointerPlane, cursorWorld));
  }

  for (let i = 0; i < arr.length; i += 3) {
    const bx = basePositions[i];
    const by = basePositions[i + 1];
    const bz = basePositions[i + 2];

    let targetX = bx;
    let targetY = by;
    let targetZ = bz;

    if (hasCursorPoint) {
      const dx = bx - cursorWorld.x;
      const dy = by - cursorWorld.y;
      const dz = bz - cursorWorld.z;
      const dist = Math.hypot(dx, dy, dz);

      if (dist < DISPERSION_RADIUS && dist > 1e-5) {
        const falloff = 1 - dist / DISPERSION_RADIUS;
        const push = falloff * falloff * DISPERSION_STRENGTH;
        targetX += (dx / dist) * push;
        targetY += (dy / dist) * push;
        targetZ += (dz / dist) * push * 0.6;
      }
    }

    const speed = hasCursorPoint ? DISPERSE_SPEED : RETURN_SPEED;
    arr[i] += (targetX - arr[i]) * speed;
    arr[i + 1] += (targetY - arr[i + 1]) * speed;
    arr[i + 2] += (targetZ - arr[i + 2]) * speed;
  }

  posAttr.needsUpdate = true;
}

function animate() {
  requestAnimationFrame(animate);

  // Smooth ambient rotation
  if (pointsMesh) {
    pointsMesh.rotation.y += 0.002;
  }

  updatePointDispersion();
  renderer.render(scene, camera);
}

animate();
