import { Input } from '@/components/ui/input'

export default function SearchBar({ value, onChange }) {
  return (
    <div className="glass-card rounded-2xl p-3 sm:p-4">
      <Input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Cari produk, kategori, atau keyword..."
      />
    </div>
  )
}
