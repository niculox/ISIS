document.addEventListener('DOMContentLoaded', () => {
  const navLinks = Array.from(document.querySelectorAll('header nav a.nav-link'));
  const sections = navLinks
    .map((link) => {
      const id = link.getAttribute('href')?.replace('#', '');
      return id ? document.getElementById(id) : null;
    })
    .filter(Boolean);

  if (sections.length > 0 && 'IntersectionObserver' in window) {
    const setActiveLink = (id) => {
      navLinks.forEach((link) => {
        const isMatch = link.getAttribute('href') === `#${id}`;
        link.classList.toggle('is-active', isMatch);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target?.id) {
          setActiveLink(visible[0].target.id);
        }
      },
      {
        rootMargin: '-25% 0px -55% 0px',
        threshold: [0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));
  }

  const teamPhoto = document.getElementById('team-photo');
  const teamPlaceholder = document.getElementById('team-placeholder');

  if (teamPhoto && teamPlaceholder) {
    teamPhoto.addEventListener('error', () => {
      teamPhoto.classList.add('hidden');
      teamPlaceholder.classList.remove('hidden');
    });
  }
});
