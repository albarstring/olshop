import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

export default function Register() {
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const onSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const password = formData.get('password')
    const confirmPassword = formData.get('confirmPassword')

    if (password !== confirmPassword) {
      setSuccess('')
      setError('Password dan konfirmasi password harus sama.')
      return
    }

    setError('')
    setSuccess('Registrasi berhasil. Silakan login menggunakan akun baru Anda.')
  }

  return (
    <div className="relative min-h-screen overflow-hidden px-4 py-6 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute left-[-4rem] top-[-5rem] h-64 w-64 rounded-full bg-cyan-200/50 blur-3xl"></div>
      <div className="pointer-events-none absolute bottom-[-5rem] right-[-4rem] h-72 w-72 rounded-full bg-emerald-200/50 blur-3xl"></div>

      <section className="relative mx-auto flex min-h-[calc(100vh-3rem)] max-w-xl items-center justify-center">
        <Button
          asChild
          variant="outline"
          size="icon"
          className="absolute left-0 top-0 rounded-full border-white/70 bg-white/60 text-slate-900 backdrop-blur-xl"
        >
          <Link to="/" aria-label="Kembali ke Home">
            ←
          </Link>
        </Button>

        <Card className="w-full rounded-[2rem] p-6 sm:p-8">
          <CardHeader>
            <CardTitle className="text-3xl">Register</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {error && (
              <Alert variant="destructive">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            {success && (
              <Alert variant="success">
                <AlertTitle>Success</AlertTitle>
                <AlertDescription>{success}</AlertDescription>
              </Alert>
            )}

            <form className="space-y-3" onSubmit={onSubmit}>
              <Input name="name" placeholder="Nama" required />
              <Input name="email" type="email" placeholder="Email" required />
              <Input name="password" type="password" placeholder="Password" required />
              <Input name="confirmPassword" type="password" placeholder="Confirm Password" required />
              <Button type="submit" className="w-full rounded-full bg-slate-900 text-white hover:bg-slate-800">
                Register
              </Button>
            </form>

            <p className="text-sm text-slate-600">
              Sudah punya akun?{' '}
              <Link to="/login" className="font-medium text-slate-900 underline-offset-4 hover:underline">
                Login
              </Link>
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
