export function formatLocalToUtc(localIso: string): string {
    const date = new Date(localIso);
    return date.toISOString();
}