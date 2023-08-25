export default function unique<T>(items: T[], predicate = (e: T) => 
    (typeof e === 'number' || typeof e === 'string' || typeof e === 'symbol') ? e : JSON.stringify(e), initial = [] as T[]
) {
    const result = initial;
    const lookup = new Set();
    for (const item of items) {
        const index = predicate(item);
        if (!lookup.has(index)) {
            result.push(item);
            lookup.add(index);
        }
    }
    return result;
}