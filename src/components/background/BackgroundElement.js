import React, { useEffect, useRef } from 'react'
import Background from './Background'
import styles from './BackgroundElement.module.css'
const BackgroundElement = () => {

    const containerRef = useRef()
   

    useEffect(() => {
        if (containerRef.current) {
            new Background(containerRef.current)
        }
    }, [containerRef.current])

  return (
    <div ref={containerRef} className={styles.container}></div>
  )
}

export default BackgroundElement