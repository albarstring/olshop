import { cn } from '@/lib/utils'

function Avatar({ className, ...props }) {
  return (
    <div
      className={cn(
        'relative flex h-16 w-16 shrink-0 overflow-hidden rounded-full border border-white/70 bg-white/60 shadow-[0_10px_24px_rgba(120,146,180,0.2)]',
        className,
      )}
      {...props}
    />
  )
}

function AvatarImage({ className, alt = '', ...props }) {
  return <img alt={alt} className={cn('h-full w-full object-cover', className)} {...props} />
}

function AvatarFallback({ className, ...props }) {
  return (
    <div className={cn('flex h-full w-full items-center justify-center text-sm font-semibold text-slate-700', className)} {...props} />
  )
}

export { Avatar, AvatarImage, AvatarFallback }
