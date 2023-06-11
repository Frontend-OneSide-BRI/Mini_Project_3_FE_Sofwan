import React from 'react'
import './style.scss'
import Banners from '../../components/organisms/headers/banners/Banners'
import Popular from '../../components/organisms/movieList/popular/Popular'
import TopRated from '../../components/organisms/topRated/TopRated'
const HomePage = () => {
  return (
    <div className='homePage'>
        <Banners/>
        <Popular/>
        <TopRated/>
        {/* <div style={{height:1000}}></div> */}
    </div>
  )
}

export default HomePage