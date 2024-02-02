import React from 'react'
import styles from './Hero.module.css'
import HeroImage from '../../assets/Hero_image.png'


const Hero = () => {
  return (
    <div className={styles.hero}>
        <div>
            <h1>100 Thousand songs, ad-free</h1>
            <h1>Over thousands podcast episodes</h1>
        </div>
        <div>
            <img src={HeroImage} width={212} alt='headphones'/>
        </div>
    </div>
  )
}

export default Hero