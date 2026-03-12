import { Button } from '@/components/ui/button'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '../App.css'

const featuredProducts = [
  {
    name: 'Aero Glass Bottle',
    category: 'Daily Carry',
    price: 'Rp349.000',
    accent: 'from-cyan-200/80 via-white/40 to-sky-300/70',
  },
  {
    name: 'Nimbus Speaker Mini',
    category: 'Audio',
    price: 'Rp1.249.000',
    accent: 'from-emerald-200/80 via-white/40 to-teal-300/70',
  },
  {
    name: 'Halo Travel Case',
    category: 'Organizer',
    price: 'Rp529.000',
    accent: 'from-amber-200/80 via-white/40 to-orange-300/70',
  },
]

const categories = [
  {
    title: 'Smart Living',
    description: 'Perangkat rumah dengan detail transparan dan finishing satin.',
  },
  {
    title: 'Personal Tech',
    description: 'Gadget pilihan dengan material premium, ringan, dan clean.',
  },
  {
    title: 'Travel Edit',
    description: 'Tas, pouch, dan essentials yang dirancang untuk mobilitas tinggi.',
  },
]

const metrics = [
  { value: '24h', label: 'same day dispatch' },
  { value: '4.9', label: 'average rating' },
  { value: '12k+', label: 'members joined' },
]

export default function Homepage() {
  return (
    <div className="page-shell relative overflow-hidden px-4 py-4 text-slate-900 sm:px-6 lg:px-8">
      <div className="ambient ambient-one" aria-hidden="true"></div>
      <div className="ambient ambient-two" aria-hidden="true"></div>
      <div className="ambient ambient-grid" aria-hidden="true"></div>

      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-6">
        <Navbar />

        <main className="grid flex-1 gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <section className="glass-panel relative overflow-hidden rounded-[2.5rem] px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
            <div className="liquid-badge mb-6 inline-flex items-center gap-3 rounded-full px-4 py-2 text-sm text-slate-700">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
              Rilis baru tiap Jumat, kurasi premium tiap minggu.
            </div>

            <div className="max-w-2xl space-y-6">
              <p className="text-sm font-medium uppercase tracking-[0.38em] text-slate-500">Glassmorphism E-Commerce</p>
              <h2 className="max-w-xl text-4xl font-semibold leading-tight tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl">
                Belanja produk lifestyle modern dalam lapisan liquid glass yang ringan.
              </h2>
              <p className="max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                Home page ini dirancang seperti showroom digital: transparan, lembut, reflektif, dan tetap fokus ke konversi.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button className="rounded-full bg-slate-950 px-6 py-6 text-sm text-white shadow-[0_20px_40px_rgba(15,23,42,0.2)] hover:bg-slate-800">
                  Belanja Sekarang
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full border-white/60 bg-white/45 px-6 py-6 text-sm text-slate-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_16px_40px_rgba(148,163,184,0.18)] backdrop-blur-xl hover:bg-white/65"
                >
                  Lihat Koleksi Baru
                </Button>
              </div>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {metrics.map((item) => (
                <div key={item.label} className="glass-card rounded-[1.75rem] p-4">
                  <p className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">{item.value}</p>
                  <p className="mt-1 text-sm text-slate-600">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 grid gap-4 lg:grid-cols-[1fr_0.9fr]">
              <div className="glass-card rounded-[2rem] p-5 sm:p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Best Seller</p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-slate-950">Nimbus Capsule Lamp</h3>
                  </div>
                  <span className="rounded-full border border-white/70 bg-white/65 px-3 py-1 text-sm text-slate-700">
                    Rp899.000
                  </span>
                </div>

                <div className="mt-6 overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-white/85 via-sky-100/70 to-cyan-200/70 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
                  <div className="mx-auto aspect-[4/3] max-w-sm rounded-[1.5rem] bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.98),rgba(255,255,255,0.45)_35%,rgba(186,230,253,0.62)_70%,rgba(125,211,252,0.9))] shadow-[inset_0_1px_20px_rgba(255,255,255,0.65),0_25px_60px_rgba(14,116,144,0.22)]">
                    <div className="flex h-full items-end justify-between p-5 text-xs uppercase tracking-[0.28em] text-slate-600">
                      <span>soft glow</span>
                      <span>wireless</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="glass-card rounded-[2rem] p-5">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Curated For You</p>
                  <p className="mt-3 text-lg font-medium leading-8 text-slate-700">
                    Kombinasi warna dingin, highlight putih, dan blur halus menjaga nuansa glass tetap premium tanpa mengorbankan readability.
                  </p>
                </div>

                <div className="glass-card rounded-[2rem] p-5">
                  <div className="flex items-center justify-between">
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Live Basket</p>
                    <span className="text-sm text-slate-600">3 items</span>
                  </div>
                  <div className="mt-5 space-y-4">
                    {featuredProducts.slice(0, 2).map((item) => (
                      <div
                        key={item.name}
                        className="flex items-center gap-4 rounded-[1.5rem] border border-white/50 bg-white/35 p-3"
                      >
                        <div className={`h-14 w-14 rounded-[1.2rem] bg-gradient-to-br ${item.accent}`}></div>
                        <div className="min-w-0 flex-1">
                          <p className="truncate font-medium text-slate-900">{item.name}</p>
                          <p className="text-sm text-slate-500">{item.category}</p>
                        </div>
                        <p className="text-sm font-medium text-slate-700">{item.price}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <aside className="grid gap-6">
            <section id="collections" className="glass-panel rounded-[2.5rem] p-6 sm:p-7">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Collections</p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-slate-950">Edit pilihan minggu ini</h3>
                </div>
                <span className="rounded-full border border-white/70 bg-white/55 px-3 py-1 text-xs uppercase tracking-[0.28em] text-slate-600">
                  New
                </span>
              </div>

              <div className="mt-6 space-y-4">
                {categories.map((item, index) => (
                  <article key={item.title} className="glass-card rounded-[1.8rem] p-5">
                    <p className="text-sm text-slate-500">0{index + 1}</p>
                    <h4 className="mt-3 text-xl font-semibold text-slate-900">{item.title}</h4>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
                  </article>
                ))}
              </div>
            </section>

            <section id="featured" className="glass-panel rounded-[2.5rem] p-6 sm:p-7">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Featured Drop</p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-slate-950">Produk unggulan</h3>
                </div>
                <a href="#membership" className="text-sm text-slate-600 transition hover:text-slate-950">
                  Join membership
                </a>
              </div>

              <div className="mt-6 grid gap-4">
                {featuredProducts.map((item) => (
                  <article key={item.name} className="glass-card rounded-[1.8rem] p-4">
                    <div className={`h-32 rounded-[1.5rem] bg-gradient-to-br ${item.accent}`}></div>
                    <div className="mt-4 flex items-start justify-between gap-4">
                      <div>
                        <p className="text-lg font-semibold text-slate-900">{item.name}</p>
                        <p className="text-sm text-slate-500">{item.category}</p>
                      </div>
                      <p className="text-sm font-medium text-slate-700">{item.price}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section id="membership" className="glass-panel rounded-[2.5rem] p-6 sm:p-7">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Membership</p>
              <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-slate-950">
                Masuk ke inner circle dan dapat early access.
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Akses diskon private, drop terbatas, dan preview produk baru sebelum tayang di storefront utama.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button className="rounded-full bg-white/80 px-6 text-slate-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_18px_40px_rgba(120,146,180,0.2)] backdrop-blur-xl hover:bg-white">
                  Daftar Membership
                </Button>
                <Button variant="ghost" className="rounded-full px-6 text-slate-700 hover:bg-white/45 hover:text-slate-950">
                  Lihat Benefit
                </Button>
              </div>
            </section>
          </aside>
        </main>

        <Footer />
      </div>
    </div>
  )
}
