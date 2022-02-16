import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (

    <div className="min-h-screen py-6 flex flex-col justify-center relative overflow-hidden ">
      <div className="card relative w-96 px-6 py-6 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:rounded-lg">
        <Image src="/images/image-equilibrium.jpg" alt="Equilibrium" height={1000} width={1000} className='sm:rounded-lg'/>
        <div className='card-h1'>Equilibrium #3429</div>
        <div className='card-p'>Our Equilibrium collection promotes balance and calm.</div>
      </div>
    </div>
  )
}

export default Home
