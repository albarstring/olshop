import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageLayout from '@/components/PageLayout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { products, formatPrice } from '@/data/products'

const initialMessages = [
  {
    role: 'assistant',
    text: 'Halo! Saya AI shopping assistant. Ceritakan kebutuhan produk kamu dan budget yang diinginkan.',
  },
]

export default function AIAssistant() {
  const [messages, setMessages] = useState(initialMessages)
  const [input, setInput] = useState('')

  const onSend = (event) => {
    event.preventDefault()
    if (!input.trim()) return

    const userMessage = { role: 'user', text: input }
    const suggestion = { role: 'assistant', text: 'Berdasarkan kebutuhanmu, coba cek rekomendasi produk di bawah ini.' }

    setMessages((prev) => [...prev, userMessage, suggestion])
    setInput('')
  }

  return (
    <PageLayout>
      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <Card className="rounded-[2rem] p-6">
          <CardHeader>
            <CardTitle className="text-3xl">AI Assistant</CardTitle>
            <CardDescription>Chat untuk rekomendasi produk yang sesuai kebutuhanmu.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="h-[420px] space-y-3 overflow-y-auto rounded-2xl border border-white/50 bg-white/35 p-4">
              {messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm leading-7 ${
                    message.role === 'user'
                      ? 'ml-auto bg-slate-900 text-white'
                      : 'bg-white/75 text-slate-700'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            <form className="flex gap-2" onSubmit={onSend}>
              <Input value={input} onChange={(event) => setInput(event.target.value)} placeholder="Contoh: Cari gadget untuk WFH budget 1 juta" />
              <Button type="submit" className="rounded-full bg-slate-900 px-6 text-white hover:bg-slate-800">
                Kirim
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card className="rounded-[2rem] p-6">
          <CardHeader>
            <CardTitle>AI Suggestions</CardTitle>
            <CardDescription>Rekomendasi cepat berdasarkan trend dan preferensi populer.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {products.slice(0, 3).map((item) => (
              <article key={item.id} className="rounded-2xl border border-white/50 bg-white/45 p-3">
                <p className="font-medium text-slate-900">{item.name}</p>
                <p className="text-sm text-slate-600">{item.category}</p>
                <div className="mt-2 flex items-center justify-between">
                  <p className="text-sm font-semibold text-slate-800">{formatPrice(item.price)}</p>
                  <Button asChild size="sm" className="rounded-full bg-white/80 text-slate-900 hover:bg-white">
                    <Link to={`/products/${item.id}`}>Detail</Link>
                  </Button>
                </div>
              </article>
            ))}
          </CardContent>
        </Card>
      </section>
    </PageLayout>
  )
}
