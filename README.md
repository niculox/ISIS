<div align="center">

# ISIS — Health Indicators Software Integration
### *Autonomous Health Ecosystem & Applied Neuroscience for Long-Duration Space Missions*

[![NASA Space Apps Challenge](https://img.shields.io/badge/NASA-Space%20Apps%20Challenge-black?style=for-the-badge&logo=nasa&logoColor=white)](https://www.spaceappschallenge.org/2026/find-a-team/quas6r/)
[![Status](https://img.shields.io/badge/Status-MVP%20Active-emerald?style=for-the-badge)]()
[![Architecture](https://img.shields.io/badge/Architecture-3--Layer%20Offline--First-blue?style=for-the-badge)]()
[![Standard](https://img.shields.io/badge/Triage-Manchester%206--Color%20Scale-purple?style=for-the-badge)]()

[View Project on NASA Space Apps Website](https://www.spaceappschallenge.org/2026/find-a-team/quas6r/)

</div>

---

## 🌌 Project Overview

**ISIS** (*Health Indicators Software Integration*) is a comprehensive, offline-first health monitoring ecosystem and external executive support system designed for astronauts on long-duration space missions (such as crewed voyages to Mars).

During multi-month or multi-year missions, isolation, cosmic radiation, and microgravity silently erode both physical and mental health. Existing monitoring tools are overly bureaucratic and exhausting, causing crew members to ignore early signs of fatigue, stress, or pain until they escalate into mission-critical emergencies.

ISIS transforms continuous biometric streams, periodic lab diagnostics, and rapid daily check-ins into immediate, spoken, actionable guidance—operating 100% autonomously onboard without waiting for Earth.

---

## 🎯 The Real Problem in Deep Space

* **Chronic Isolation & Environmental Stressors:** Microgravity, radiation exposure, sleep disruption, and sensory monotony degrade cognitive and physiological resilience.
* **Communication Signal Delay:** Missions to Mars experience a communication delay of approximately **20 minutes each way** ($\approx 40\text{ minutes}$ round trip). Ground control cannot serve as the primary decision-making "brain" for crew health—it can only act as asynchronous support.
* **Bureaucratic Friction & Executive Overload:** Under prolonged stress and prefrontal fatigue, astronauts face decision paralysis and tend to skip complex health-logging workflows.

---

## 🏗️ Three-Layer System Architecture

ISIS operates on an **offline-first, three-layer architecture** designed for fault tolerance and zero dependency on real-time Earth links:

```text
+-------------------------------------------------------------------+
| LAYER 3: EARTH BRIDGE (Asynchronous Queue)                        |
| • Transmits summaries & critical alerts during comm windows       |
| • Receives flight surgeon updates & family milestone messages     |
+---------------------------------+---------------------------------+
                                  ^ (Asynchronous / Non-Blocking)
                                  v
+-------------------------------------------------------------------+
| LAYER 1: LOCAL CORE (Onboard Hub — Always Operational)            |
| • Stores encrypted health records & runs trend analysis           |
| • Hosts ISIS AI & physician-verified clinical protocol engine     |
| • Stores local offline library of emergency media & procedures    |
+---------------------------------+---------------------------------+
                                  ^ (Local Sync)
                                  v
+-------------------------------------------------------------------+
| LAYER 2: MULTIPLATFORM INTERFACES (Multimodal)                    |
| • Smartwatch: Continuous vitals + 2-tap/voice quick check-in      |
| • Smartphone / Tablet: Interactive 3D body, history & checklists  |
| • Cabin TV / Display: Anonymized crew wellness & guided routines  |
+-------------------------------------------------------------------+
```

### Data Sources & Collection Rhythms
ISIS integrates four space-grade biomedical technologies alongside subjective daily logs:
* **Continuous (Zero Effort):** **Bio-Monitor** smart garment (pulse, ECG, blood pressure, respiration, skin temperature, $\text{SpO}_2$, physical activity, and sleep duration/quality).
* **Daily (Under 30 Seconds):** **Quick Check-in** covering subjective mental metrics (mood, stress) and sensory status (vision, hearing, touch, balance).
* **Periodic (Weekly/Biweekly):** **MicroPREP** lab-on-a-chip blood analysis (vitamins, electrolytes, glucose, sodium, iron, cortisol, medication levels) and **Ocular Ultrasound** (intraocular pressure).
* **Clinical & Research Context:** **Tempus Pro** (telemedicine bridge for the onboard physician) and **Tissue Chip** data (radiation risk thresholds).

---

## 🚦 Clinical Triage & Active Guidance

### 6-Color Alert Scale (Manchester Protocol)
ISIS communicates urgency universally at a glance using six color-coded levels paired with distinct icons, text, and audio cues (ensuring accessibility in low light and for color blindness):

| Color | Urgency Level | Action Window | Handling & Escalation |
| :--- | :--- | :--- | :--- |
| **Red** | Emergency | Immediate | Resolved onboard; triggers Emergency Mode, alerts crew/physician, notifies Earth in parallel |
| **Orange** | Very Urgent | $\le 10\text{ min}$ | Resolved onboard; physician-verified protocol delivered immediately; notifies Earth |
| **Yellow** | Urgent | $\le 60\text{ min}$ | Follows verified protocol and recommends consulting the onboard physician |
| **Green** | Standard | $\le 120\text{ min}$ | Contextual habit and recovery guidance |
| **Blue** | Non-Urgent | $\le 240\text{ min}$ | Out-of-baseline indicator without symptoms; continuous monitoring |
| **White** | Scheduled | As scheduled | Routine procedures (e.g., MicroPREP blood draw, exercise, medical follow-ups) |

### ISIS AI: Safe, Deterministic Support Intelligence
ISIS AI bridges the gap from **data to action** via a continuous 5-step loop: **Read $\rightarrow$ Interpret $\rightarrow$ Guide $\rightarrow$ Track $\rightarrow$ Reassess**.
* **No Clinical Hallucinations:** A physician-verified rules engine determines safe interventions based on the astronaut's personal baseline. ISIS AI selects from approved protocols and explains them in natural voice—it **never diagnoses, alters prescriptions, or improvises clinical instructions**.
* **One Action at a Time:** Guidance is delivered voice-first with a minimal screen card stating **what** to do, **why**, and **when** reassessment will occur.
* **Sensor Cross-Checking & Privacy:** Confirms ambiguous sensor spikes with the astronaut before escalating. All AI conversations remain strictly private and encrypted unless explicit consent is given.

### Hands-Free Emergency Mode
During an acute medical event or injury, Emergency Mode overrides all routine UI elements:
* Displays **one step per screen** with locally cached images/videos and voice narration.
* Controlled hands-free via `"next"` and `"repeat"` voice commands.
* Automatically alerts the onboard crew and queues an urgent notification to Earth in parallel.

---

## 🧠 Assistive Neuroscience & Adherence Strategy

Grounded in cognitive neuroscience and **W3C Cognitive Accessibility (COGA)** guidelines, ISIS acts as an external executive support system (also beneficial for neurodivergent profiles such as ADHD):

1. **Cognitive Load Filter:** One primary action per screen, background task automation, and complex routines broken into micro-steps to prevent executive paralysis.
2. **Contextual & Transition Buffers:** Reminders trigger during natural activity transitions (e.g., *"before starting your next task, drink water"*) rather than interrupting hyperfocus, using external time anchors to counter time-perception loss in isolation.
3. **Punishment-Free Adherence & Constellations:**
   * **Honest Logging:** Logging *"I feel bad"* earns the exact same progress as *"I feel good"*—eliminating the incentive to hide symptoms.
   * **Flexible Streaks:** Missing a day dims a star rather than resetting progress to zero.
   * **Celestial Progression:** Daily goals form weekly **star clusters**, monthly named **constellations** (which trigger a **3D avatar evolution**), and a mission-wide **galaxy**.

---

## 🎛️ Multimodal Interaction (Golden Rule)

Every core function in ISIS is accessible through **at least two interaction modes** to accommodate gloves, zero-gravity movement, cabin noise, or occupied hands:
* **Voice:** Hands-free guidance, check-ins, and emergency navigation.
* **Gesture:** Simple, deliberate gestures for gloved or zero-G operation.
* **Touch & Typing:** Large, high-contrast targets for detailed logging.
* **Visual:** Interactive 3D human body map and color/icon status dashboard.

---

## 🚀 MVP Scope & Research Hypotheses

### Current Web MVP (`ISIS OS v0.1`)
* **Presentation & Whitepaper Landing Page:** Interactive overview of the deep-space neurobehavioral challenge, three-layer architecture, and team profile (**QUAS6R**).
* **Interactive Core Prototype:**
  * Rapid state check-in sliders (fatigue, sleep quality, stress, mood).
  * Interactive 3D human body canvas for regional pain/discomfort mapping and color-coded status inspection.
  * Simulated offline autonomous telemetry dashboard (heart rate, radiation tracking, Earth delay simulation, and streak/constellation preview).

### Target Outcomes (Hypotheses for Crew Validation)
* **Zero Decisional Paralysis:** Elimination of workflow freezes under high-stress conditions through single-action screens and voice-guided emergency protocols.
* **Sustained Multi-Month Engagement:** High daily check-in retention driven by punishment-free streaks, constellation mapping, and sub-30-second interactions.
* **Operational Risk Mitigation:** Directly addresses NASA Human Research Roadmap behavioral medicine gaps (**BMed-103 / BMed-108**), with terrestrial spin-off applications for ADHD support and extreme-environment workers.

---

## 🛠️ Technologies Used (Web MVP)

* **HTML5 & CSS3:** Custom properties, keyframe animations, and cyber-minimalist dark UI.
* **Tailwind CSS:** Utility-first responsive layout and styling.
* **Vanilla JavaScript (ES6+):** State management, Earth communication lag simulation, and interactive 3D point-cloud body rendering via HTML5 Canvas.
* **Typography:** *Inter* (UI & readability) and *JetBrains Mono* (telemetry & clinical timestamps).

---

## 👥 Development Team (QUAS6R Team)

Developed by a multidisciplinary team focused on human factors, software architecture, applied neuroscience, and autonomous space systems.

* **NASA Space Apps Challenge Submission:** [QUAS6R — ISIS Project](https://www.spaceappschallenge.org/2026/find-a-team/quas6r/)

---

<div align="center">
  <p><i>ISIS Health Ecosystem • NASA Human Research Roadmap • QUAS6R Team (2026)</i></p>
</div>