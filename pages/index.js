import Head from 'next/head'
import Header from './components/Header'
import Form from './components/Form'
import Dashboard from './components/Dashboard'
import Footer from './components/Footer'

import { useState } from 'react'

export default function Home() {
  const [formResult, setformResult] = useState("No cookie stands, Create one!")

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-green-100">
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <Header/>
      <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
          <Form  setformResult={setformResult}/>
          <Dashboard formResult={formResult}/>
      </main>
      <Footer/>
    </div>
  )
}
