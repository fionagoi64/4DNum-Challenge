import React from 'react'
import share from '../images/webShare.svg'

type CardProps ={
    imgSrc:string;
    branchName:string;
}

const Card = (props:CardProps) => {
  return (
   <div className='card bg-white w-full'>
   <div className='bg-black'>
    <div className='grid grid-cols-3 items-start'>
        <div className='col-span-2 flex justify-end'>
            <div className='flex flex-col items-center'>
            <div className='img-bg'>
                <img className='img' src={`${props.imgSrc}`} alt='' />
            </div>
            <p className='text-lg text-white'>{props.branchName}</p>
            </div>
        </div>
        <button className='flex justify-end'>
            <img src={share} alt='' />
        </button>
    </div>
   </div>
   <div></div>
   <div></div>
   </div>
  )
}

export default Card