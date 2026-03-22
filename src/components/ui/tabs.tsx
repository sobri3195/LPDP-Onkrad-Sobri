import { createContext, useContext, useState, type ButtonHTMLAttributes, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

const TabsContext = createContext<{ value: string; setValue: (value: string) => void } | null>(null)

export function Tabs({ defaultValue, children }: { defaultValue: string; children: ReactNode }) {
  const [value, setValue] = useState(defaultValue)
  return <TabsContext.Provider value={{ value, setValue }}>{children}</TabsContext.Provider>
}

export function TabsList({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn('tabs__list', className)}>{children}</div>
}

export function TabsTrigger({ value, className, children, ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { value: string }) {
  const context = useContext(TabsContext)
  if (!context) return null
  return (
    <button
      type="button"
      className={cn('tabs__trigger', context.value === value && 'tabs__trigger--active', className)}
      onClick={() => context.setValue(value)}
      {...props}
    >
      {children}
    </button>
  )
}

export function TabsContent({ value, className, children }: { value: string; className?: string; children: ReactNode }) {
  const context = useContext(TabsContext)
  if (!context || context.value !== value) return null
  return <div className={cn('tabs__content', className)}>{children}</div>
}
