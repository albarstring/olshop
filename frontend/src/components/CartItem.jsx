import { Button } from '@/components/ui/button'
import { formatPrice } from '@/data/products'

export default function CartItem({ item, onDecrease, onIncrease }) {
  return (
    <article className="glass-card flex flex-col gap-4 rounded-[1.5rem] p-4 sm:flex-row sm:items-center">
      <img src={item.image} alt={item.name} className="h-24 w-24 rounded-xl object-cover" />

      <div className="min-w-0 flex-1">
        <h3 className="truncate text-lg font-semibold text-slate-900">{item.name}</h3>
        <p className="text-sm text-slate-600">{item.category}</p>
        <p className="mt-1 text-sm font-medium text-slate-800">{formatPrice(item.price)}</p>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="outline" size="icon-sm" className="rounded-full" onClick={onDecrease}>
          -
        </Button>
        <span className="w-8 text-center text-sm font-semibold text-slate-800">{item.qty}</span>
        <Button variant="outline" size="icon-sm" className="rounded-full" onClick={onIncrease}>
          +
        </Button>
      </div>
    </article>
  )
}
