import React, { useEffect, useState } from 'react'
import { useSwiper } from 'swiper/react'
import { ReactComponent as RightArrow } from '../../assets/RightArrow.svg'
import styles from './Carousal.module.css'

const CarousalRightNavigation = () => {
    const swiper = useSwiper();
    const[isEnd, setIsEnd] = useState(swiper.isEnd);

    useEffect(()=>{
        swiper.on("slideChange",function(){
            setIsEnd(swiper.isEnd)
        })

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[isEnd])
  return (
    <div className={styles.rightNavigation}>
        {!isEnd? <RightArrow onClick={()=>swiper.slideNext()}/>:null}
    </div>
  )
}

export default CarousalRightNavigation