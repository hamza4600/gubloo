import React from 'react'
import styles from './foure.module.css'

function SectionFour() {
  return (
    <div className={styles.FOne}>
      <Fone/>
      <Ftwo/>
    </div>)  
}

export default SectionFour

export function Fone() {
  return(<div className={styles.Fone}>
    <h1>Reviews</h1>
    <p>Check what’s our client Say about us</p>
  </div>)
}

export function Ftwo() {
  return(<div className={styles.Ftwo}>
    <p>I’m working as a nutritionist in Lahore I recently collaborated with gubloo. Gubloo is a social media and marketing agency you should go out and try them out.</p>
    <span> Sara farooqi </span>
  </div>)
}