export interface TimestampFilterProps {
    from?: string;
    to?: string;
    onFromChange: (value: string) => void;
    onToChange: (value: string) => void;
    onClear: () => void;
}