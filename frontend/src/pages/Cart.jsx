import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import CartItem from '@/components/CartItem'
import PageLayout from '@/components/PageLayout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Sheet, SheetDescription, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { formatPrice, products } from '@/data/products'

const initialCart = products.slice(0, 3).map((product, index) => ({ ...product, qty: index + 1 }))

export default function Cart() {
  const [cartItems, setCartItems] = useState(initialCart)
  const [isSummaryOpen, setIsSummaryOpen] = useState(false)

  const totalPrice = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.qty, 0),
    [cartItems],
  )

  const updateQty = (id, delta) => {
    setCartItems((items) =>
      items
        .map((item) => (item.id === id ? { ...item, qty: Math.max(0, item.qty + delta) } : item))
        .filter((item) => item.qty > 0),
    )
  }

  return (
    <PageLayout>
      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <Card className="rounded-[2rem] p-6">
          <CardHeader>
            <CardTitle className="text-3xl">Cart</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {cartItems.length === 0 ? (
              <p className="text-slate-700">Keranjang kosong. Yuk lanjut belanja.</p>
            ) : (
              cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onDecrease={() => updateQty(item.id, -1)}
                  onIncrease={() => updateQty(item.id, 1)}
                />
              ))
            )}
          </CardContent>
        </Card>

        <Card className="rounded-[2rem] p-6">
          <CardHeader>
            <CardTitle>Order Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between text-sm text-slate-700">
              <span>Total Item</span>
              <span>{cartItems.reduce((sum, item) => sum + item.qty, 0)}</span>
            </div>
            <div className="flex items-center justify-between text-sm text-slate-700">
              <span>Subtotal</span>
              <span>{formatPrice(totalPrice)}</span>
            </div>
            <div className="flex items-center justify-between text-sm text-slate-700">
              <span>Shipping</span>
              <span>{formatPrice(25000)}</span>
            </div>
            <div className="flex items-center justify-between border-t border-white/50 pt-3 text-lg font-semibold text-slate-900">
              <span>Total</span>
              <span>{formatPrice(totalPrice + 25000)}</span>
            </div>
            <Button asChild className="w-full rounded-full bg-slate-900 text-white hover:bg-slate-800">
              <Link to="/checkout">Checkout</Link>
            </Button>
            <Button variant="outline" className="w-full rounded-full" onClick={() => setIsSummaryOpen(true)}>
              Lihat Ringkasan
            </Button>
          </CardContent>
        </Card>
      </section>

      <Sheet open={isSummaryOpen} onOpenChange={setIsSummaryOpen}>
        <SheetHeader>
          <SheetTitle>Ringkasan Keranjang</SheetTitle>
          <SheetDescription>Pastikan jumlah item dan total belanja sudah sesuai.</SheetDescription>
        </SheetHeader>
        <div className="mt-4 space-y-3 text-sm text-slate-700">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between rounded-xl border border-white/50 bg-white/45 p-3">
              <span>{item.name} x{item.qty}</span>
              <span>{formatPrice(item.qty * item.price)}</span>
            </div>
          ))}
          <div className="flex items-center justify-between border-t border-white/50 pt-3 font-semibold text-slate-900">
            <span>Total</span>
            <span>{formatPrice(totalPrice + 25000)}</span>
          </div>
        </div>
      </Sheet>
    </PageLayout>
  )
}
