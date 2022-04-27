import React from 'react'
import styles from './Five.module.css'
import Image from 'next/image'

function SectionFive() {
  return (
    <div className={styles.Five}>
      <h1 className={styles.Con}> contact us</h1>
      
      <div className={styles.Main}>
        <Right/>
        <Left/>
      </div>
    </div>
  )
}

export default SectionFive

export function Right() {
  return(<div className={styles.Right}>
    <Image src={"/Contact.png"} width={650} height={650} layout="fixed" />
  </div>)
}

export function Left() {
  return(<div className={styles.Left }>
    <Input data={`Name`}/>
    <Input data={`Phone Number (optinal)`}/>
    <Input data={`Email`}/>
    <Input data={`Service Name`}/>
    <textarea  placeholder="Message" className={styles.Area}/>
    <button className={styles.Send}>send message</button>
  </div>)
}

// Input
export function Input({data}) {
  return(<div className={styles.Input}>
    <input placeholder={data}/>
  </div>)
}