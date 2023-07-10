import './globals.css'
import type { Metadata } from 'next'
import { Roboto_Flex } from 'next/font/google'
import { Header } from './components/Header'

const roboto = Roboto_Flex({ subsets: ['latin'], weight: ['300', '400', '700'] })

export const metadata: Metadata = {
  title: 'MP Tec',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
