import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import { cn } from '@/lib/utils'

type BaseProps = {
  variant?: 'default' | 'secondary' | 'outline' | 'ghost'
  size?: 'default' | 'sm' | 'lg'
  children: ReactNode
  className?: string
}

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement>
type LinkButtonProps = BaseProps & LinkProps & { to: string }

export function Button({ variant = 'default', size = 'default', className, children, ...props }: ButtonProps) {
  return <button className={cn('btn', `btn--${variant}`, `btn--${size}`, className)} {...props}>{children}</button>
}

export function ButtonLink({ variant = 'default', size = 'default', className, children, ...props }: LinkButtonProps) {
  return <Link className={cn('btn', `btn--${variant}`, `btn--${size}`, className)} {...props}>{children}</Link>
}
