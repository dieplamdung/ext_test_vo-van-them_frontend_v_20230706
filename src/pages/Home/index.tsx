import React from 'react'
import "./style.scss";
import Banner from './components/Banner';
import Menu from './components/Menu';


export default function Home() {
  return (
    <div className='wrapper-page wrapper-home-page'>
      <Banner/>
      <Menu/>
    </div>
  )
}
