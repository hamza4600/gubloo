import React from 'react'
import styles from './Three.module.css'
import Image from "next/image"

function SectionThree() {
  return (
  <div className={styles.STone}>
      <div className={styles.Stwo}>
        <h1>our work</h1>
      </div>
      <LarPart/>
    </div>
  )
}

export default SectionThree

// LarPart
export function LarPart(){
  return(<div>
    {/* List */}
    <div className={styles.SmList}>
      <p>all</p>
      <p>web development</p>
      <p>social media</p>
      <p>SEO</p>
    </div>
    <Container/>
  </div>)
}
// Image comatiner
export function Container() {
  return(<div className={styles.ImgList}>
    <ContanImg img={"/Easygym.png"}/>
    <ContanImg img={"/Cohan.png"}/>
    <ContanImg img={"/HayBui.png"}/>
    <ContanImg img={"/MIT.png"}/>
    <ContanImg img={"/Art-Caviry.png"}/>
    <ContanImg img={"/skinsee.jpg"}/>
    <ContanImg img={"/college-Free.png"}/>
    <ContanImg img={"/Itsamel.png"}/>
    <ContanImg img={"/I-am.png"}/>
    <ContanImg img={"/Huub-Vlogsh.png"}/>
    <ContanImg img={"/Huub-Vlogs.png"}/>
    <ContanImg img={"/Halal-Bites.png"}/>
  </div>)
}

// Image comatiner
export function ContanImg({img}) {
  return(<div className={styles.Immg}>
    <Image src={img} width={335} height={225} layout="fixed"/>
  </div>)
}