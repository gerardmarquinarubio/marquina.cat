export default function group<T, K extends string | number | symbol >(items: T[], predicate: (element: T) => K, initial = {} as Record<K, T[]>) {
    const result = initial;
    for (const item of items) {
        const index = predicate(item);
        if (!result[index]) {
            result[index] = [];
        }
        result[index].push(item);
    }
    return result;
}