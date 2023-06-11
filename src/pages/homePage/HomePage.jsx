import React from 'react'
import './style.scss'
import Banners from '../../components/organisms/headers/banners/Banners'
import Popular from '../../components/organisms/movieList/popular/Popular'
const HomePage = () => {
  return (
    <div className='homePage'>
        <Banners/>
        <Popular/>
        <div style={{height:1000}}></div>
    </div>
  )
}

export default HomePage