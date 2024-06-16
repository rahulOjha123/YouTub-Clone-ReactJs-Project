import React, { useState } from 'react'
import "../Home/Home.css"
import SideBar from '../../Compnent/SideBar/SideBar'
import Feed from '../../Compnent/Feed/Feed'
function Home({sidebar}) {

  const [category,setCategory]=useState(0)

  return (
    <>
    <SideBar sidebar={sidebar} category={category} setCategory={setCategory} />
    <div className={`container ${sidebar ? "": 'large-container'}`}>
      <Feed  category={category} />
    </div>
    </>
  )
}

export default Home