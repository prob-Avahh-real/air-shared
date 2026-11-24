import test from 'node:test';
import assert from 'node:assert/strict';
import { createWearableInput, WearableInput, WEARABLE_DEFAULTS } from '../wearable-input.js';

test('WEARABLE_DEFAULTS match repo convention', () => {
  assert.equal(WEARABLE_DEFAULTS.RING_TILT, 5);
  assert.equal(WEARABLE_DEFAULTS.RING_SHAKE, 20);
  assert.equal(WEARABLE_DEFAULTS.CANE_TAP, 8);
});

test('createWearableInput returns start/stop/permission API', () => {
  const w = createWearableInput({});
  assert.equal(typeof w.start, 'function');
  assert.equal(typeof w.stop, 'function');
  assert.equal(typeof w.requestPermission, 'function');
  assert.equal(w.isListening(), false);
  w.start(); // no-op without window listeners crashing in node
  w.stop();
});

test('WearableInput defaults to generic profile', () => {
  const w = new WearableInput({ onGesture() {} });
  assert.equal(w.profile, 'generic');
});

test('WearableInput accepts aim-draw profile', () => {
  const w = new WearableInput({ profile: 'aim-draw', onGesture() {} });
  assert.equal(w.profile, 'aim-draw');
});
