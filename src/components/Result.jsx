import Image from 'next/image'
import React from 'react'
import Card from './Card'

function Result({results}) {
  return (
    <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 mx-w-6xl mx-auto py-4'>
     {/* {
      results.map((result) =>{
       
          <h2>{result.Title}</h2>


      })
     } */}
      <Card result = {results[0]}/>
      <Card result = {results[0]}/>
      <Card result = {results[0]}/>
      <Card result = {results[0]}/>
      <Card result = {results[0]}/>
      <Card result = {results[0]}/>
      <Card result = {results[0]}/>
      <Card result = {results[0]}/>
      <Card result = {results[0]}/>
      <Card result = {results[0]}/>
      <Card result = {results[0]}/>
      <Card result = {results[0]}/>


    </div>
  )
}

export default Result
