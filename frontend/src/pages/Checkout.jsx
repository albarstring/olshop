import { useMemo, useState } from 'react'
import PageLayout from '@/components/PageLayout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { products, formatPrice } from '@/data/products'

const paymentMethods = ['Transfer Bank', 'E-Wallet', 'Virtual Account', 'COD']

export default function Checkout() {
  const [payment, setPayment] = useState(paymentMethods[0])
  const selectedItems = useMemo(() => products.slice(0, 2), [])
  const subtotal = selectedItems.reduce((sum, item) => sum + item.price, 0)

  return (
    <PageLayout>
      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <Card className="rounded-[2rem] p-6">
          <CardHeader>
            <CardTitle className="text-3xl">Checkout</CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="space-y-3">
              <p className="text-sm font-medium text-slate-700">Shipping Information</p>
              <Input placeholder="Nama lengkap" />
              <Input placeholder="Email" type="email" />
              <Input placeholder="Nomor telepon" />
              <Input placeholder="Alamat lengkap" />
            </div>

            <div className="space-y-3">
              <p className="text-sm font-medium text-slate-700">Payment Method</p>
              <div className="grid gap-2 sm:grid-cols-2">
                {paymentMethods.map((method) => (
                  <button
                    key={method}
                    type="button"
                    onClick={() => setPayment(method)}
                    className={`rounded-xl border px-3 py-2 text-sm text-left transition ${
                      payment === method
                        ? 'border-slate-700/50 bg-slate-900 text-white'
                        : 'border-white/55 bg-white/45 text-slate-700 hover:bg-white/60'
                    }`}
                  >
                    {method}
                  </button>
                ))}
              </div>
            </div>

            <Button className="w-full rounded-full bg-slate-900 text-white hover:bg-slate-800">Place Order</Button>
          </CardContent>
        </Card>

        <Card className="rounded-[2rem] p-6">
          <CardHeader>
            <CardTitle>Order Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {selectedItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between rounded-xl border border-white/50 bg-white/45 p-3 text-sm text-slate-700">
                <span>{item.name}</span>
                <span>{formatPrice(item.price)}</span>
              </div>
            ))}
            <div className="flex items-center justify-between text-sm text-slate-700">
              <span>Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <div className="flex items-center justify-between text-sm text-slate-700">
              <span>Shipping</span>
              <span>{formatPrice(25000)}</span>
            </div>
            <div className="flex items-center justify-between border-t border-white/50 pt-3 font-semibold text-slate-900">
              <span>Total</span>
              <span>{formatPrice(subtotal + 25000)}</span>
            </div>
            <p className="text-xs text-slate-500">Metode pembayaran dipilih: {payment}</p>
          </CardContent>
        </Card>
      </section>
    </PageLayout>
  )
}
