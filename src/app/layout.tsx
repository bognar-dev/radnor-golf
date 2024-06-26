import '@/app/globals.css';
import Header from '@/components/header';
import { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
    title: {
        default: "Radnor Golf Club",
        template: `%s - Radnor Golf Club}`,
    },
    description: "Play golf at Radnor Golf Club in Cornwall",

    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
    },
}


export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <html lang="en" suppressHydrationWarning={true} className="no-scrollbar ">
                <body>
                    <Header />
                    {children}
                </body>
            </html >
        </>
    )
}