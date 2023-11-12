import type { Metadata } from 'next'
import '../manage.css'

export const metadata: Metadata = {
  title: 'Management',
  description: '2023 Ali Ramazani Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body>
      {children}
      </body>
      </html>
  )
}

export const fetchCache = 'force-no-store'
export const revalidate = 0;