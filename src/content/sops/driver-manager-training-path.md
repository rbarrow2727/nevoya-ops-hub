---
title: Driver Manager Training Path
description: Interactive training guide featuring the Daily Pulse checklist, 3 Before Me coaching rule, and Yellow Flag Protocol.
lastUpdated: 2026-01-19
role: Driver Manager
---

# Driver Manager Training Path

Welcome to the Nevoya Driver Manager (DM) Training. This guide is designed to transform you into an operational coach. We focus on proactive management rather than reactive firefighting.

---

## Phase 1: The Non-Negotiable Daily Pulse

Before addressing any loads, you must complete the **Morning Pulse Checklist**. This ensures 100% readiness across your fleet.

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

---

## Phase 2: The "3 Before Me" Rule

As a coach, your goal is to empower drivers to be self-sufficient. When a driver calls with a routine question, guide them through this protocol:

### The Script

> **"Before you call me, check:**
> 1. **Your Samsara route** — Does the GPS show your destination?
> 2. **Your load details in Apollo** — Did you read the special instructions?
> 3. **The facility notes** — Is there gate code or check-in info?
>
> **If it's not there, I've got you."**

### Why This Matters

This trains drivers to problem-solve while assuring them you're always their backup. Document instances where information was missing so we can improve our data quality.

### Training Scenario

**Situation**: Driver calls asking "Where am I going after this pickup?"

**Wrong Response**: "Let me look that up for you... you're going to Houston."

**Right Response**: "Did you check your Samsara route and the load details in Apollo? The destination and special instructions should all be there. If something's missing, let me know and I'll get it added."

**Outcome**: Driver learns to check the systems first, reducing unnecessary calls and building self-sufficiency.

---

## Phase 3: The Yellow Flag Protocol

A **Yellow Flag** is any deviation of **15+ minutes** from the plan. Yellow Flags demand immediate attention — they are your early warning system before a situation becomes a Red Flag (customer impact).

### Yellow Flag Triggers

| Trigger | Detection Method |
| :--- | :--- |
| Driver not moving 15+ min after scheduled departure | Samsara live map |
| ETA slippage of 15+ min | Samsara route tracking |
| No response to dispatcher message within 15 min | Vendor Flow / RingCentral |
| Battery SoC below planned threshold for route | Samsara battery monitor |
| Driver self-reports "issue" without specifics | Driver communication |

### Response Sequence

Execute these five steps **IN ORDER** for every Yellow Flag:

| Step | Action | Time Limit | System |
| :--- | :--- | :--- | :--- |
| **1. Acknowledge** | Note the flag in Apollo load comments with timestamp | Immediate | Apollo |
| **2. Investigate** | CALL the driver (no texting for Yellow Flags) | Within 5 min | RingCentral |
| **3. Assess** | Is it recoverable or is a customer notification (P2) required? | During call | — |
| **4. Communicate** | Notify the customer in Front if impact is likely | Per P2 SLA | Front |
| **5. Document** | Update the root cause in the load comments | Before shift end | Apollo |

### Training Scenario: Yellow Flag Response

**Scenario**: Driver Miguel was scheduled to depart pickup at 08:00. It is now 08:18 and Samsara shows truck stationary.

| Step | Your Action |
| :--- | :--- |
| **1. Acknowledge** | Apollo note: "08:18 - Yellow Flag: Driver stationary 18 min post-scheduled departure. Investigating. —DM" |
| **2. Investigate** | Call Miguel at 08:19. He reports facility is still loading, delayed by 20 min due to dock backup. |
| **3. Assess** | Recoverable — new departure 08:35, delivery ETA still within window with buffer. |
| **4. Communicate** | No customer notification needed (ETA still good). |
| **5. Document** | Apollo note: "08:22 - Resolved: Facility loading delay. New departure 08:35. ETA on track. —DM" |

### Key Rules for Yellow Flags

1. **CALL, don't text** — Yellow Flags require voice communication
2. **Document immediately** — Notes in Apollo create accountability trail
3. **Assess quickly** — Determine if it's recoverable within 5 minutes
4. **Communicate proactively** — Customer should never be surprised
5. **Close the loop** — Every Yellow Flag needs a resolution note

---

## Phase 4: Priority Stack Training

When multiple issues arise simultaneously, use the **P0-P4 Priority Stack** to determine what gets attention first.

| Priority | Category | Response Window | Examples |
| :--- | :--- | :--- | :--- |
| **P0** | Safety / Breakdown | **IMMEDIATE** | Accident, truck disabled, medical emergency |
| **P1** | Active Load Exception | **5 minutes** | Driver not moving, ETA slippage, facility rejection |
| **P2** | Customer Communication | **15 minutes** | Check-call request, status update, appointment change |
| **P3** | Driver Check-In | **30 minutes** | Pre-pickup confirmation, end-of-day parking status |
| **P4** | Admin / Logging | **60 minutes** | Apollo updates, documentation, handoff notes |

### Training Scenario: Priority Conflict

**Situation**: At the same time, you receive:
- A customer email asking for a status update (P2)
- A Yellow Flag alert showing a driver stationary for 15+ minutes (P1)
- A reminder to complete your shift handoff notes (P4)

**Correct Response Order**:
1. **P1 First**: Call the stationary driver immediately
2. **P2 Second**: Respond to customer email within 15 minutes
3. **P4 Last**: Complete handoff notes before shift ends

---

## Phase 5: The Driver Manager Voice

### Communication Tone

**Remember**: You are a **coach**, not a cop.

| Do | Don't |
| :--- | :--- |
| "Let's figure this out together." | "Why didn't you do X?" |
| "Here's what I need from you." | "You should have known that." |
| "I've got your back, but I need you to..." | "That's not my problem." |
| "Good catch on flagging that early." | "You're always having issues." |

### The Driver Manager Creed

> I protect **$1,000/truck/day** by executing flawlessly.
>
> I delight customers with **proactive communication** — they never ask "where's my load?"
>
> I empower drivers by being their **coach**, not their controller.
>
> I escalate early. I document everything. I never let a problem hide.

---

## Training Completion Checklist

Before you're ready for live operations, confirm you can:

- [ ] Complete the Morning Pulse Checklist in under 30 minutes
- [ ] Recite the "3 Before Me" script to a driver
- [ ] Execute the 5-step Yellow Flag Protocol from memory
- [ ] Prioritize competing issues using the P0-P4 stack
- [ ] Document all load events in Apollo with proper timestamps
- [ ] Know when to escalate to Ops Lead (Level 2) vs. GM/Safety (Level 3)

---

*Ready to test? Shadow a senior DM for one full shift, then handle a fleet under supervision before going live.*

---

*Last Updated: January 19, 2026. This training guide is reviewed quarterly by Operations Leadership.*
