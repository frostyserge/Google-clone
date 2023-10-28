import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Google Clone',
  description: 'Google Clone Next.js 13 - Sergii Moroz Version',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}

        <Footer />
      </body>
    </html>
  )
}
