import { Header } from '@/components/Header'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <div className='bg-blue-950 '>
            <Header />
            <Component {...pageProps} />
          </div>
}
