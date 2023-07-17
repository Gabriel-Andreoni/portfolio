import Head from 'next/head'
import Link from 'next/link'
import './styles/globals.css'
import { Roboto } from 'next/font/google'


const roboto = Roboto({ subsets: ['latin'], weight: '300' })

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" style={{scrollBehavior: 'smooth'}}>
      <Head>
        <Link rel='icon' href="/public/fav-ico.png" />
      </Head>
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
