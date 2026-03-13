import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import PageLayout from '@/components/PageLayout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { formatPrice, products } from '@/data/products'

export default function ProductDetail() {
  const { id } = useParams()
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const product = useMemo(() => products.find((item) => String(item.id) === id), [id])

  if (!product) {
    return (
      <PageLayout>
        <Card className="rounded-[2rem] p-8 text-center">
          <p className="text-slate-700">Produk tidak ditemukan.</p>
          <Button asChild className="mt-4 rounded-full">
            <Link to="/products">Kembali ke Products</Link>
          </Button>
        </Card>
      </PageLayout>
    )
  }

  return (
    <PageLayout>
      <section className="grid gap-6 lg:grid-cols-2">
        <Card className="overflow-hidden rounded-[2rem] p-0">
          <img src={product.image} alt={product.name} className="h-[430px] w-full object-cover" />
          <CardContent className="grid grid-cols-3 gap-3 p-4">
            {[1, 2, 3].map((index) => (
              <img
                key={index}
                src={product.image}
                alt={`${product.name} ${index}`}
                className="h-24 w-full rounded-xl object-cover opacity-90"
              />
            ))}
          </CardContent>
        </Card>

        <Card className="rounded-[2rem] p-7">
          <CardHeader>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">{product.category}</p>
            <CardTitle className="text-3xl">{product.name}</CardTitle>
            <CardDescription>{product.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="flex items-center justify-between rounded-2xl border border-white/50 bg-white/40 p-4">
              <p className="text-sm text-slate-600">Harga</p>
              <p className="text-2xl font-semibold text-slate-900">{formatPrice(product.price)}</p>
            </div>
            <div className="flex items-center justify-between rounded-2xl border border-white/50 bg-white/40 p-4">
              <p className="text-sm text-slate-600">Rating</p>
              <p className="text-lg font-medium text-amber-600">{product.rating} / 5</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild className="rounded-full bg-slate-900 text-white hover:bg-slate-800">
                <Link to="/cart">Add to Cart</Link>
              </Button>
              <Button variant="outline" className="rounded-full" onClick={() => setIsDialogOpen(true)}>
                Product Info
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{product.name}</DialogTitle>
            <DialogDescription>Detail produk tambahan untuk membantu keputusan pembelian.</DialogDescription>
          </DialogHeader>
          <ul className="space-y-2 text-sm text-slate-700">
            <li>Material premium dan finishing anti-fingerprint.</li>
            <li>Garansi resmi 12 bulan.</li>
            <li>Pengiriman same day untuk area Jabodetabek.</li>
          </ul>
        </DialogContent>
      </Dialog>
    </PageLayout>
  )
}
