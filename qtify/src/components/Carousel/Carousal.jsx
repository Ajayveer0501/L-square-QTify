import React, { useEffect } from 'react'
import { Swiper,SwiperSlide, useSwiper } from 'swiper/react'
import {Navigation} from 'swiper/modules'
import styles from './Carousal.module.css'
import CarousalLeftNavigation from './CarousalLeftNavigation'
import CarousalRightNavigation from './CarousalRightNavigation'
import 'swiper/css'

const Controls = ({data})=>{
    const swiper = useSwiper();
    useEffect(()=>{
        swiper.slideTo(0,null);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[data]);
    return <></>
}
const Carousal = ({data, renderComponent}) => {
  return (
    <div className={styles.wrapper}>
        <Swiper style={{padding: "0px 20px"}}
        initialSlide={0}
        modules={[Navigation]}
        slidePerView="auto"
        spaceBetween={0}
        allowTouchMove
        >
            <Controls />
            <CarousalLeftNavigation />
            <CarousalRightNavigation />
            {
                data.map((ele)=>{
                    return (
                        <SwiperSlide>{renderComponent(ele)}</SwiperSlide>
                    )
                })
            }
        </Swiper>

    </div>
  )
}

export default Carousal