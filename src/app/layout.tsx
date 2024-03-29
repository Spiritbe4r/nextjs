import type { Metadata } from 'next'
import { Inter, League_Spartan, Space_Grotesk } from 'next/font/google'
import './globals.css'
import NextProvider from '@/app/providers/NextProvider'
import QueryProvider from './providers/QueryProvider'
import { inter, space_grotesk } from '@/utils/fonts'


export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='light'>
      <body className={`${inter} ${space_grotesk}`}>

        <QueryProvider>
          <NextProvider>
            <div>{children}</div>
          </NextProvider>
        </QueryProvider>




      </body>
    </html>
  )
}
