import React from 'react'

import Article from '../article/article.component'
import Banner from '../../components/banner/banner.component'
import('./home.component.style.scss')

const Home = () => {
  return (
    
    <div className='feed__container'>
      <Banner/>
   <Article/>
   <div className='popular__tags'>
    <h2>Latest Posts</h2>
   </div>
    </div>
  )
}

export default Home