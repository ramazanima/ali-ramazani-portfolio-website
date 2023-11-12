import type { Metadata } from 'next'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    children
  )
}
export const fetchCache = 'force-no-store'
export const revalidate = 0;