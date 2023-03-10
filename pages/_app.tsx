import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Navbar from '@/components/Main/Navbar'
import Sidebar from '@/components/Main/Sidebar'
import { Component, ReactNode } from 'react'
import CompanySidebar from '@/components/Main/CompanySidebar'
import { NextComponentType, NextPageContext } from 'next'

type Page = NextComponentType<NextPageContext, any, any> & {
  getLayout?: (page: ReactNode) => ReactNode
  CompanyLayout?:(page: ReactNode) => ReactNode
}

export default function App({ Component, pageProps }:{Component:Page,pageProps:Page}) {
  const getLayout = Component.getLayout
  const CompanyLayout = Component.CompanyLayout
  if (getLayout) return <Component {...pageProps} />
  return (
    <div>
      <Head>
        <title>Grow Your Business</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex relative flex-col">
        <Navbar />
        <div className='max-w-[1300px] md:h-[calc(100vh-105px)] -mt-4 mx-auto w-full flex'>
          {CompanyLayout ? <CompanySidebar />:<Sidebar />}
          <Component {...pageProps} />
        </div>
        <iframe width="350" height="200"  className='absolute bottom-5 right-5' allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/5954e0f2-9891-4428-9667-c5f26e3a95d7"></iframe>
        {/* <iframe height="430" width="350" src="https://bot.dialogflow.com/5954e0f2-9891-4428-9667-c5f26e3a95d7"></iframe> */}
      </main>
      
    </div>)
}
