import { cn } from '@/lib/utils'

function Card({ className, ...props }) {
  return (
    <div
      className={cn(
        'glass-card rounded-[1.8rem] border border-white/40 bg-white/30 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_18px_44px_rgba(120,146,180,0.14)] backdrop-blur-xl',
        className,
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }) {
  return <div className={cn('mb-4 space-y-1.5', className)} {...props} />
}

function CardTitle({ className, ...props }) {
  return <h3 className={cn('text-xl font-semibold tracking-[-0.02em] text-slate-900', className)} {...props} />
}

function CardDescription({ className, ...props }) {
  return <p className={cn('text-sm leading-7 text-slate-600', className)} {...props} />
}

function CardContent({ className, ...props }) {
  return <div className={cn('', className)} {...props} />
}

function CardFooter({ className, ...props }) {
  return <div className={cn('mt-4 flex items-center gap-3', className)} {...props} />
}

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }
