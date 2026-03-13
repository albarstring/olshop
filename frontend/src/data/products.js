export const products = [
  {
    id: 1,
    name: 'Nimbus Capsule Lamp',
    category: 'Smart Living',
    price: 899000,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=900&q=80',
    description: 'Lampu meja minimalis dengan warm-cool adaptive glow dan charging dock wireless.',
  },
  {
    id: 2,
    name: 'Aero Glass Bottle',
    category: 'Daily Carry',
    price: 349000,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=900&q=80',
    description: 'Botol insulated dengan finishing transparan satin, ringan untuk aktivitas harian.',
  },
  {
    id: 3,
    name: 'Pulse Mini Speaker',
    category: 'Audio',
    price: 1249000,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&w=900&q=80',
    description: 'Speaker portable stereo dengan audio jernih, bass padat, dan masa pakai baterai panjang.',
  },
  {
    id: 4,
    name: 'Halo Travel Case',
    category: 'Travel Edit',
    price: 529000,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=80',
    description: 'Organizer modular untuk gadget dan kabel dengan kompartemen fleksibel anti-gores.',
  },
  {
    id: 5,
    name: 'Zen Wrist Tracker',
    category: 'Personal Tech',
    price: 1699000,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80',
    description: 'Fitness tracker tipis dengan sensor kesehatan real-time dan notifikasi pintar.',
  },
  {
    id: 6,
    name: 'Orbit Laptop Sleeve',
    category: 'Travel Edit',
    price: 439000,
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80',
    description: 'Sleeve laptop premium dengan lapisan microfiber dan struktur anti-bentur ringan.',
  },
]

export const categories = ['All', ...new Set(products.map((product) => product.category))]

export function formatPrice(value) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(value)
}
