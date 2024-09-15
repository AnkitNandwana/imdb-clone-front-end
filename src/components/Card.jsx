import Image from 'next/image'
import React from 'react'
import { FiThumbsUp } from "react-icons/fi";
export default function Card({result}) {
  return (
    <div className='group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200'>
      <Image src = {result.Poster}
      width={350}
      height={100}
      className='sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300'>

      </Image>
      <div className='p-2'>
          <p className='line-clamp-2 text-md'>{result.Plot}</p>
          <h2 className='text-lg font-bold truncate'>
            {result.Title}
          </h2>
          <p className='flex items-center'>
            {result.released }
            <FiThumbsUp className='h-5 mr-1 ml-3' />
            {result.imdbVotes}
          </p>
        </div>
    </div>
  )
}
