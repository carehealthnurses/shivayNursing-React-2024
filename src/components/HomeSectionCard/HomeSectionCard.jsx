import React from 'react'

const HomeSectionCard = () => {
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white shadow-lg overflow-hidden w-[15rem] mx-3 border'>
        <div className='h-[13rem] w-[12rem]'>
            <img className='object-cover object-top w-full h-full' src="https://the-shirt.com/cdn/shop/files/the-signature-shirt-saddle4_360x.jpg?v=1713998570" alt="" />
        </div>
        <div className='p-4'>
            <h3 className='text-lg font-medium text-grey-900'>Cobalt</h3>
            <p className='mt-2 text-sm text-grey-500'>Women's silk shirts termarine color</p>

        </div>
    </div>
  )
}

export default HomeSectionCard