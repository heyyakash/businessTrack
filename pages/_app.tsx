import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Navbar from '@/components/Main/Navbar'
import Sidebar from '@/components/Main/Sidebar'

export default function App({ Component, pageProps }: AppProps) {
  const {getLayout} = Component
  if(getLayout) return <Component {...pageProps} />
  return (
  <>
  <Head>
        <title>Grow Your Business</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col">
        <Navbar />
        <div className='max-w-[1300px] md:h-[calc(100vh-105px)] -mt-4 mx-auto w-full flex'>
          <Sidebar />
          <Component {...pageProps} />
        </div>
      </main>
  
  </>)
}
