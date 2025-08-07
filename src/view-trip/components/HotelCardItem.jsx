// import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function HotelCardItem({hotel}) {
    // console.log(hotel);
    
  return (
    
    <Link to={'https://www.google.com/maps/search/?api=1&query='+hotel.HotelName+","+hotel.HotelAddress} target='_blank'>
            <div className='hover:scale-105 transition-all cursor-pointer mt-3 my-5'>
                <img src={"/placeholder.png"} className='rounded-lg h-[180px] w-full object-cover' />
                <div className='my-2 flex flex-col gap-2'>
                    <h2 className='font-medium'>{hotel?.HotelName}</h2>
                    <h2 className='text-xs text-gray-500'>📍 {hotel?.HotelAddress}</h2>
                    <h2 className='text-sm'>💰 {hotel?.PricePerNightINR}</h2>
                    <h2 className='text-sm'>⭐ {hotel.Rating} stars</h2>
                </div>
            </div>
        </Link>
    
  )
}

export default HotelCardItem
