const group = require('.').default;

test('function is imported', () => {
    expect(typeof group).toBe('function');
});

test('function groups even and odd numbers', () => {
    const elements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const [odd, even] = group(elements, (e) => +(e % 2 === 0));
    expect(even).toStrictEqual([2, 4, 6, 8, 10]);
    expect(odd).toStrictEqual([1, 3, 5, 7, 9]);
});