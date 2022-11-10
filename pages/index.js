import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {

  return (
    <div>
      <Navbar />
      <Banner/>

      <section>
        hello here this is an empty section
      </section>
    </div>
  )
}
