# air-shared

Shared modules for air-* and Capacitor wearable apps.

## breath-input.js

Microphone RMS breath detector. Copy into instrument `mobile/src/` when updating.

## wearable-input.js

**Canonical** ring/cane input (`createWearableInput` + `WearableInput` class).

```bash
node tools/sync-wearable-input.mjs
```

- Factory / IIFE apps: fully replaced by sync
- Game profiles (`aim-draw` / `steer` / `relay`): sync with default profile
- Continuous instruments (harmonica/suona/electone/keyboard): keep local; thresholds documented in shared file

## Tests

```bash
node --test active/air-shared/test/*.test.js
```
