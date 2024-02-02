import React, { useEffect, useState } from 'react'
import { useSwiper } from 'swiper/react'
import { ReactComponent as LeftArrow } from '../../assets/LeftArrow.svg'
import styles from './Carousal.module.css'

const CarousalLeftNavigation = () => {
    const swiper = useSwiper();
    const[isBeginning, setIsBeginning] = useState(swiper.isBeginning);

    useEffect(()=>{
        swiper.on("slideChange",function(){
            setIsBeginning(swiper.isBeginning)
        })

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[isBeginning])
  return (
    <div className={styles.leftNavigation}>
        {!isBeginning? <LeftArrow onClick={()=>swiper.slidePrev()}/>:null}
    </div>
  )
}

export default CarousalLeftNavigation