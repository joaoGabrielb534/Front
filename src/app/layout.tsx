import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'
import './globals.css'
import AuthProvider from '@/context/AuthContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  description: 'System supermarket',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          {children}
          <ToastContainer autoClose={1500} theme="light" />
        </AuthProvider>
      </body>
    </html>
  )
}
