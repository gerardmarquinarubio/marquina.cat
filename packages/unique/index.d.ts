export default function unique<T>(items: T[], predicate?: (e: T) => string | (T & number) | (T & symbol), initial?: T[]): T[];
