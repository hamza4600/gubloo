import React from 'react'
import styles from "./one.module.css"
import Image from "next/image"

function SectionOne() {
  return (
    <div className={styles.Sone}>
      <div className={styles.Ima}>
        <Image src={"/back.png"} width={1500} height={600} layout="fixed" />
        <div className={styles.Large}>
          <h1>Bringing Your Business TO THE Next Level</h1>
        </div>  
      </div>
    </div>
  ) 
}

export default SectionOne