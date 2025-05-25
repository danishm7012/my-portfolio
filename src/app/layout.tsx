import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Danish Mehmood - Fullstack Developer Portfolio',
  description:
    'Experienced fullstack developer specializing in modern web technologies including React, Next.js, Node.js, and more. View my projects and get in touch.',
  keywords: [
    'fullstack developer',
    'web development',
    'React',
    'Next.js',
    'Node.js',
    'portfolio',
  ],
  authors: [{ name: 'Danish Mehmood' }],
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body
        className={`${inter.className} bg-gray-50 text-gray-900 antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
