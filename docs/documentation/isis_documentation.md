# ISIS
**Health Ecosystem for Astronauts on Long-Duration Missions**  
*2026*

---

## Table of Contents
1. [Target Audience](#1-target-audience)
2. [Problem](#2-problem)
3. [Proposed Solution](#3-proposed-solution)
4. [Data Collection: Sources and Integration](#4-data-collection-sources-and-integration)
   - 4.1 [Source Technologies](#41-source-technologies)
   - 4.2 [Data, Source, and Rhythm](#42-data-source-and-rhythm)
   - 4.3 [Three Data Rhythms](#43-three-data-rhythms)
5. [Dashboard: Essential Metrics Screen](#5-dashboard-essential-metrics-screen)
6. [Multimodal System: Interaction Modes](#6-multimodal-system-interaction-modes)
7. [Alert Window: Color-Coded Alert Scale (Manchester Protocol)](#7-alert-window-color-coded-alert-scale-manchester-protocol)
   - 7.1 [Active Guidance: From Data to Action](#71-active-guidance-from-data-to-action)
8. [ISIS AI: Support Intelligence](#8-isis-ai-support-intelligence)
9. [Emergency Mode](#9-emergency-mode)
10. [Assistive Neuroscience-Based Strategy: Reminders, Rewards, and Design](#10-assistive-neuroscience-based-strategy-reminders-rewards-and-design)
    - 10.1 [Reminder Mechanisms](#101-reminder-mechanisms)
    - 10.2 [Rewards](#102-rewards)
    - 10.3 [Assistive Design](#103-assistive-design)
    - 10.4 [Healthy Design Rules](#104-healthy-design-rules)
11. [Core Features](#11-core-features)
12. [The Three System Modes](#12-the-three-system-modes)
13. [Three-Layer Architecture](#13-three-layer-architecture)
    - 13.1 [Layer 1: Local Core (Always Operational)](#131-layer-1-local-core-always-operational)
    - 13.2 [Layer 2: Devices (Interfaces)](#132-layer-2-devices-interfaces)
    - 13.3 [Layer 3: Earth Bridge (Asynchronous)](#133-layer-3-earth-bridge-asynchronous)
14. [Idea Evaluation](#14-idea-evaluation)
    - 14.1 [Strengths](#141-strengths)
15. [Requirements](#15-requirements)
    - 15.1 [Functional Requirements](#151-functional-requirements)
    - 15.2 [Non-Functional Requirements](#152-non-functional-requirements)
16. [MVP Suggestion](#16-mvp-suggestion)
17. [Open Points and Next Steps](#17-open-points-and-next-steps)

---

## 1. Target Audience
Astronauts on long-duration space missions (for example, trips to Mars), who spend months or years in isolation, under radiation, and in microgravity.

## 2. Problem
On long space voyages, isolation, radiation, and lack of gravity silently affect the physical and mental health of astronauts. Current monitoring systems are bureaucratic and exhausting, which leads the crew to ignore signs of fatigue, stress, or pain until they become a serious problem for the mission.

**Aggravating factor:** Communication with Earth has a delay of about 20 minutes each way on missions to Mars. Ground control cannot be the "brain" of health monitoring, only a support system.

## 3. Proposed Solution
A single software solution, designed as an ecosystem, that monitors health effortlessly on a day-to-day basis, uses this data to tell the astronaut what to do, and makes them want to use it every day.

The complete software is called **ISIS** (*Integração de Softwares de Indicadores de Saúde* / Health Indicators Software Integration), and its artificial intelligence is called **ISIS AI**.

The goal is to enable the astronaut to take care of their own well-being autonomously, without depending on the base on Earth. It brings together:
* **a)** a check-in taking just seconds and an interactive human body with color-coded alerts;
* **b)** reading of data provided by NASA (tissue chip, MicroPREP, and Bio-Monitor);
* **c)** contextual practical tips;
* **d)** reminders and rewards that sustain the habit;
* **e)** primarily local operation, communicating with Earth when a window is available;
* **f)** multiplatform access (smartwatch, smartphone, tablet, and TV);
* **g)** multimodal interaction (voice, gesture, typing, and visual);
* **h)** ISIS AI, the support AI, and a step-by-step emergency mode.

---

## 4. Data Collection: Sources and Integration
The ecosystem gathers data from four space technologies and the check-in itself. Each piece of data arrives at a different rhythm, and the local core brings everything together into a single health overview.

### 4.1 Source Technologies
Table 1 presents the source technologies for the data.

**Table 1 – Data source technologies**

| Technology | What it does | Role in the ecosystem |
| :--- | :--- | :--- |
| **Bio-Monitor** | Smart garment that continuously measures pulse, heart electrical activity, blood pressure, respiration, skin temperature, oxygen saturation, and physical activity, including during sleep | Continuous source of vital signs and sleep data |
| **MicroPREP** | Miniature lab-on-a-chip that, via centrifugation, measures $0.05$ to $0.3\text{ mL}$ of blood and isolates target molecules for analysis | Periodic source of blood test data |
| **Tempus Pro** | Telemedicine device that integrates health data and produces medical imaging | Clinical bridge between the onboard physician and Earth |
| **Tissue chip** | Platform that exposes cells to controlled doses of radiation and observes their responses | Research source that guides risk thresholds (not a daily reading) |

*Source: Prepared by the authors (2026), based on information from the Canadian Space Agency (CSA) and NASA.*

### 4.2 Data, Source, and Rhythm
Table 2 links each data type to its source and collection rhythm.

**Table 2 – Data, source, and collection rhythm**

| Data | Source | Rhythm |
| :--- | :--- | :--- |
| Blood pressure, oxygen saturation, sleep (duration and quality) | Bio-Monitor | Continuous |
| Pulse, respiration, temperature, physical activity | Bio-Monitor | Continuous |
| Vitamins, electrolytes, glucose, sodium, iron, cortisol, medication levels | MicroPREP | Periodic |
| Mental (mood, stress) and sensory (vision, hearing, touch, balance) | Check-in | Daily |
| Intraocular pressure | Ocular ultrasound | Periodic |

*Source: Prepared by the authors (2026).*

### 4.3 Three Data Rhythms
* **a) continuous:** Bio-Monitor feeds the interactive body and trends with zero effort from the astronaut;
* **b) daily:** the check-in covers what no sensor can measure, such as mental and sensory health. For this reason, it must remain quick;
* **c) periodic:** MicroPREP requires blood collection and preparation, so it fits into a weekly or biweekly routine. The software reminds the astronaut, receives the result, and interprets it.

---

## 5. Dashboard: Essential Metrics Screen
**Metrics:** blood pressure, intraocular pressure, vitamins, blood oxygen saturation, electrolytes, glucose, sodium, iron, cortisol, medication levels, mental metrics, sleep duration and quality, and sensory metrics.

The dashboard follows these characteristics:
* **a)** metrics that are deteriorating are flagged by urgency scale colors and, when high-priority, by a voice alert before the astronaut even looks at the screen;
* **b)** sorting follows the scale: red first, then orange, and so on;
* **c)** each metric displays the time of the last update, because periodic blood tests must not appear to be real-time;
* **d)** mental and sensory are categories, not single metrics: the check-in breaks them down into concrete items (mood, stress, balance, vision, hearing);
* **e)** sodium is part of electrolytes: a deliberate decision must be made on whether to keep it grouped or separate.

---

## 6. Multimodal System: Interaction Modes
Table 3 summarizes the interaction modes, when each is most useful, and the necessary precautions.

**Table 3 – Interaction modes**

| Mode | When it is most useful | Precaution |
| :--- | :--- | :--- |
| **Voice** | Hands occupied, during tasks | Spacecraft noise; privacy when discussing health in shared spaces |
| **Gesture** | Wearing gloves, zero-gravity environment, dirty hands | Few, simple gestures to avoid accidental triggering |
| **Typing and touch** | More detailed logging | Large, easy-to-hit buttons |
| **Visual** | Understanding health status at a glance | Color cannot be the only signal: combine with icons and text (color blindness) |

*Source: Prepared by the authors (2026).*

> **Golden rule:** Every function must be executable through at least two modes.

---

## 7. Alert Window: Color-Coded Alert Scale (Manchester Protocol)
The ecosystem communicates with the astronaut using six colors, following the Manchester Triage System used in hospital emergency rooms. Each color indicates the urgency level and the maximum timeframe for action. The crew recognizes the scale immediately, and the astronaut knows how much time they have without needing to read anything. Table 4 presents the scale.

**Table 4 – Color-coded alert scale**

| Color | Level | Timeframe for care | Onboard usage example (proposed) |
| :--- | :--- | :--- | :--- |
| **Red** | Emergency | Immediate | Very low oxygen saturation; severe pain in a critical area |
| **Orange** | Very urgent | Up to 10 minutes | Blood pressure out of range with symptoms |
| **Yellow** | Urgent | Up to 60 minutes | Persistent pain or altered vital sign without severe symptoms |
| **Green** | Standard (Low urgency) | Up to 120 minutes | Mild discomfort or isolated poor sleep |
| **Blue** | Non-urgent | Up to 240 minutes | Out-of-range sign, without symptoms, for monitoring |
| **White** | Scheduled procedures and follow-ups | As scheduled | MicroPREP blood draw, follow-up with onboard physician, exercise routine |

*Source: Prepared by the authors (2026).*

The scale is integrated into the system as follows:
* **a)** each body region and each indicator receives a color. The interactive body displays the overall picture at a glance;
* **b)** the most urgent color defines the astronaut's primary alert for the day;
* **c)** color is never the sole signal: each level also features distinct icons, text, and sounds to ensure accessibility and usability in low light;
* **d)** red and orange alerts are handled onboard. With an approximate 20-minute delay to Earth, the 10-minute window for orange and the immediate requirement for red cannot wait for a ground response. The system guides the onboard physician and notifies Earth in parallel;
* **e)** white identifies scheduled procedures, kept separate from health alerts.

**Open points:** The criteria that assign each data point to each color (thresholds per indicator) must be defined by a healthcare professional and personalized for each astronaut. The examples in the table are illustrative and not a clinical protocol.

### 7.1 Active Guidance: From Data to Action
The system does not merely show how the astronaut is doing: it uses the data to tell them what to do next. ISIS AI reads the health status and speaks the action, so the astronaut only needs to execute it.

The cycle repeats throughout the day:
* **a) read:** gathers continuous (Bio-Monitor), daily (check-in), and periodic (MicroPREP) data;
* **b) interpret:** compares against the astronaut's own baseline and defines the urgency scale color;
* **c) guide:** states an action, the reason for it, and when it will reassess;
* **d) track:** logs whether the action was completed;
* **e) reassess:** checks whether the metric improved and adjusts the next guidance.

Every piece of guidance has three parts: **what** (an action), **why** (one line), and **when to reassess**. Table 5 provides examples.

**Table 5 – Examples of guidance spoken by ISIS AI**

| Situation read in the data | Guidance spoken by ISIS AI (example) |
| :--- | :--- |
| Short sleep for three nights and high cortisol | *"Your sleep has been short for three nights. Tonight, dim the lights one hour before bed. I will reassess tomorrow."* |
| Blood pressure above personal baseline | *"Your blood pressure has risen. Take a break and do 5 minutes of breathing exercises. I will reassess in 10 minutes."* |
| Low electrolytes | *"Your electrolytes are low. Drink water and eat the recommended meal. I will reassess at the next test."* |
| High pulse and stress during a task | *"Take a short break before continuing."* |

*Source: Prepared by the authors (2026).*

*Note: The examples are illustrative; actual actions must be defined and validated by a flight surgeon.*

**Who decides what.** Two components work together:
* **a) physician-verified rules and protocol engine:** decides what is safe to recommend, based on the data and each astronaut's baseline;
* **b) ISIS AI (AI):** reads the status, selects the guidance from within approved options, explains it in natural language, and converses by voice. It does not improvise clinically.

This avoids the biggest risk of an AI that tells users what to do: fabricating an incorrect recommendation with a confident tone. The level of guidance matches the scale color, as shown in Table 6.

**Table 6 – Guidance level by scale color**

| Color | What ISIS AI does |
| :--- | :--- |
| **White, blue, green** | Guides habits and well-being, within the approved library |
| **Yellow** | Follows the protocol and suggests speaking with the onboard physician |
| **Orange, red** | Delivers only the verified protocol, alerts the onboard physician, and notifies Earth |

*Source: Prepared by the authors (2026).*

The color dictates the timeframe; ISIS AI dictates the action within that timeframe. Necessary safeguards include:
* **a) noisy sensors:** erroneous data must not trigger an erroneous command. The system cross-references sources and, when in doubt, confirms with the astronaut (*"Are you feeling dizzy?"*) before issuing more serious guidance;
* **b) one primary guidance at a time:** multiple simultaneous instructions become noise, and the astronaut stops listening;
* **c) astronaut autonomy:** they can decline or postpone a recommendation, and this is logged without being treated as a failure;
* **d) no diagnosis and no medication changes:** the system only relays what the onboard physician has prescribed;
* **e) explain the reason:** stating *why* improves trust and adherence;
* **f) rewards:** following a recommendation counts toward the checklist, but improving a health metric does not earn a reward, so as not to incentivize hiding symptoms;
* **g) voice-first:** guidance is delivered verbally, while the screen displays only a card showing the action and the reassessment timer.

---

## 8. ISIS AI: Support Intelligence
ISIS AI provides Q&A support, mental health assistance, and help during emergency events:
* **a)** runs offline on the local core. This limits the model size and is a technical decision to be documented;
* **b)** in an emergency, it does not invent instructions. Steps come from a locally stored library of physician-verified protocols. ISIS AI simply locates the right protocol and guides the astronaut through it;
* **c)** refers, does not treat. If signs of crisis appear, it refers the astronaut to the onboard physician or psychologist. The criteria must be defined, as the 20-minute delay makes waiting for Earth impossible;
* **d)** conversations are sensitive data. They are not visible to the crew, Earth, or families without consent.

---

## 9. Emergency Mode
When an accident occurs, the system displays warnings and step-by-step instructions in a direct, accurate, educational, and effective manner, using voice and example images to treat the astronaut's injury:
* **a)** one step per screen, with `"next"` and `"repeat"` voice commands, completely hands-free;
* **b)** overrides everything else (streaks, rewards, reminders) and uses the red level of the scale;
* **c)** automatic parallel alert to the crew and Earth while the astronaut is already receiving instructions;
* **d)** locally stored images and videos: connectivity cannot be a requirement;
* **e)** medical content validated by healthcare professionals before being added to the library.

---

## 10. Assistive Neuroscience-Based Strategy: Reminders, Rewards, and Design
The goal is to make adhering to the health routine effortless and rewarding, free of punishment and visual clutter.

ISIS's differentiator is functioning as an external executive support system: it takes on part of the cognitive load of planning, initiating, remembering, and transitioning—functions most easily impaired under stress, isolation, and overload. The strategy is grounded in principles of neuroscience and cognitive accessibility and is organized into three pillars: reminders (10.1), rewards (10.2), and assistive design (10.3). Designed for astronauts, it also benefits neurodivergent individuals (such as those with ADHD and atypical sensory profiles), because whatever reduces cognitive load helps everyone. These strategies are treated as well-founded hypotheses to be tested with the crew.

### 10.1 Reminder Mechanisms
* **a)** short daily task checklist, showing the age of pending items;
* **b)** contextual and transition reminders: triggered when changing environments or during transition periods (for example, *"before starting the next task, drink water"*), rather than random alarms during another activity. This avoids interrupting hyperfocus and reduces context-switching frustration;
* **c)** continuous layered alerts (sensory progression): start discreetly and only escalate if the task remains pending;
* **d)** external time anchors and planned transition buffers, to help counteract the loss of time perception in isolation;
* **e)** clinical priority above all: orange and red alerts always override standard reminders.

### 10.2 Rewards
* **a)** immediate, light reward: subtle animations and short, gratifying sounds upon completing steps;
* **b)** punishment-free streak: if a day is missed, progress does not reset to zero and the app adapts the goal;
* **c)** 3D avatar that evolves with each month of consistency, creating a sense of long-term progress. Evolution is triggered upon completing the month's constellation;
* **d)** self-care constellations: each day of met goals lights up a star on the astronaut's personal dashboard, and the stars connect to form constellations instead of plain charts;
* **e)** partial day and missed day: a partial day lights up a dimmer star; a missed day becomes an unlit point, and the sky never resets to zero. The constellation completes flexibly, without requiring consecutive days;
* **f)** three scales: a week forms a star cluster; a month forms a complete constellation, which gets a name and triggers the 3D avatar's evolution; the entire mission forms a galaxy, a portrait of the whole journey;
* **g)** personal naming: the astronaut names the constellations, or ISIS AI suggests names tied to something personal to them;
* **h)** reward the act of logging, not the outcome. Reporting *"I feel bad"* counts just as much as *"I feel good"*; only failing to log breaks the streak. Otherwise, the astronaut might hide symptoms to preserve their streak.

### 10.3 Assistive Design
Assistive design reduces the mental effort of using ISIS, allowing the astronaut to spend energy taking care of themselves rather than deciding how to operate the system:
* **a)** cognitive load filter: one primary action per screen and few secondary items. Everything else stays hidden until requested;
* **b)** background automation: the system decides what it can decide on its own (schedules, task order, pre-selected defaults) so the astronaut doesn't have to make choices at every step;
* **c)** tasks broken into micro-steps: what feels overwhelming is divided into small steps to prevent executive paralysis;
* **d)** multimodal interaction, aligned with W3C Cognitive Accessibility (COGA) guidelines: voice, text, gesture, touch, and visual, featuring plain language, clear steps, no time pressure, and minimal distraction.

### 10.4 Healthy Design Rules
* **a)** reward the act of logging, not the outcome. Reporting *"I feel bad"* counts just as much as *"I feel good"*; only failing to log breaks the streak. Otherwise, the astronaut might hide symptoms to preserve their streak;
* **b)** private dashboard. No leaderboards or comparisons between astronauts. Collective screens show only aggregated data, and families receive only what the astronaut chooses to share;
* **c)** discreet on screen. The constellation dashboard resides on its own screen and does not compete with health alerts, which take priority;
* **d)** variety. Alternating styles and small surprises prevent reward fatigue over months;
* **e)** meaning over prize. The constellation should serve as a reminder of *why* self-care matters, not just that a reward was earned.

---

## 11. Core Features
* **a)** check-in in seconds: $3$ to $5$ visual questions (emoji or scale), adapted to the day;
* **b)** interactive human body: tap the region, select the intensity and type of discomfort;
* **c)** six-color urgency scale (Section 7) by body region and by dimension (physical, sleep, mood, stress);
* **d)** contextual practical tips: exercises, posture, breathing, sleep routines, tailored to the logged issue;
* **e)** trends: detects gradual deterioration (for example, three weeks of declining sleep), something an isolated check-in misses;
* **f)** escalation: if status turns red or remains persistent, advises consulting the onboard physician and flags Earth;
* **g)** private mode and collective mode: individual data is visible only to the astronaut themselves; shared screens display only aggregated indicators;
* **h)** checklist, reminders, and rewards (Section 10);
* **i)** essential metrics screen (Section 5);
* **j)** ISIS AI and emergency mode (Sections 8 and 9).

---

## 12. The Three System Modes
* **a) routine:** checklist, reminders, streak, and rewards (Section 10);
* **b) monitoring:** metrics screen, colors, and trends (Section 5);
* **c) emergency:** step-by-step instructions taking priority over everything else (Section 9).

ISIS AI spans all three modes (Section 8). Not everything appears on screen at once: most features act as reminder and incentive mechanisms, while the main screen displays only the next step and the status color.

---

## 13. Three-Layer Architecture

### 13.1 Layer 1: Local Core (Always Operational)
* **a)** runs inside the spacecraft, on a local server or onboard hub;
* **b)** stores data, runs trend analysis, and generates alerts and tips;
* **c)** houses ISIS AI and the local library of emergency protocols;
* **d)** does not depend on an external connection for any essential function.

### 13.2 Layer 2: Devices (Interfaces)
* **a) smartwatch:** continuous signal collection (heart rate, sleep, activity) and quick check-in via touch or voice;
* **b) smartphone and tablet:** full interactive body, history, checklist, and detailed tips;
* **c) TV or cabin display:** collective, anonymous overview of crew well-being and guided activities (stretching, breathing);
* **d)** all devices communicate with the local core, rather than directly with each other or with Earth.

### 13.3 Layer 3: Earth Bridge (Asynchronous)
* **a)** sends summaries and relevant alerts whenever a communication window is open;
* **b)** receives medical guidance, updates, and support messages, including from families;
* **c)** operates as a queue: unsent items are stored and transmitted later. The astronaut is never left waiting for a response.

---

## 14. Idea Evaluation

### 14.1 Strengths
ISIS's core strength is turning health data into action within seconds and without depending on Earth, while making the astronaut want to use it every day. Technologies like Bio-Monitor, MicroPREP, and Tempus Pro collect and transmit data. ISIS integrates everything and guides the astronaut on what to do right now. Table 7 shows the three pillars of this strength and how they are delivered, while Table 8 compares ISIS with current systems.

**Table 7 – Pillars of core strength and how they are delivered**

| Pillar | How we deliver it |
| :--- | :--- |
| **Total autonomy** | Local core that works offline, asynchronous queue to Earth, red and orange alerts resolved onboard (Sections 7 and 13) |
| **From data to action** | Read, interpret, guide, track, and reassess cycle, with a verified protocol engine and ISIS AI speaking the action (Section 7.1) |
| **Punishment-free adherence** | Neuroscience-based strategy: flexible streak, constellations, 3D avatar, and cognitive load filter (Section 10) |

*Source: Prepared by the authors (2026).*

**Table 8 – Comparison between current systems and ISIS**

| Aspect | Current systems | ISIS |
| :--- | :--- | :--- |
| **Dependence on Earth** | High, with up to a 20-minute delay | Operates 100% onboard |
| **Daily use** | Bureaucratic and exhausting | Check-in in seconds |
| **What it delivers** | Data and charts | The next action, spoken by voice |
| **When the astronaut misses a day** | Logged as a failure | Progress does not reset to zero |
| **Mental effort** | High | One action per screen |

*Source: Prepared by the authors (2026).*

The characteristics underpinning these strengths are:
* **a) local autonomy as a core principle.** The system remains useful even without a response from Earth;
* **b) multiplatform.** The astronaut uses the system wherever they are: on the watch during a task, on the tablet during routines, on the TV or cabin display during group moments;
* **c) multiple interaction modes.** Voice, gesture, typing, and visual cover scenarios where one mode fails (gloves, noise, occupied hands, low visibility);
* **d) check-in in seconds.** Directly tackles bureaucracy: what is quick gets done every day. Combines the check-in with sensors and trend analysis;
* **e) focus on adherence.** Reminders and rewards answer the question of how to keep the astronaut using the system for months.

---

## 15. Requirements
System requirements are organized into functional and non-functional categories.

### 15.1 Functional Requirements
Table 9 lists the functional requirements (FR).

**Table 9 – Functional requirements**

| ID | Requirement |
| :--- | :--- |
| **RF01** | Quick daily check-in (under 30 seconds), with touch selections for fatigue, mood, sleep, stress, and pain |
| **RF02** | Interactive human body to log pain or discomfort by region |
| **RF03** | Alerts via a six-color scale (red, orange, yellow, green, blue, and white) by region and by indicator |
| **RF04** | Contextual practical tips matched to the alert |
| **RF05** | Individual history and trends |
| **RF06** | Notification to the astronaut when a concerning pattern is detected |
| **RF07** | Transmission of summaries to Earth ground control when a connection is available |
| **RF08** | Synchronization across devices via the local core |
| **RF09** | Message queue for Earth, with automatic transmission when a connection is available |
| **RF10** | Switching interaction modes (voice, gesture, typing, visual) at any time |
| **RF11** | Individual profile with personalized thresholds (each astronaut's baseline) |
| **RF12** | Daily task checklist, with pending items displaying their age and allowing completion, rescheduling, or dismissal |
| **RF13** | Contextual and transition reminders, without interrupting critical activities |
| **RF14** | Punishment-free streak, with an adaptable goal |
| **RF15** | Rewards (family content, favorite food, monthly 3D avatar) as bonuses, without withholding basic contact |
| **RF16** | Essential metrics screen sorted by color, showing the time of the last update and voice alerts for out-of-range metrics |
| **RF17** | ISIS AI: Q&A, support as entertainment and companionship, and referral to professionals upon signs of crisis |
| **RF18** | Step-by-step emergency mode (one per screen), with voice, local images, and automatic alerting |
| **RF19** | Interpret data and generate one primary guidance at a time, including action, reason, and reassessment timeframe |
| **RF20** | Deliver guidance via voice through ISIS AI, with an on-screen card showing the action and reassessment timer |
| **RF21** | Log whether guidance was followed, postponed, or declined, without treating refusal as a failure |
| **RF22** | Reassess data after the action and adjust the next guidance |
| **RF23** | Confirm with the astronaut when data is inconsistent before issuing more serious guidance |
| **RF24** | Personal constellation dashboard: each day of met goals lights up a star (dimmer for partial days, unlit for missed days, never resetting to zero), across week, month, and mission scales |

*Source: Prepared by the authors (2026).*

### 15.2 Non-Functional Requirements
Table 10 lists the non-functional requirements (NFR).

**Table 10 – Non-functional requirements**

| ID | Requirement |
| :--- | :--- |
| **RNF01** | Operate $100\%$ offline and autonomously, without depending on Earth (offline-first) |
| **RNF02** | Simple interface, usable with gloves, in low light, and under stress |
| **RNF03** | Immediate responses (under 1 second per interaction) |
| **RNF04** | Privacy and encryption of health data, both locally and in transit |
| **RNF05** | Low power and storage consumption, especially on the smartwatch |
| **RNF06** | Fault tolerance: if the hub goes down, devices continue logging and sync later |
| **RNF07** | Eventual consistency across devices |
| **RNF08** | Accessibility: do not rely solely on color; use icons, text, and audio |
| **RNF09** | Emergency protocols verified by physicians and stored locally; the AI does not generate free-form instructions |
| **RNF10** | Conversations with ISIS AI and health data are not shared with crew, families, or Earth without consent; families only receive milestone achievements |
| **RNF11** | ISIS AI runs locally, without relying on connectivity |
| **RNF12** | Clinical guidance derived strictly from physician-approved protocols; the AI selects and explains without diagnosing or altering medication |

*Source: Prepared by the authors (2026).*

---

## 16. MVP Suggestion
For an academic project, rather than building the entire ecosystem, it is best to demonstrate the concept with:
* **a)** an interface prototype of the check-in and the interactive body with the six-color scale (smartphone);
* **b)** a simplified version for a smartwatch (small screen, two taps);
* **c)** a simulation of the 20-minute communication delay with "Earth," demonstrating that the system remains useful without a response;
* **d)** a demonstration of the punishment-free streak, featuring the evolving 3D avatar;
* **e)** an emergency screen with a sample step-by-step walkthrough via voice and images.

This highlights the proposal's core differentiators (autonomy, multiplatform, multimodal, and focus on adherence) without requiring real hardware.

---

## 17. Open Points and Next Steps
* **a)** define the thresholds for each indicator across each color level, in collaboration with a healthcare professional;
* **b)** define who validates the emergency protocols and ISIS AI's referral criteria;
* **c)** select the data source for intraocular pressure and daily radiation measurement;
* **d)** decide on metric grouping (for example, sodium within electrolytes);
* **e)** define how the ecosystem integrates with Tempus Pro;
* **f)** detail requirements with priorities and acceptance criteria, design prototypes for the main screens, and prepare a pitch.