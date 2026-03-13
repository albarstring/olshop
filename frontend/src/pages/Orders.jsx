import PageLayout from '@/components/PageLayout'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { formatPrice } from '@/data/products'

const orders = [
  { id: 'ORD-1024', date: '2026-03-10', total: 1899000, status: 'Shipped' },
  { id: 'ORD-1019', date: '2026-03-06', total: 529000, status: 'Processing' },
  { id: 'ORD-1012', date: '2026-02-27', total: 349000, status: 'Delivered' },
]

export default function Orders() {
  return (
    <PageLayout>
      <section className="space-y-5">
        <Alert variant="success">
          <AlertTitle>Order Tracking Aktif</AlertTitle>
          <AlertDescription>Notifikasi status pesanan akan dikirim ke email terdaftar.</AlertDescription>
        </Alert>

        <Card className="rounded-[2rem] p-6">
          <CardHeader>
            <CardTitle className="text-3xl">Order History</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {orders.map((order) => (
              <article key={order.id} className="flex flex-col gap-3 rounded-2xl border border-white/55 bg-white/40 p-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-semibold text-slate-900">{order.id}</p>
                  <p className="text-sm text-slate-600">Tanggal: {order.date}</p>
                </div>
                <p className="text-sm text-slate-700">{formatPrice(order.total)}</p>
                <span className="rounded-full border border-white/60 bg-white/50 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-700">
                  {order.status}
                </span>
              </article>
            ))}
          </CardContent>
        </Card>
      </section>
    </PageLayout>
  )
}
