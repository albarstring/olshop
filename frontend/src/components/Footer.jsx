const quickLinks = [
  { label: 'Featured', href: '#featured' },
  { label: 'Collections', href: '#collections' },
  { label: 'Membership', href: '#membership' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="glass-panel rounded-[2rem] px-6 py-5 sm:px-7">
      <div className="flex flex-col gap-4 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">OLSHOP</p>
          <p className="mt-1 text-slate-700">Built for modern lifestyle shopping.</p>
        </div>

        <nav className="flex flex-wrap items-center gap-4">
          {quickLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-slate-950">
              {link.label}
            </a>
          ))}
        </nav>

        <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{year} OLSHOP</p>
      </div>
    </footer>
  )
}
