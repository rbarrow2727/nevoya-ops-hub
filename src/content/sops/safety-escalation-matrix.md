---
title: Safety & Escalation Matrix
description: Priority hierarchy (P0-P4) and formal escalation protocols for all Driver Managers.
lastUpdated: 2026-01-19
role: Driver Manager
---

# Safety & Escalation Matrix

Nevoya's mission depends on precise execution and rapid response to deviations. This document defines when a situation is routine (Level 1) and when it requires executive intervention (Level 2/3).

---

## 3. Priority Hierarchy (P0-P4)

### The Dispatcher's Priority Stack

Your role is won or lost in 15-minute increments. When multiple issues arise simultaneously, this hierarchy dictates which gets attention first.

| Tier | Category | Response Window | Escalation Trigger | Examples |
| :--- | :--- | :--- | :--- | :--- |
| **P0** | Safety / Breakdown | **IMMEDIATE** | Any delay | Accident, truck disabled, driver medical emergency |
| **P1** | Active Load Exception | **5 minutes** | 10 min unresolved | Driver not moving, ETA slippage, facility rejection |
| **P2** | Customer Communication | **15 minutes** | 30 min no response | Check-call request, status update, appointment change |
| **P3** | Proactive Driver Check-In | **30 minutes** | Missed window | Pre-pickup confirmation, end-of-day parking status |
| **P4** | Administrative / Logging | **60 minutes** | End of shift | Apollo updates, documentation, handoff notes |

### Priority Decision Tree

```
[New Issue Arrives]
        │
        ▼
Is anyone in physical danger?
        │
   YES ─┴─ NO
    │       │
    ▼       ▼
  P0    Is an active load at risk?
IMMEDIATE      │
            YES ─┴─ NO
             │       │
             ▼       ▼
           P1    Is a customer waiting for response?
         5 min         │
                   YES ─┴─ NO
                    │       │
                    ▼       ▼
                  P2    Is a driver checkpoint due?
                15 min         │
                           YES ─┴─ NO
                            │       │
                            ▼       ▼
                          P3      P4
                        30 min   60 min
```

**P0 Action**: Drop everything. Call Safety + Ops Lead.
**P1 Action**: Call driver immediately. Log in Apollo.
**P2 Action**: Respond via Front. Update customer portal.
**P3 Action**: Text or call driver. Document in Apollo.
**P4 Action**: Complete before shift ends.

---

## 5. Escalation Matrix

### Escalation Philosophy

**Sami's Directive**: Driver Managers must know exactly **what to do** and **when to escalate**. Escalation is not failure — it's smart resource deployment. Hiding problems is what creates failures.

### Apollo as System of Record

**ALL escalations must be documented in Apollo.** This creates the data trail needed for dashboards, accountability, and process improvement. An undocumented escalation did not happen.

### Escalation Levels

| Level | Severity | Handler | Response Time | When to Escalate |
| :--- | :--- | :--- | :--- | :--- |
| **Level 1** | Routine | Driver Manager | Immediate | Standard operating issues within DM authority |
| **Level 2** | Elevated | Ops Lead (Frank in CA) | < 30 min | Issues requiring judgment beyond SOPs or customer relationship risk |
| **Level 3** | Critical | GM (Sami/Leslie) + Safety | Immediate | Safety incidents, major customer at risk, legal/compliance |

---

### Detailed Escalation Triggers

#### Level 1 — Driver Manager Handles

| Situation | Action | Documentation |
| :--- | :--- | :--- |
| Driver running 15 min late | Call driver, assess, update customer if needed | Apollo note |
| Facility wait time < 60 min | Document, continue monitoring | Apollo timestamp |
| Minor appointment reschedule (customer-initiated) | Confirm with driver, update Apollo | Apollo + Front |
| Driver equipment question | Answer or direct to "3 Before Me" | — |
| Routine check-call from customer | Provide status from Apollo | Front response |

#### Level 2 — Escalate to Ops Lead

| Situation | Escalation Trigger | Handler |
| :--- | :--- | :--- |
| Facility wait time > 60 min | Document detention, notify Ops Lead | Ops Lead + DM |
| Driver will miss strict appointment | Cannot recover through normal means | Ops Lead |
| Truck breakdown (non-safety) | Driver cannot continue route | Ops Lead + Maintenance |
| Customer complaint received | Any formal complaint | Ops Lead |
| Repeated service failures on lane | Pattern identified (3+ issues) | Ops Lead |
| Rate dispute or accessorial claim | Outside DM authority | Ops Lead |
| Driver conflict or HR issue | Requires intervention | Ops Lead |

#### Level 3 — Escalate to GM + Safety

| Situation | Escalation Trigger | Handler |
| :--- | :--- | :--- |
| Accident (ANY severity) | Immediately upon notification | Safety + GM + Ops Lead |
| Cargo damage claim | Any reported damage | GM + Claims |
| Driver no-call/no-show | After 1 hour of no contact | GM + Ops Lead |
| Major customer at risk | Account relationship threatened | GM + Account Owner |
| DOT/Compliance issue | Inspection failure, violation | Safety + GM |
| Driver medical emergency | Any health-related incident | Safety + GM |

---

### Escalation Decision Tree

```
[Issue Identified]
        │
        ▼
Is this a SAFETY issue?
        │
   YES ─┴─ NO
    │       │
    ▼       ▼
LEVEL 3  Can I resolve this with existing SOPs?
Call Safety + GM        │
IMMEDIATELY         YES ─┴─ NO
                     │       │
                     ▼       ▼
                 LEVEL 1   Does this require judgment
                Handle it,  beyond my authority?
              document in        │
                Apollo      YES ─┴─ NO
                             │       │
                             ▼       ▼
                         LEVEL 2  Is a customer
                        Escalate  relationship at risk?
                        to Ops Lead     │
                        within 30 min  YES ─┴─ NO
                                        │       │
                                        ▼       ▼
                                    LEVEL 2  LEVEL 1
```

**Level 1**: Document resolution in Apollo
**Level 2**: Document escalation in Apollo + notify via Slack
**Level 3**: Document immediately + verbal notification

---

### Escalation Communication Template

When escalating, provide this information:

**ESCALATION NOTICE — LEVEL [1/2/3]**

| Field | Value |
| :--- | :--- |
| Load # | _______________ |
| Driver | _______________ |
| Customer | _______________ |

**SITUATION (What happened):**
_________________________________

**IMPACT (Why it matters):**
_________________________________

**ACTIONS TAKEN (What you did):**
_________________________________

**RECOMMENDATION (What you think should happen):**
_________________________________

**URGENCY:** [ ] Immediate [ ] Within 30 min [ ] Within 1 hour

---

## Emergency Response Protocol (Level 3)

In the event of an Accident (ANY severity):

1. **Ensure Safety**: Instruct driver to move to a safe location.
2. **First Responders**: Call 911 if there are injuries.
3. **Notify Safety Lead**: Call the Emergency Safety Hotline immediately.
4. **Notify Leadership**: Alert Sami/Leslie via the #urgent Slack channel.

*Documentation: All escalations MUST be logged in the Apollo load comments with the "ESCALATED" tag.*

---

### Emergency Contacts

| Role | Responsibility | Escalation Path |
| :--- | :--- | :--- |
| Driver Manager (You) | Day-to-day execution | First responder |
| Ops Lead (Frank - CA) | Judgment calls, customer issues | Level 2 |
| GM (Sami - CA, Leslie - TX) | Critical decisions, account risk | Level 3 |
| Safety | Any accident or injury | Level 3 (Immediate) |
| Maintenance | Truck breakdowns | Via Ops Lead |

---

*Last Updated: January 19, 2026. This document is reviewed quarterly by Operations Leadership.*
