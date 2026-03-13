import { cn } from '@/lib/utils'

function Sheet({ open, onOpenChange, side = 'right', children }) {
  if (!open) return null

  const sideClass =
    side === 'left'
      ? 'left-0 border-r'
      : side === 'top'
        ? 'top-0 left-0 right-0 h-auto border-b'
        : side === 'bottom'
          ? 'bottom-0 left-0 right-0 h-auto border-t'
          : 'right-0 border-l'

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/30 backdrop-blur-sm" onClick={() => onOpenChange?.(false)}>
      <div
        className={cn(
          'absolute h-full w-full max-w-md border-white/55 bg-white/65 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.2)] backdrop-blur-xl',
          sideClass,
        )}
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )
}

function SheetHeader({ className, ...props }) {
  return <div className={cn('mb-4 space-y-1', className)} {...props} />
}

function SheetTitle({ className, ...props }) {
  return <h3 className={cn('text-xl font-semibold text-slate-900', className)} {...props} />
}

function SheetDescription({ className, ...props }) {
  return <p className={cn('text-sm text-slate-600', className)} {...props} />
}

export { Sheet, SheetHeader, SheetTitle, SheetDescription }
