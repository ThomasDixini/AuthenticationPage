import { Header } from '@/components/Header'
import '@/styles/globals.css'
import "@/styles/menu-progress.css"
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <div className='bg-blue-950 min-h-screen'>
            <Header />
            <Component {...pageProps} />
          </div>
}
