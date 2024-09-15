"use client"
import React from 'react'
import NavBarItem from './NavBarItem'


function NavBar() {
  
  return (
    <div className=' flex justify-center gap-6 bg-amber-100 lg:text-lg  dark:bg-gray-600 py-4'>
      <NavBarItem title= 'Top Rated' param='fetchTopRated'/>
      <NavBarItem title= 'Trending' param= 'fectchTrending'/>
    </div>
  )
}

export default NavBar
