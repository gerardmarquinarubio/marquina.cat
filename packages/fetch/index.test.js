const fetch = require('.').default;

test('function is imported', () => {
    expect(typeof fetch).toBe('function');
});
test('fetching a JSON resource', async () => {
    await expect(fetch('https://jsonplaceholder.typicode.com/posts/1')).resolves.toBeDefined();
});
test('fetching a non JSON resource', async () => {
    await expect(fetch('https://httpstat.us/200')).rejects.toThrow();
});