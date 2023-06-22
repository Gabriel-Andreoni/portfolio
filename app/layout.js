import './styles/globals.css'
import { Roboto } from 'next/font/google'


const roboto = Roboto({ subsets: ['latin'], weight: '300' })

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" style={{scrollBehavior: 'smooth'}}>
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
