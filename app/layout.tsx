import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'


export const metadata: Metadata = {
  title: 'BDWooking',
  description: 'BDWooking hotel reservations',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
