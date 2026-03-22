import { cn } from '@/lib/utils'

export function Progress({ value, className }: { value: number; className?: string }) {
  return (
    <div className={cn('progress', className)}>
      <div className="progress__bar" style={{ width: `${value}%` }} />
    </div>
  )
}
