import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { formatPrice } from '@/data/products'

export default function ProductCard({ product }) {
  return (
    <Card className="overflow-hidden rounded-[1.8rem] p-0">
      <img src={product.image} alt={product.name} className="h-52 w-full object-cover" />
      <CardContent className="p-5">
        <p className="text-xs uppercase tracking-[0.24em] text-slate-500">{product.category}</p>
        <h3 className="mt-2 text-xl font-semibold text-slate-900">{product.name}</h3>
        <p className="mt-1 text-sm text-slate-600 line-clamp-2">{product.description}</p>
        <div className="mt-3 flex items-center justify-between">
          <p className="text-lg font-semibold text-slate-900">{formatPrice(product.price)}</p>
          <p className="text-sm text-amber-600">{product.rating} / 5</p>
        </div>
      </CardContent>
      <CardFooter className="p-5 pt-0">
        <Button asChild className="w-full rounded-full bg-slate-900 text-white hover:bg-slate-800">
          <Link to={`/products/${product.id}`}>Lihat Detail</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
