import { Link } from 'react-router-dom'
import PageLayout from '@/components/PageLayout'
import ProductGrid from '@/components/ProductGrid'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { products } from '@/data/products'

const categoryCards = [
  {
    title: 'Smart Living',
    description: 'Perangkat rumah futuristik dengan desain bersih dan fungsional.',
  },
  {
    title: 'Personal Tech',
    description: 'Gadget pilihan untuk produktivitas dan lifestyle harian.',
  },
  {
    title: 'Travel Edit',
    description: 'Gear modular untuk mobilitas tinggi dan perjalanan nyaman.',
  },
]

export default function Home() {
  return (
    <PageLayout>
      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <Card className="glass-panel rounded-[2.5rem] p-7 sm:p-10">
          <CardHeader className="space-y-4">
            <p className="text-sm uppercase tracking-[0.34em] text-slate-500">Liquid Glass Storefront</p>
            <CardTitle className="max-w-xl text-4xl leading-tight tracking-[-0.04em] sm:text-6xl">
              Belanja produk modern dengan nuansa transparan premium.
            </CardTitle>
            <CardDescription className="max-w-xl text-base sm:text-lg">
              Desain home bergaya liquid glass dengan blur lembut, gradient ambience, dan kartu transparan yang fokus ke conversion.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-3 sm:flex-row">
            <Button asChild className="rounded-full bg-slate-900 px-7 text-white hover:bg-slate-800">
              <Link to="/products">Shop Now</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full border-white/70 bg-white/45 px-7 text-slate-900 hover:bg-white/70">
              <Link to="/ai-assistant">AI Recommendation</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="rounded-[2.5rem] p-7">
          <CardHeader>
            <CardTitle className="text-2xl">AI Recommendation</CardTitle>
            <CardDescription>
              Dapatkan rekomendasi personal berbasis preferensi budget, style, dan kebutuhan harian.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-2xl border border-white/50 bg-white/40 p-4 text-sm text-slate-700">
              Coba prompt: Produk travel di bawah Rp700.000 dengan rating di atas 4.5.
            </div>
            <Button asChild className="w-full rounded-full bg-white/80 text-slate-900 hover:bg-white">
              <Link to="/ai-assistant">Buka AI Assistant</Link>
            </Button>
          </CardContent>
        </Card>
      </section>

      <section className="mt-8">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-900">Featured Products</h2>
          <Button asChild variant="ghost" className="rounded-full text-slate-700 hover:bg-white/45 hover:text-slate-950">
            <Link to="/products">View All</Link>
          </Button>
        </div>
        <ProductGrid products={products.slice(0, 3)} />
      </section>

      <section className="mt-8 grid gap-5 md:grid-cols-3">
        {categoryCards.map((item) => (
          <Card key={item.title} className="rounded-[1.8rem]">
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </section>
    </PageLayout>
  )
}
