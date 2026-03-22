import type { ReactNode, SelectHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export function Select({ className, children, ...props }: SelectHTMLAttributes<HTMLSelectElement> & { children: ReactNode }) {
  return <select className={cn('select', className)} {...props}>{children}</select>
}

export function SelectTrigger({ children }: { children: ReactNode }) {
  return <>{children}</>
}
export function SelectContent({ children }: { children: ReactNode }) {
  return <>{children}</>
}
export function SelectItem({ value, children }: { value: string; children: ReactNode }) {
  return <option value={value}>{children}</option>
}
export function SelectValue() {
  return null
}
