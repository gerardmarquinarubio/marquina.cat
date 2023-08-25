const unique = require('.').default;

test('function is imported', () => {
    expect(typeof unique).toBe('function');
});

test('removes duplicate elements', () => {
    const elements = [1, 2, 3, 3, 4, 4, 4, 5, { id: 1 }, { id: 1 }, { id: 2 }];
    const filtered = unique(elements);
    expect(filtered).toStrictEqual([1, 2, 3, 4, 5, { id: 1 }, { id: 2 }]);
});