import { cn } from '@/lib/utils'

function Dialog({ open, onOpenChange, children }) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-slate-900/30 px-4 backdrop-blur-sm" onClick={() => onOpenChange?.(false)}>
      <div onClick={(event) => event.stopPropagation()}>{children}</div>
    </div>
  )
}

function DialogContent({ className, ...props }) {
  return (
    <div
      className={cn(
        'w-full max-w-md rounded-2xl border border-white/55 bg-white/65 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.2)] backdrop-blur-xl',
        className,
      )}
      {...props}
    />
  )
}

function DialogHeader({ className, ...props }) {
  return <div className={cn('mb-4 space-y-1', className)} {...props} />
}

function DialogTitle({ className, ...props }) {
  return <h3 className={cn('text-xl font-semibold text-slate-900', className)} {...props} />
}

function DialogDescription({ className, ...props }) {
  return <p className={cn('text-sm text-slate-600', className)} {...props} />
}

export { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription }
