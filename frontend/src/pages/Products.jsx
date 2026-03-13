import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import PageLayout from '@/components/PageLayout'
import ProductGrid from '@/components/ProductGrid'
import SearchBar from '@/components/SearchBar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { categories, products } from '@/data/products'

const sortOptions = [
  { label: 'Terbaru', value: 'latest' },
  { label: 'Harga Termurah', value: 'lowest' },
  { label: 'Harga Tertinggi', value: 'highest' },
  { label: 'Rating Tertinggi', value: 'rating' },
]

export default function Products() {
  const [query, setQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('latest')

  const filteredProducts = useMemo(() => {
    const normalized = query.trim().toLowerCase()

    let result = products.filter((product) => {
      const matchCategory = selectedCategory === 'All' || product.category === selectedCategory
      const matchSearch =
        !normalized ||
        product.name.toLowerCase().includes(normalized) ||
        product.category.toLowerCase().includes(normalized) ||
        product.description.toLowerCase().includes(normalized)

      return matchCategory && matchSearch
    })

    if (sortBy === 'lowest') result = [...result].sort((a, b) => a.price - b.price)
    if (sortBy === 'highest') result = [...result].sort((a, b) => b.price - a.price)
    if (sortBy === 'rating') result = [...result].sort((a, b) => b.rating - a.rating)

    return result
  }, [query, selectedCategory, sortBy])

  return (
    <PageLayout>
      <section className="space-y-6">
        <Card className="rounded-[2rem] p-6">
          <CardHeader className="pb-4">
            <CardTitle className="text-3xl">Products</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <SearchBar value={query} onChange={setQuery} />

            <div className="grid gap-3 md:grid-cols-[1fr_auto]">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? 'default' : 'outline'}
                    className="rounded-full"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>

              <select
                className="h-10 rounded-xl border border-white/55 bg-white/45 px-3 text-sm text-slate-800"
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value)}
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </CardContent>
        </Card>

        {filteredProducts.length > 0 ? (
          <ProductGrid products={filteredProducts} />
        ) : (
          <Card className="rounded-[1.8rem] p-8 text-center">
            <p className="text-slate-700">Produk tidak ditemukan. Coba kata kunci lain.</p>
            <Button asChild variant="ghost" className="mt-3 rounded-full">
              <Link to="/ai-assistant">Tanya AI Assistant</Link>
            </Button>
          </Card>
        )}
      </section>
    </PageLayout>
  )
}
