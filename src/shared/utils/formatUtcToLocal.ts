export function formatUtcToLocal(utcIso: string): string {
    const date = new Date(utcIso);

    return new Intl.DateTimeFormat("en-US", {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
    }).format(date);
}