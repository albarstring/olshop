import { cn } from '@/lib/utils'

function Textarea({ className, ...props }) {
  return (
    <textarea
      className={cn(
        'min-h-28 w-full rounded-xl border border-white/55 bg-white/45 px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-500 backdrop-blur-xl outline-none transition focus-visible:ring-2 focus-visible:ring-slate-400/50',
        className,
      )}
      {...props}
    />
  )
}

export { Textarea }
