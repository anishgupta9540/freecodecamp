const test = require("node:test");
const assert = require("node:assert");
const isSpam = require("../src/isSpam");

test("returns false for a valid non-spam number", () => {
  assert.strictEqual(
    isSpam("+0 (200) 234-0182"),
    false
  );
});

test("detects invalid country code", () => {
  assert.strictEqual(
    isSpam("+091 (555) 309-1922"),
    true
  );
});

test("detects country code that does not start with zero", () => {
  assert.strictEqual(
    isSpam("+1 (555) 435-4792"),
    true
  );
});

test("detects area code greater than 900", () => {
  assert.strictEqual(
    isSpam("+0 (955) 234-4364"),
    true
  );
});

test("detects area code less than 200", () => {
  assert.strictEqual(
    isSpam("+0 (155) 131-6943"),
    true
  );
});

test("detects local number sum", () => {
  assert.strictEqual(
    isSpam("+0 (555) 135-0192"),
    true
  );
});

test("returns true when local sum appears in last four digits", () => {
  assert.strictEqual(
    isSpam("+0 (555) 564-1987"),
    true
  );
});

test("allows country code 00", () => {
  assert.strictEqual(
    isSpam("+00 (555) 234-0182"),
    false
  );
});