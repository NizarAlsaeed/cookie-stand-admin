import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-green-100">
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>

      <header className="w-full text-3xl text-left bg-green-300">
          <h1>Cookie Stand Admin</h1>
      </header>
      <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
          <Form/> 
      </main>

      <footer className="flex w-full h-24 bg-green-300 border-t items-left justify-left">
        <p>&copy; 2021</p> 
      </footer>
    </div>
  )
}

const Form = ()=>{
  return(
    <div className="items-center w-full h-full bg-green-300 border-t ">
      <h1 className="m-4">Create Cookie Stand</h1>

        <label>Location</label>
        <input type="text" className="w-10/12 my-5"/>
        <br/>
        <label className="m-8 -ml-52">Minimum customers per hour</label>
        <label className="m-8">Maximum customers per hour</label>
        <label className="m-8">Avrage cookies per hour</label>
        <br/>
        <input className="m-8" type="text"/>
        <input className="m-8" type="text"/>
        <input className="m-8" type="text"/>

        <button type="submit" className="w-1/5 h-12 bg-green-700 ">Create</button>

    </div>
  )
}
