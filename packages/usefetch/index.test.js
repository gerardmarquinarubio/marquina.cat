/** @jest-environment jsdom */
const { renderHook, waitFor } = require("@testing-library/react");
const useFetch = require('.').default;

const lookupText = 'Hello';

test('hook is imported', () => {
    expect(typeof useFetch).toBe('function');
});

test('hook resolves correctly', async () => {
    const { result } = renderHook( () => useFetch(async () => lookupText) );
    expect(result.current).toEqual(undefined);
    await waitFor(() => expect(result.current).toEqual(lookupText), { timeout: 100 });
});

test(`hook doesn't break if the callback is executed after the component is unmounted`, async () => {
    const { unmount } = renderHook( () => useFetch(async () => {
        return lookupText;
    }));
    unmount();
});