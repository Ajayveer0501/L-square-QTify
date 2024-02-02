import {Chip, Tooltip} from '@mui/material'
import React from 'react'
import styles from './Card.module.css'

const Card = (data,type) => {
 const getCard = (type) => {
    switch(type) {
        case "album": {
            const {image,follows,title,slug,songs} = data;
            return(
                <Tooltip title={`${songs.length} songs`} placement='top' arrow>
                    <div className={StyleSheet.wrapper}>
                        <div className={StyleSheet.card}>
                            <img src={image} alt='album' />
                            <div className={styles.banner}>
                                <Chip label={`${follows} Follows`} size='small' className={styles.chip} />
                            </div>
                            <div className={styles.titleWrapper}>
                                <p>
                                    {title}
                                </p>
                            </div>
                        </div>
                    </div>
                </Tooltip>
            )
        }
        default:
            return<></>
    }
 }
}

export default Card