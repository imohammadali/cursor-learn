import type { Metadata } from 'next'
import { Vazirmatn } from 'next/font/google'
import './globals.css'

const vazirmatn = Vazirmatn({
  variable: '--font-vazirmatn',
  subsets: ['latin', 'arabic'],
  weight: ['400', '600', '700'],
  display: 'swap',
  preload: true
})

export const metadata: Metadata = {
  title: 'آموزش کرسور | دورهٔ مبانی هوش مصنوعی',
  description:
    'دورهٔ یادگیری کار با هوش مصنوعی برای برنامه‌نویسان — ترجمهٔ فارسی دورهٔ Cursor Learn'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirmatn.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
