export default function group<T, K extends string | number | symbol>(items: T[], predicate: (element: T) => K, initial?: Record<K, T[]>): Record<K, T[]>;
