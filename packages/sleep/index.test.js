const sleep = require('.').default;

test('function is imported', () => {
    expect(typeof sleep).toBe('function');
});

test('function sleeps for a given amount of ms', async () => {
    const sleepAmountMs = 100;
    const jitterMs = 10;
    const before = Date.now();
    await sleep(sleepAmountMs);
    const after = Date.now();
    const diff = after - before;
    expect(diff).toBeGreaterThanOrEqual(sleepAmountMs - jitterMs);
    expect(diff).toBeLessThanOrEqual(sleepAmountMs + jitterMs);
});