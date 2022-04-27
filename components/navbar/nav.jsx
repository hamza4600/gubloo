import React from 'react'
import styles from "./nav.module.css"
import Image from "next/image"

function Nav() {
  return (
    <div className={styles.None}>
      <div className={styles.Ntwo}>
      <Image src={"/Gubl.png"} width={150} height={50} layout="fixed" />
      <List/>
      <Schedule/>
      </div>

    </div>
  )
}

export default Nav



// List
export function List() {
  return(<div className={styles.Lists}>
    <Item data={"Home"}/>
    <Item data={"about us"}/>
    <Item data={"services"}/>
    <Item data={"work"}/>
    <Item data={"reviews"}/>
    <Item data={"contact us"}/>
  </div>)
}

// Items
export function Item({data}) {
  return(<div className={styles.Icon}>
      <p>{data}</p>
    </div>)
}

// schedule
export function Schedule() {
  return(<div className={styles.Schl}>
    <button>schedule call</button>
  </div>)
}


// Svg
 