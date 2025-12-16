export type DateRange = {
  from: Date | null
  to: Date | null
}

export interface DateRangePickerProps {
  value: DateRange
  onChange: (value: DateRange) => void
  minDate?: Date
  maxDate?: Date
  disabled?: boolean
}
