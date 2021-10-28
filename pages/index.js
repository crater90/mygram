import Head from 'next/head'
import Feed from '../components/Feed'
import Header from '../components/Header'
import Modal from '../components/Modal'
import { useSession, signIn } from 'next-auth/react';

export default function Home() {
  const {data: session} = useSession();
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      {session ? (
        <div>
          <Feed/>
          <Modal/>
        </div>
      ) : (
        <div className="flex justify-center items-center xl:max-w-4xl md:max-w-3xl m-auto min-h-screen">
          <div className="-mt-14 flex flex-col md:flex-row items-center justify-center border rounded-lg bg-white gap-x-5 gap-y-5 px-10 py-20">
            <img src= "/mainPage.svg" className="h-64 max-h-full"/>
            <div className="flex flex-col justify-center items-center">
              <h1 className="font-extrabold text-gray-800 px-0 sm:px-4 md:px-0 text-3xl sm:text-4xl xl:text-5xl mb-2 md:mb-3 lg:mb-4 tracking-tighter md:leading-3 ">Welcome to MyGram.</h1>
              <h4 className="md:text-lg text-center text-base font-medium mb-6 md:mb-12 leading-3 lg:leading-3 ">Lets, Post something interesting.</h4>
              <button onClick={signIn} className="hover:scale-110 transition-all duration-150 ease-out font-bold py-2 w-1/2 text-white bg-gray-600 rounded-lg cursor-pointer">Sign In</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
