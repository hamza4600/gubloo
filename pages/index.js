import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


import dynamic from 'next/dynamic'

const DynFoot =dynamic(() =>import('../components/footer/footer'))   
const DynNav =dynamic(() =>import('../components/navbar/nav' ))   
const DynOne =dynamic(() =>import('../components/sectionOne'))   
const DynTwo =dynamic(() =>import('../components/sectionTwo'))   
const DynThree =dynamic(() =>import('../components/sectionThree'))   
const DynFour =dynamic(() =>import('../components/secFour'))   
const DynFive =dynamic(() =>import('../components/sectionFive'))   


export default function Home() {
  return (
    <div className={styles.container}>
      {/* for SEO */}
      <Head>
      <title>Home Page - Gubloo</title>
      <meta name="description" content="Gubloo is a social media management, web developers and social media advancement company. We listen, we discuss, we advise and provide best solutions possible." />
      <meta property="og:locale" content="en_US" />
	    <meta property="og:type" content="website" />
	    <meta property="og:title" content="Home Page - Gubloo" />
      <meta property="og:description" content="Gubloo is a social media management, web developers and social media advancement company. We listen, we discuss, we advise and provide best solutions possible." />
    	<meta property="og:url" content="https://gublootechnologies.com/" />
	    <meta property="og:site_name" content="Gubloo" />
      
      <link rel="icon" href="/gubloo.png" />
      </Head>
    
    <DynNav/>
    <main> 
    
    <DynOne/>
    <DynTwo/>
    <DynThree/>
    <DynFour/>
    <DynFive/>

    </main>
    <DynFoot/>        
    </div>
  )
}
