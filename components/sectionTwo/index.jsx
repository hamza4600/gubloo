import React from 'react'
import styles from './two.module.css'
import Image from "next/image"

function SecTwo() {
  return (
    <div className={styles.STwo}>
      <PartOne/>
      <PartTwo/>
    </div>
  )
}

export default SecTwo

// part One
function PartOne() {
  return(<div className={styles.PartOne}>
    <h1>About Us</h1>
    <p>From fresh, visually appealing web design and custom application development to search engine optimization and social media management, Gubloo Technologies is a one-stop shop. We are a web design and development company with the expertise to build the next generation of your website. We work hard to understand what you want your site to do, and we create it for you exactly as you envisioned.</p>
  </div>)
}

// part Two
function PartTwo() {
  return(<div className={styles.Two}>
    <h1>our services</h1>
    <div className={styles.TwoOne}>
    <CardTwo img={`/Gubl0.png`} span={`Web development`} para={`Your web presence is what shows your identity and we will manage how to make it unique for you to always stand out.    `}/>
  
  <CardTwo img={"/Gubl (1).png"} span={`Social Media Management`} para={`Give a boost to your digital engagement for the millions watching you, so let’s Wow your online presence.`}/>
  
  <CardTwo img={"/Gubl (2).png"} span={`Search Engine Optimization`} para={`Excellent SEO is an approach for ranking your works which gets better over time. Its only search engine tricks that demands to keep altering.`}/>
  
  <CardTwo img={"/Gubl (3).png"} span={`Creative Ads`} para={`We use social media as an idea originator, trend mapper and tactical scope for all your online business missions by creating Ads.`}/>
  </div>
  </div>)
}


// Card Two
export function CardTwo({img, span, para}) {
  return(<div className={styles.Cards}>
    <Image src={img} width={50} height={50} layout="fixed"/>
    <span>{span}</span>
    <p>{para}</p>
  </div>)
}