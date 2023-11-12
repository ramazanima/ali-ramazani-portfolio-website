import type { Metadata } from 'next'
import '../app/globals.css'
import { Overlay } from '@/components/overlay'
import { Background } from '@/components/background'
import MenuIcon from '@/components/menu-icon'
import { MenuOverlay } from '@/components/menu-overlay'
import { Credits } from '@/app/_components/credits'

export const metadata: Metadata = {
    title: 'Portfolio',
    description: '2023 Ali Ramazani Portfolio',
}

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <Background />
                <Overlay />
                <div className='scroll-container'>
                    {children}
                    <Credits/>
                </div>
                <MenuOverlay />

            </body>
        </html>
    )
}
