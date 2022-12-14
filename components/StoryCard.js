import Image from 'next/image'
import React from 'react'

function StoryCard({name, profile, src}) {
  return (
    <div className='relative h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:w-32 cursor-pointer
        overflow-x p-3 filter hover:brightness-110 transition duration-150 transform hover:scale-105    
    '>
        <Image
            className='rounded-full opacity-0 lg:opacity-100 absolute z-50 top-10'
            width={40}
            height={40}
            layout='fixed'
            src={profile}
            objectFit='cover'
        />
        <Image 
            className="object-cover filter brightness-75
            rounded-full lg:rounded-3xl"
            src={src}
            layout="fill" 
        />
        <p className='absolute opacity-0 lg:opacity-100 bottom-4 w-5/6 text-white text-sm font-bold truncate'>{name}</p>
    </div>
  )
}

export default StoryCard
