export function cn(...inputs: Array<string | false | null | undefined>) {
  return inputs.filter(Boolean).join(' ')
}

export const formatPercent = (value: number) => `${value.toFixed(0)}%`
export const formatDecimal = (value: number, digits = 1) => value.toFixed(digits)
