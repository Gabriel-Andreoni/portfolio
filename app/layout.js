import './styles/globals.css'
import { Roboto } from 'next/font/google'


const roboto = Roboto({ subsets: ['latin'], weight: '300' })

export const metadata = {
  title: 'Gabriel Andreoni',
  description: 'Desenvolvedor Front End',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" style={{ scrollBehavior: 'smooth' }}>
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
