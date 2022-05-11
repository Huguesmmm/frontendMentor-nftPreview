import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

const imgPrefix = '/frontendMentor-nftPreview'

const Home: NextPage = () => {
  return (

    <div className="min-h-screen py-6 flex flex-col justify-center relative overflow-hidden ">
      <div className="card relative w-96 px-6 py-6 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:rounded-lg">
        <div className='img-nft'>
          <Image src={`${imgPrefix}/images/image-equilibrium.jpg`} alt="Equilibrium" height={1000} width={1000} className='image' />
          <div className='img-nft-hover'>
            <img src={`${imgPrefix}/icons/icon-view.svg`} alt="eye"/>
          </div>
        </div>
        <div className='card-h1'>Equilibrium #3429</div>
        <div className='card-p'>Our Equilibrium collection promotes balance and calm.</div>
        <div className='card-info'>
          <div className='card-info-bitcoin'><img src={`${imgPrefix}/icons/icon-ethereum.svg`} alt="eth" /><p> 0.041 ETH</p></div>
          <div className='card-info-time'><img src={`${imgPrefix}/icons/icon-clock.svg`} alt="eth" /><p>3 days left</p></div>
        </div>
        <hr className='hr1'></hr>
        <div className='card-creator'>
          <div className='card-creator-picture'><img src={`${imgPrefix}/images/image-avatar.png`} alt='avatar'></img></div>
          <div className='card-creator-createdby'>Creation of <span className='card-creator-createdby-name'>Jules Wyvern</span></div>
        </div>
      </div>
    </div>
  )
}

export default Home
