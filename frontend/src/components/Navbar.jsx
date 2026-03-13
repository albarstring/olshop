import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'AI Assistant', to: '/ai-assistant' },
  { label: 'Orders', to: '/orders' },
]

const shopMenuItems = [
  { label: 'Products', to: '/products' },
  { label: 'Cart', to: '/cart' },
  { label: 'Checkout', to: '/checkout' },
  { label: 'Profile', to: '/profile' },
]

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 10)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-7xl -translate-x-1/2 transition-transform duration-300 sm:w-[calc(100%-3rem)] ${
          isVisible ? 'translate-y-0' : '-translate-y-28'
        }`}
      >
        <div className="glass-panel rounded-[2rem] px-5 py-4 backdrop-blur-xl sm:px-7">
          <div className="flex items-center justify-between">
            <div className="hidden md:block">
              <p className="text-xs uppercase tracking-[0.35em] text-slate-500">OLSHOP</p>
              <h1 className="text-lg font-semibold tracking-[0.14em] text-slate-800">Liquid Glass Commerce</h1>
            </div>

            <nav className="hidden items-center gap-7 text-sm text-slate-600 md:flex">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `transition hover:text-slate-950 ${isActive ? 'text-slate-950' : ''}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}

              <div className="group relative">
                <button
                  type="button"
                  className="rounded-full border border-white/60 bg-white/45 px-4 py-2 text-sm text-slate-700 transition hover:bg-white/70 hover:text-slate-950"
                >
                  Shop Menu
                </button>

                <div className="pointer-events-none absolute right-0 top-11 w-48 rounded-2xl border border-white/65 bg-white/80 p-2 opacity-0 shadow-[0_18px_40px_rgba(120,146,180,0.2)] backdrop-blur-xl transition duration-200 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
                  {shopMenuItems.map((item) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      className={({ isActive }) =>
                        `block rounded-xl px-3 py-2 text-sm transition hover:bg-white/70 hover:text-slate-950 ${
                          isActive ? 'bg-white/75 text-slate-950' : 'text-slate-700'
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            </nav>

            <div className="hidden gap-2 md:flex">
              <Button
                asChild
                variant="ghost"
                className="rounded-full px-5 text-slate-700 hover:bg-white/45 hover:text-slate-950"
              >
                <NavLink to="/login">Masuk</NavLink>
              </Button>
              <Button
                asChild
                className="rounded-full bg-white/70 px-5 text-slate-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_12px_30px_rgba(120,146,180,0.22)] backdrop-blur-xl hover:bg-white/85"
              >
                <NavLink to="/register">Daftar</NavLink>
              </Button>
            </div>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              className="flex flex-col gap-1 rounded-full border border-white/70 bg-white/65 p-2.5 transition hover:bg-white/80 md:hidden"
              aria-label="Buka menu navigasi"
              aria-expanded={isMobileMenuOpen}
            >
              <span
                className={`h-0.5 w-5 bg-slate-800 transition-transform duration-300 ${
                  isMobileMenuOpen ? 'translate-y-1.5 rotate-45' : ''
                }`}
              ></span>
              <span
                className={`h-0.5 w-5 bg-slate-800 transition-opacity duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              ></span>
              <span
                className={`h-0.5 w-5 bg-slate-800 transition-transform duration-300 ${
                  isMobileMenuOpen ? '-translate-y-1.5 -rotate-45' : ''
                }`}
              ></span>
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="mt-4 rounded-2xl border border-white/70 bg-white/80 p-4 shadow-[0_14px_34px_rgba(120,146,180,0.16)] backdrop-blur-xl md:hidden">
              <div className="mb-3 border-b border-white/80 pb-3">
                <p className="text-xs uppercase tracking-[0.35em] text-slate-400">OLSHOP</p>
                <h2 className="text-base font-semibold tracking-[0.08em] text-slate-800">Liquid Glass Commerce</h2>
              </div>

              <div className="space-y-1.5">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `block rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                        isActive
                          ? 'bg-slate-900 text-white'
                          : 'text-slate-700 hover:bg-white/80 hover:text-slate-950'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>

              <div className="my-3 h-px bg-white/80"></div>

              <div className="grid grid-cols-2 gap-1.5">
                {shopMenuItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `rounded-xl border px-3 py-2 text-center text-sm font-medium transition ${
                        isActive
                          ? 'border-slate-900 bg-slate-900 text-white'
                          : 'border-white/75 bg-white/65 text-slate-700 hover:bg-white/90 hover:text-slate-950'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>

              <div className="mt-3 grid grid-cols-2 gap-2">
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-white/80 bg-white/70 text-slate-700 hover:bg-white"
                >
                  <NavLink to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                    Masuk
                  </NavLink>
                </Button>
                <Button
                  asChild
                  className="rounded-full bg-slate-900 text-white hover:bg-slate-800"
                >
                  <NavLink to="/register" onClick={() => setIsMobileMenuOpen(false)}>
                    Daftar
                  </NavLink>
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <div className="h-[98px]"></div>
    </>
  )
}