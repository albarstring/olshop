import { Button } from '@/components/ui/button'

export default function Navbar() {
  return (
    <header className="glass-panel sticky top-4 z-20 flex items-center justify-between rounded-[2rem] px-5 py-4 backdrop-blur-xl sm:px-7">
      <div>
        <p className="text-xs uppercase tracking-[0.35em] text-slate-500">OLSHOP</p>
        <h1 className="text-lg font-semibold tracking-[0.14em] text-slate-800">Liquid Glass Commerce</h1>
      </div>

      <nav className="hidden items-center gap-7 text-sm text-slate-600 md:flex">
        <a href="#featured" className="transition hover:text-slate-950">Featured</a>
        <a href="#collections" className="transition hover:text-slate-950">Collections</a>
        <a href="#membership" className="transition hover:text-slate-950">Membership</a>
      </nav>

      <Button className="rounded-full bg-white/70 px-5 text-slate-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_12px_30px_rgba(120,146,180,0.22)] backdrop-blur-xl hover:bg-white/85">
        Masuk
      </Button>
    </header>
  )
}
