import { cn } from '@/lib/utils'

function Alert({ className, variant = 'default', ...props }) {
  return (
    <div
      role="alert"
      className={cn(
        'rounded-xl border border-white/50 bg-white/40 p-4 text-sm backdrop-blur-xl',
        variant === 'destructive' && 'border-rose-300/60 bg-rose-100/50 text-rose-700',
        variant === 'success' && 'border-emerald-300/60 bg-emerald-100/50 text-emerald-700',
        className,
      )}
      {...props}
    />
  )
}

function AlertTitle({ className, ...props }) {
  return <h5 className={cn('mb-1 font-semibold', className)} {...props} />
}

function AlertDescription({ className, ...props }) {
  return <p className={cn('leading-6', className)} {...props} />
}

export { Alert, AlertTitle, AlertDescription }
