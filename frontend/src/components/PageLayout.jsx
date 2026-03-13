import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '@/App.css'

export default function PageLayout({ children }) {
  return (
    <div className="page-shell relative overflow-hidden px-4 py-4 text-slate-900 sm:px-6 lg:px-8">
      <div className="ambient ambient-one" aria-hidden="true"></div>
      <div className="ambient ambient-two" aria-hidden="true"></div>
      <div className="ambient ambient-grid" aria-hidden="true"></div>

      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-6">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </div>
  )
}
