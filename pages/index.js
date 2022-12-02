import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {

  let word ;
    function SmallToLarge (word) {
      if(word === typeof String ) {
        let ConvrtSting = word.toUpperCase();
      console.log(ConvrtSting)
      } else {
        console.log(' you should innter a string value')
      }
  }

  SmallToLarge('hello there')

  return (
    <div>
      <Navbar key={1} />
      <Banner key={2}/>
    </div>
  )
}
