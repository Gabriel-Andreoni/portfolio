import './styles/globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], weight: '300' })

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
