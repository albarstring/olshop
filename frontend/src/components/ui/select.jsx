import { cn } from '@/lib/utils'

function Select({ className, children, ...props }) {
  return (
    <select
      className={cn(
        'h-11 w-full rounded-xl border border-white/55 bg-white/45 px-3 text-sm text-slate-900 backdrop-blur-xl outline-none transition focus-visible:ring-2 focus-visible:ring-slate-400/50',
        className,
      )}
      {...props}
    >
      {children}
    </select>
  )
}

export { Select }
