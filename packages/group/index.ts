export default function group<T>(items: T[], predicate: (element: T) => number) {
    const result: T[][] = [];
    for (const item of items) {
        const index = predicate(item);
        if (!result[index]) {
            result[index] = [];
        }
        result[index].push(item);
    }
    return result;
}