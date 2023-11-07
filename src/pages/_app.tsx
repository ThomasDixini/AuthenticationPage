import { Header } from '@/components/Header'
import { MenuContextProvider } from '@/context/MenuContext'
import '@/styles/globals.css'
import "@/styles/menu-progress.css"
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MenuContextProvider>
      <div className='bg-blue-950 min-h-screen'>
        <Header />
        <Component {...pageProps} />
      </div>
    </MenuContextProvider>
  )
}
