import React from 'react'
import Image from 'next/image'
import Instructions from '@/components/Instructions'

const page = () => {
  return (
    <div className='flex flex-col gap-5 justify-center items-center'>
      <Image
        src={'/M.A.E.png'}
        width={300}
        height={300}
        alt='M.A.E'

      />
      <h1 className='text-4xl font-sans'>Download Moodle Auto Enroller</h1>
      <a href='./M.A.E.zip' download className='px-3 py-2 w-fit bg-blue-500 border-none rounded-md cursor-pointer no-underline'>Download Now</a>
      <Instructions/>
    </div>
  )
}

export default page