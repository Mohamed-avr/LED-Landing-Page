import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {

  return (
    <div className='0'>
      <Navbar />
      <Banner/>
           <Navbar />
      <Banner/>
    </div>
  )
}
