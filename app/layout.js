import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'yyy',
  description: 'Biographical Blog',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <a className="fixed z-10" href="/"><img className="fixed z-10 rounded-full w-[50px] mt-6 ml-6" src="img/logo.png"></img></a>
      {children}
      </body>
    </html>
  )
}
