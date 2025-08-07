import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='flex flex-col items-center mx-20 md:mx-56 gap-9'>
      <h1 className='font-extrabold text-[35px] md:text-[50px] text-center mt-16 '>
        <span className='text-[#f56551]'>
            Discover Your Next Adventure With AI:
        </span>
        Personalised Itineraries at your Fingertips
      </h1>
      <p className='text-xl text-center text-gray-500'>
        Your personal trip planner and travel curator, creating custom itineraries tailored to your interest abd budget
      </p>
      <Link to={'/create-trip'}>
      <Button> Get Started, It's Free</Button>
      </Link>
      <img src="landing.png" className='mt-[-2rem]' />
    </div>
  )
}

export default Hero
