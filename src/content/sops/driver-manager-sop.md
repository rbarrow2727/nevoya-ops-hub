---
title: Driver Manager Standard Operating Procedure (v1.0)
description: Formal SOP for Nevoya Driver Managers covering mission, daily operations, Yellow Flag system, and communication standards.
lastUpdated: 2026-01-19
role: Driver Manager
---

# Driver Manager Standard Operating Procedures

**Nevoya Operations | Version 1.0**

Effective Date: January 2026 | Document Owner: Operations Leadership | Review Cycle: Quarterly

---

## 1. Mission Statement

### The Driver Manager's Purpose

As a Driver Manager (DM) at Nevoya, you are the operational backbone of our electric fleet. Your role is defined by three core imperatives:

| Imperative | Target | Your Role |
| :--- | :--- | :--- |
| **Protect Revenue** | $1,000/truck/day | Ensure every assigned truck generates maximum revenue through efficient execution |
| **Delight Customers** | 95%+ On-Time Delivery | Proactive communication prevents surprises; customers should never ask "where's my load?" |
| **Empower Drivers** | Retention & Coaching | Build trust through consistent communication; be a coach, not a controller |

### What You Own

- **Your Drivers**: You are assigned 8-12 drivers. You know their names, their quirks, their strengths, and their challenges.
- **Execution Excellence**: Once planning delivers the schedule, you execute flawlessly.
- **Real-Time Problem Solving**: When deviations occur, you act decisively within your authority.
- **Customer Relationships (Day-to-Day)**: You are the voice of Nevoya to our customers during active loads.

### What You Do NOT Own

**Critical Distinction**: Planning functions are being separated into a dedicated Planner role. The following are not explicitly a Driver Manager's responsibility:

- Building next-day schedules or route optimization
- Evaluating market opportunities or capacity planning
- Maintenance coordination (escalate to Ops Lead)
- HR/Driver hiring and onboarding
- Accident investigation (escalate to Safety)
- Cargo claims processing (escalate to Claims)

---

## 2. The Non-Negotiable Daily Pulse

### Morning Readiness Checklist (Start of Every Shift)

Before you touch a single load, complete this checklist for EVERY driver in your fleet:

**MORNING PULSE CHECKLIST**

For EACH assigned driver, verify:

- [ ] **HOS STATUS**
  - Available drive hours verified
  - Any violations pending? Y/N
  - 10-hour reset completed? Y/N

- [ ] **BATTERY STATUS (via Samsara)**
  - Current SoC: 80%+ required
  - Sufficient for first load? Y/N
  - Charging required before dispatch? Y/N

- [ ] **DRIVER READINESS**
  - Driver confirmed available for shift? Y/N
  - Any PTO or availability changes? Y/N
  - Equipment issues reported? Y/N

- [ ] **LOAD ASSIGNMENT**
  - Today's loads reviewed in Apollo? Y/N
  - First dispatch sent? Y/N
  - Pickup appointments confirmed? Y/N

**Time Requirement**: Complete within first 30 minutes of shift

**System of Record**: All findings logged in Apollo

### The "3 Before Me" Coaching Rule

Drivers should be self-sufficient for routine questions. When a driver calls asking something they should know, use this framework:

> **"Before you call me, check:**
> 1. **Your Samsara route** — Does the GPS show your destination?
> 2. **Your load details in Apollo** — Did you read the special instructions?
> 3. **The facility notes** — Is there gate code or check-in info?
>
> **If it's not there, I've got you."**

This trains drivers to problem-solve while assuring them you're always their backup. Document instances where information was missing so we can improve our data quality.

---

## 3. The Yellow Flag System

### Definition

**A Yellow Flag = Any deviation of 15+ minutes from plan.**

Yellow Flags demand immediate dispatcher attention. They are your early warning system before a situation becomes a Red Flag (customer impact).

### Yellow Flag Triggers

| Trigger | Detection Method |
| :--- | :--- |
| Driver not moving 15+ min after scheduled departure | Samsara live map |
| ETA slippage of 15+ min | Samsara route tracking |
| No response to dispatcher message within 15 min | Vendor Flow / RingCentral |
| Battery SoC below planned threshold for route | Samsara battery monitor |
| Driver self-reports "issue" without specifics | Driver communication |

### Yellow Flag Response Protocol

Execute these five steps IN ORDER for every Yellow Flag:

| Step | Action | Time Limit | System |
| :--- | :--- | :--- | :--- |
| **1. Acknowledge** | Note the flag in Apollo load comments with timestamp | Immediate | Apollo |
| **2. Investigate** | CALL the driver (do not text for Yellow Flags) | Within 5 min | RingCentral/Vendor Flow |
| **3. Assess** | Determine: Is this recoverable internally, or does it require escalation? | During call | — |
| **4. Communicate** | If customer impact is likely, move to P2 customer notification | Per P2 SLA | Front |
| **5. Document** | Update Apollo with root cause and resolution | Before shift end | Apollo |

### Example Yellow Flag Response

**Scenario**: Driver Miguel was scheduled to depart pickup at 08:00. It is now 08:18 and Samsara shows truck stationary.

| Step | Action Taken |
| :--- | :--- |
| Acknowledge | Apollo note: "08:18 - Yellow Flag: Driver stationary 18 min post-scheduled departure. Investigating. —DM" |
| Investigate | Called Miguel at 08:19. He reports facility is still loading, delayed by 20 min due to dock backup. |
| Assess | Recoverable — new departure 08:35, delivery ETA still within window with buffer. |
| Communicate | No customer notification needed (ETA still good). |
| Document | Apollo note: "08:22 - Resolved: Facility loading delay. New departure 08:35. ETA on track. —DM" |

---

## 4. Communication Standards

### The Driver Manager Voice

**Tone**: Professional, authoritative, but supportive. You are a **coach**, not a cop.

| Do | Don't |
| :--- | :--- |
| "Let's figure this out together." | "Why didn't you do X?" |
| "Here's what I need from you." | "You should have known that." |
| "I've got your back, but I need you to..." | "That's not my problem." |
| "Good catch on flagging that early." | "You're always having issues." |

### Communication Tools Matrix

| Tool | Primary Use | Response SLA | Best For |
| :--- | :--- | :--- | :--- |
| **Apollo** | System of record | N/A (logging) | All load data, timestamps, notes |
| **Front** | Customer/broker email | < 30 min | Check-calls, status updates, appointment changes |
| **Vendor Flow** | Driver text messaging | < 15 min | Dispatch texts, routine driver comms |
| **RingCentral** | Voice calls | Immediate for P0-P1 | Yellow Flags, escalations, urgent issues |
| **Slack** | Internal team comms | < 15 min during shift | Handoffs, internal escalations |

### Front Tagging System

Apply these tags to EVERY customer communication:

| Category | Tag | When to Use |
| :--- | :--- | :--- |
| **Load Status** | #new-tender | Rate confirmation received, needs review |
| | #booked | Load accepted, driver assigned |
| | #in-transit | Load actively moving |
| | #delivered | POD confirmed, load complete |
| | #issue | Exception or delay in progress |
| | #billing | Ready for invoicing |
| **Priority** | #urgent | Requires response within 15 min |
| | #waiting-customer | Ball in customer's court |
| | #waiting-driver | Ball in driver's court |
| | #escalated | Handed off to Ops Lead/GM |
| **Shift Ownership** | #am-shift | Morning dispatcher owns |
| | #pm-shift | Afternoon dispatcher owns |
| | #night-shift | Night dispatcher owns |

### Proactive Communication Checkpoints

| Checkpoint | Timing | Purpose | Method |
| :--- | :--- | :--- | :--- |
| Morning Pulse | 06:00-06:30 | Confirm driver awake, truck charged, ready | Text or call |
| Pre-Pickup | 45 min before appointment | Confirm ETA, identify obstacles | Apollo note + driver text |
| Unload / Drop-Off | Upon arrival at delivery | Confirm dock assignment, expected wait | Quick call or text |
| End of Day | 30 min before HOS limit | Confirm parking secured, next-day readiness | Call or text |

---

## 5. Regional Operating Guidelines

### California Operations

**Fleet Structure**: Drayage-focused, shift-based coverage

| Fleet | Focus | Typical Shift Pattern |
| :--- | :--- | :--- |
| Colton Drayage | Port/rail container moves | Day/Night rotation |
| Long Beach Drayage | Port container moves | Day/Night rotation |
| Regional OTR | Short-haul regional | Day shift primary |

**California-Specific Considerations**:

- Port operations have unpredictable chassis availability — build in buffer time
- Drayage appointments are strict — missed appointments have financial penalties
- Day and night shifts should have clean handoffs with no orphaned loads
- Ops Lead (Frank) is your first escalation point for California issues

**Driver-to-Dispatcher Assignment (CA Pilot)**:

- Target: 8-10 drivers per dispatcher
- Same dispatcher works with same drivers every shift
- All driver communications go through assigned dispatcher first
- Performance metrics tracked by dispatcher based on their assigned fleet

### Texas Operations

**Fleet Structure**: Production line-based (Coca-Cola), heavily overnight/relay

| Route | Pattern | Key Characteristics |
| :--- | :--- | :--- |
| Waco → Houston | Production line | Hourly departures, 6-hour delivery windows |
| Houston drivers | Reverse route | Meet Waco drivers for relay exchanges |

**Texas-Specific Considerations**:

- Production line runs 24/7 — schedule changes are frequent
- Most loads are overnight — majority of drivers start between 10 PM and 4 AM
- 6-hour delivery windows provide flexibility — anchor on pickup times, not delivery
- Relay operations require precise coordination between driver pairs
- No in-truck tracking yet — rely on driver communication and Navisphere AI calls

**Texas Planning Complexity**:

- Drivers cannot easily slip-seat due to production timing
- Relay exchanges require careful HOS management
- Driver assignments may flex across shift boundaries due to variable production schedules

---

## 6. Quick Reference

### Daily Shift Checklist

**SHIFT START (First 30 minutes)**
- [ ] Complete Morning Pulse Checklist for all assigned drivers
- [ ] Review today's load assignments in Apollo
- [ ] Check Front inbox for overnight customer messages
- [ ] Verify handoff notes from previous shift
- [ ] Confirm any at-risk loads from handoff

**ACTIVE SHIFT**
- [ ] Monitor Samsara for Yellow Flags (15+ min deviations)
- [ ] Respond to customer inquiries within 30 min
- [ ] Execute proactive driver checkpoints per schedule
- [ ] Document all exceptions in Apollo immediately
- [ ] Escalate per matrix — don't hold problems

**SHIFT END (Last 30 minutes)**
- [ ] Complete all P4 administrative logging
- [ ] Update Apollo to 100% accuracy for all loads
- [ ] Prepare handoff notes for incoming dispatcher
- [ ] Tag all Front threads with correct shift ownership
- [ ] Brief incoming dispatcher on any at-risk items

### Key Metrics to Know

| Metric | Target | Your Impact |
| :--- | :--- | :--- |
| Revenue per Truck/Day | $1,000 | Execute loads efficiently, minimize downtime |
| On-Time Delivery | 95%+ | Proactive communication, early intervention |
| Customer Response Time | < 30 min | Front inbox management |
| Driver Utilization | 85%+ | Minimize empty miles through execution |

### Emergency Contacts

| Role | Responsibility | Escalation Path |
| :--- | :--- | :--- |
| Driver Manager (You) | Day-to-day execution | First responder |
| Ops Lead (Frank - CA) | Judgment calls, customer issues | Level 2 |
| GM (Sami - CA, Leslie - TX) | Critical decisions, account risk | Level 3 |
| Safety | Any accident or injury | Level 3 (Immediate) |
| Maintenance | Truck breakdowns | Via Ops Lead |

### The Driver Manager Creed

> I protect **$1,000/truck/day** by executing flawlessly.
>
> I delight customers with **proactive communication** — they never ask "where's my load?"
>
> I empower drivers by being their **coach**, not their controller.
>
> I escalate early. I document everything. I never let a problem hide.

---

*Last Updated: January 19, 2026. This SOP is a living document and will be updated as our technology and fleets expand.*
