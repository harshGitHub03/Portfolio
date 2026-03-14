import './globals.css'

import { fetchSettings } from '@/lib/fetches'
import ClientLayout from '@/components/global/client-layout';

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const settings = await fetchSettings()

  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#F6F6F2]`}>
        <ClientLayout settings={settings}>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}