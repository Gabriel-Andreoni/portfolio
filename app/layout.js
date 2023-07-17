import Link from 'next/link'
import './styles/globals.css'
import { Roboto } from 'next/font/google'


const roboto = Roboto({ subsets: ['latin'], weight: '300' })

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" style={{scrollBehavior: 'smooth'}}>
      <head>
        <Link rel="icon" href='/public/fav-ico.png' sizes='any' />
      </head>
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
