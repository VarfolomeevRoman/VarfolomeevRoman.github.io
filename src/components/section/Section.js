import React, { useEffect, useRef } from 'react'
import Background from '../background/Background'
import "./style.css";

const Section = ({children}) => {
	const containerRef = useRef()
    useEffect(() => {
        if (containerRef.current) {
            new Background(containerRef.current)
        }
    }, [containerRef.current])
  return (
    <div className='bgsection' ref={containerRef}>{children}</div>
  )
}

export default Section