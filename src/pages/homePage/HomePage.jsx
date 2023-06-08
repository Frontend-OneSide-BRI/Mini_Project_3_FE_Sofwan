import React from 'react'
import './style.scss'
import Banners from '../../components/organisms/headers/banners/Banners'

const HomePage = () => {
  return (
    <div className='homePage'>
        <Banners/>
        <div style={{height:1000}}></div>
    </div>
  )
}

export default HomePage