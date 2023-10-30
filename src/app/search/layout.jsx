import SearchHeader from '@/components/SearchHeader'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Google Clone',
  description: 'Google Clone Next.js 13 - Sergii Moroz Version',
}

export default function SearchLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SearchHeader />

        {children}

      </body>
    </html>
  )
}
