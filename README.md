Create a counter app that tracks multiple counters, shows trends (increase/decrease), and allows for full resets —

┌───────────────────────────────────────────────────┐
│ APP │
│ │
│ ┌─────────────────────────────────────────┐ │
│ │ MultipleCounter │ │
│ │ │ │
│ │ ┌──────────────┐ ┌──────────────┐ │ │
│ │ │ Counter │ │ Counter │ │ │
│ │ └──────────────┘ └──────────────┘ │ │
│ │ │ │
│ │ ┌─────────────────────────────────┐ │ │
│ │ │ useCounters │ │ │
│ │ │ ┌─────────────────────────┐ │ │ │
│ │ │ │ localStorage │ │ │ │
│ │ │ └─────────────────────────┘ │ │ │
│ │ └─────────────────────────────────┘ │ │
│ └─────────────────────────────────────────┘ │
└───────────────────────────────────────────────────┘

         ┌───────────────┐
       │  User Action  │
       └──────┬───────┘
              │

┌───────────▼───────────────┐
│ Counter Component │
└───────────┬───────────────┘
│ (calls handlers)
▼
┌───────────────────────────┐
│ MultipleCounter │
└───────────┬───────────────┘
│ (uses hook)
▼
┌───────────────────────────┐
│ useCounters Hook │
└───────────┬───────────────┘
│ (updates state)
▼
┌───────────────────────────┐
│ localStorage │
└───────────────────────────┘

Component Connections:
App
└── Renders: MultipleCounter
├── Manages: Reset All functionality
└── Passes: version key

MultipleCounter
├── Uses: useCounters hook
├── Renders: Multiple Counter components
└── Passes: Handler functions as props

Counter
├── Receives: count, name, handlers via props
└── Calls: Parent handlers on interaction

useCounters
├── Manages: All counter state
└── Syncs: With localStorage

Key Interactions:
Adding Counter:
[Add Button] → MultipleCounter → useCounters.addCounter()

Updating Counter:
[± Buttons] → Counter → MultipleCounter → useCounters.updateCounter()

Persisting Data:
useCounters → useEffect → localStorage

This sketch shows:

Parent-child component hierarchy

Hook usage pattern

Data flow direction

State management layers

Storage integration
