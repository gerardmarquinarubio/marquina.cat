import { type DependencyList } from 'react';
export default function useFetch<T>(cb: () => Promise<T>, dependencies?: DependencyList): T;
