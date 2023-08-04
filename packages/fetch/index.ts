export default async function __fetch<T = unknown>(input: Parameters<typeof fetch>[0], init?: Parameters<typeof fetch>[1]): Promise<T> {
    const response = await fetch(input, init);
    if (!response.ok) {
        throw new Error(`response was unsuccesful`);
    }
    return await response.json();
}