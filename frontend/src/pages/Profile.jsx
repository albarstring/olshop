import { useMemo, useState } from 'react'
import PageLayout from '@/components/PageLayout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const stepLabels = ['Profile', 'Address', 'Interests', 'Confirm']

const provinces = {
  'DKI Jakarta': ['Jakarta Pusat', 'Jakarta Barat', 'Jakarta Selatan', 'Jakarta Timur', 'Jakarta Utara'],
  'Jawa Barat': ['Bandung', 'Bekasi', 'Bogor', 'Depok', 'Cirebon'],
  'Jawa Timur': ['Surabaya', 'Malang', 'Sidoarjo', 'Kediri', 'Madiun'],
  Banten: ['Tangerang', 'Serang', 'Cilegon', 'South Tangerang'],
  Bali: ['Denpasar', 'Badung', 'Gianyar', 'Buleleng'],
}

const interestOptions = ['Fashion', 'Electronics', 'Sneakers', 'Accessories', 'Gaming']

export default function Profile() {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    username: '',
    photo: null,
    photoPreview: '',
    recipientName: '',
    recipientPhone: '',
    province: '',
    city: '',
    postalCode: '',
    fullAddress: '',
    interests: [],
  })

  const [errors, setErrors] = useState({})

  const completion = Math.round(((step - 1) / (stepLabels.length - 1)) * 100)
  const cities = useMemo(() => (formData.province ? provinces[formData.province] || [] : []), [formData.province])

  const setField = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const toggleInterest = (interest) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((item) => item !== interest)
        : [...prev.interests, interest],
    }))
    setErrors((prev) => ({ ...prev, interests: '' }))
  }

  const onPhotoChange = (event) => {
    const file = event.target.files?.[0]
    if (!file) return

    const preview = URL.createObjectURL(file)
    setFormData((prev) => ({ ...prev, photo: file, photoPreview: preview }))
  }

  const validateStep = () => {
    const nextErrors = {}

    if (step === 1) {
      if (!formData.fullName.trim()) nextErrors.fullName = 'Nama lengkap wajib diisi.'
      if (!formData.phone.trim()) nextErrors.phone = 'Nomor telepon wajib diisi.'
    }

    if (step === 2) {
      if (!formData.recipientName.trim()) nextErrors.recipientName = 'Nama penerima wajib diisi.'
      if (!formData.recipientPhone.trim()) nextErrors.recipientPhone = 'Nomor telepon penerima wajib diisi.'
      if (!formData.province) nextErrors.province = 'Pilih provinsi terlebih dahulu.'
      if (!formData.city) nextErrors.city = 'Pilih kota terlebih dahulu.'
      if (!formData.postalCode.trim()) nextErrors.postalCode = 'Kode pos wajib diisi.'
      if (!formData.fullAddress.trim()) nextErrors.fullAddress = 'Alamat lengkap wajib diisi.'
    }

    if (step === 3 && formData.interests.length === 0) {
      nextErrors.interests = 'Pilih minimal satu kategori minat.'
    }

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const goNext = () => {
    if (!validateStep()) return
    setStep((prev) => Math.min(prev + 1, stepLabels.length))
  }

  const goBack = () => {
    setStep((prev) => Math.max(prev - 1, 1))
  }

  const onSubmit = (event) => {
    event.preventDefault()
    if (!validateStep()) return
    setSubmitted(true)
  }

  return (
    <PageLayout>
      <section className="mx-auto max-w-4xl space-y-6">
        <Card className="rounded-[2rem] border-white/55 bg-white/35 p-6 sm:p-8">
          <CardHeader>
            <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Welcome, new shopper</p>
            <CardTitle className="text-3xl">Complete Your Profile</CardTitle>
            <CardDescription>
              Satu langkah lagi sebelum mulai belanja. Lengkapi profil untuk checkout yang lebih cepat dan rekomendasi AI
              yang lebih akurat.
            </CardDescription>

            <div className="mt-5">
              <div className="mb-3 h-2 w-full overflow-hidden rounded-full bg-white/45">
                <div
                  className="h-full rounded-full bg-slate-900 transition-all duration-300"
                  style={{ width: `${completion}%` }}
                />
              </div>

              <div className="grid grid-cols-4 gap-2 text-[11px] text-slate-500">
                {stepLabels.map((label, index) => {
                  const current = index + 1
                  const active = current === step
                  const done = current < step

                  return (
                    <div key={label} className="flex items-center gap-2 rounded-xl bg-white/45 px-2 py-1.5">
                      <div
                        className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-semibold ${
                          done
                            ? 'bg-slate-900 text-white'
                            : active
                              ? 'bg-slate-700 text-white'
                              : 'bg-white text-slate-500'
                        }`}
                      >
                        {current}
                      </div>
                      <span className={active ? 'text-slate-800' : ''}>{label}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </CardHeader>

          <form onSubmit={onSubmit}>
            <CardContent className="space-y-5">
              {step === 1 && (
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="sm:col-span-2 flex items-center gap-4 rounded-2xl border border-white/55 bg-white/45 p-4">
                    <Avatar className="h-16 w-16">
                      {formData.photoPreview ? (
                        <AvatarImage src={formData.photoPreview} alt="Profile Preview" />
                      ) : (
                        <AvatarFallback>
                          {(formData.fullName || 'New User')
                            .split(' ')
                            .map((word) => word[0])
                            .join('')
                            .slice(0, 2)
                            .toUpperCase()}
                        </AvatarFallback>
                      )}
                    </Avatar>

                    <div className="space-y-1">
                      <p className="text-sm font-medium text-slate-800">Profile Photo</p>
                      <p className="text-xs text-slate-500">Upload foto agar akun kamu lebih personal.</p>
                      <Input type="file" accept="image/*" onChange={onPhotoChange} className="h-10 py-1.5" />
                    </div>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">Full Name</label>
                    <Input
                      placeholder="Contoh: Adit Pratama"
                      value={formData.fullName}
                      onChange={(event) => setField('fullName', event.target.value)}
                    />
                    {errors.fullName && <p className="mt-1 text-xs text-rose-500">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">Phone Number</label>
                    <Input
                      placeholder="08xxxxxxxxxx"
                      value={formData.phone}
                      onChange={(event) => setField('phone', event.target.value)}
                    />
                    {errors.phone && <p className="mt-1 text-xs text-rose-500">{errors.phone}</p>}
                  </div>

                  <div className="sm:col-span-2">
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">Username (Optional)</label>
                    <Input
                      placeholder="aditstyle"
                      value={formData.username}
                      onChange={(event) => setField('username', event.target.value)}
                    />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">Recipient Name</label>
                    <Input
                      placeholder="Nama penerima"
                      value={formData.recipientName}
                      onChange={(event) => setField('recipientName', event.target.value)}
                    />
                    {errors.recipientName && <p className="mt-1 text-xs text-rose-500">{errors.recipientName}</p>}
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">Phone Number</label>
                    <Input
                      placeholder="08xxxxxxxxxx"
                      value={formData.recipientPhone}
                      onChange={(event) => setField('recipientPhone', event.target.value)}
                    />
                    {errors.recipientPhone && <p className="mt-1 text-xs text-rose-500">{errors.recipientPhone}</p>}
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">Province</label>
                    <Select
                      value={formData.province}
                      onChange={(event) => {
                        setField('province', event.target.value)
                        setField('city', '')
                      }}
                    >
                      <option value="">Pilih provinsi</option>
                      {Object.keys(provinces).map((province) => (
                        <option key={province} value={province}>
                          {province}
                        </option>
                      ))}
                    </Select>
                    {errors.province && <p className="mt-1 text-xs text-rose-500">{errors.province}</p>}
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">City</label>
                    <Select value={formData.city} onChange={(event) => setField('city', event.target.value)}>
                      <option value="">Pilih kota</option>
                      {cities.map((city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ))}
                    </Select>
                    {errors.city && <p className="mt-1 text-xs text-rose-500">{errors.city}</p>}
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">Postal Code</label>
                    <Input
                      placeholder="12345"
                      value={formData.postalCode}
                      onChange={(event) => setField('postalCode', event.target.value)}
                    />
                    {errors.postalCode && <p className="mt-1 text-xs text-rose-500">{errors.postalCode}</p>}
                  </div>

                  <div className="sm:col-span-2">
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">Full Address</label>
                    <Textarea
                      placeholder="Jalan, nomor rumah, patokan, RT/RW"
                      value={formData.fullAddress}
                      onChange={(event) => setField('fullAddress', event.target.value)}
                    />
                    {errors.fullAddress && <p className="mt-1 text-xs text-rose-500">{errors.fullAddress}</p>}
                  </div>
                </div>
              )}

              {step === 3 && (
                <div>
                  <p className="mb-3 text-sm text-slate-600">Pilih kategori favoritmu untuk rekomendasi AI yang lebih relevan.</p>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {interestOptions.map((interest) => {
                      const selected = formData.interests.includes(interest)
                      return (
                        <button
                          key={interest}
                          type="button"
                          onClick={() => toggleInterest(interest)}
                          className={`rounded-2xl border px-4 py-3 text-left text-sm font-medium transition ${
                            selected
                              ? 'border-slate-900 bg-slate-900 text-white shadow-[0_10px_24px_rgba(15,23,42,0.22)]'
                              : 'border-white/70 bg-white/55 text-slate-700 hover:bg-white/80 hover:text-slate-900'
                          }`}
                        >
                          {interest}
                        </button>
                      )
                    })}
                  </div>
                  {errors.interests && <p className="mt-2 text-xs text-rose-500">{errors.interests}</p>}
                </div>
              )}

              {step === 4 && (
                <div className="space-y-4">
                  <div className="rounded-2xl border border-white/70 bg-white/55 p-4">
                    <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Review</p>
                    <div className="mt-3 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
                      <p>
                        <span className="font-semibold text-slate-900">Nama:</span> {formData.fullName || '-'}
                      </p>
                      <p>
                        <span className="font-semibold text-slate-900">Telepon:</span> {formData.phone || '-'}
                      </p>
                      <p>
                        <span className="font-semibold text-slate-900">Penerima:</span> {formData.recipientName || '-'}
                      </p>
                      <p>
                        <span className="font-semibold text-slate-900">Kota:</span> {formData.city || '-'}
                      </p>
                      <p className="sm:col-span-2">
                        <span className="font-semibold text-slate-900">Alamat:</span> {formData.fullAddress || '-'}
                      </p>
                      <p className="sm:col-span-2">
                        <span className="font-semibold text-slate-900">Minat:</span>{' '}
                        {formData.interests.length ? formData.interests.join(', ') : '-'}
                      </p>
                    </div>
                  </div>

                  {submitted && (
                    <div className="rounded-2xl border border-emerald-200 bg-emerald-50/80 p-4 text-sm text-emerald-800">
                      Profil berhasil dilengkapi. Kamu sudah siap mulai belanja.
                    </div>
                  )}
                </div>
              )}
            </CardContent>

            <CardFooter className="mt-6 flex flex-wrap justify-between gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={goBack}
                disabled={step === 1}
                className="rounded-full border-white/70 bg-white/60 text-slate-700 hover:bg-white/85"
              >
                Back
              </Button>
              {step < 4 ? (
                <Button
                  type="button"
                  onClick={goNext}
                  className="rounded-full bg-slate-900 px-6 text-white hover:bg-slate-800"
                >
                  Continue
                </Button>
              ) : (
                <Button type="submit" className="rounded-full bg-slate-900 px-6 text-white hover:bg-slate-800">
                  Save and Start Shopping
                </Button>
              )}
            </CardFooter>
          </form>
        </Card>
      </section>
    </PageLayout>
  )
}
