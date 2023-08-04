import { useState, useEffect, type DependencyList } from 'react';

export default function useFetch<T>(cb: () => Promise<T>, dependencies: DependencyList = []) {
    const [state, setState] = useState<T | undefined | null>(undefined);
    useEffect( () => {
        let cancelled = false;
        cb()
            .then( (data) => {
                if (!cancelled) {
                    setState(data);
                }
            })
            .catch((error) => {
                console.error(error);
                setState(null);
            });
        return () => {
            cancelled = true;
        }
    }, dependencies);
    return state;
}