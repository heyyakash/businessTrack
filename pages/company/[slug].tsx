import { useRouter } from 'next/router'
import React from 'react'
import { BsFacebook, BsLinkedin } from 'react-icons/bs'

const Company = () => {
  const router = useRouter()
  const { slug } = router.query
  return (
    <div className='w-full p-8 border-l'>
      <h2 className='text-xl font-semibold'>{slug}</h2>
      <div className='mt-4 bg-stone-100 h-[200px] w-full rounded-xl flex items-center'>
        <div className='w-[500px] h-full grid place-items-center'>
          <BsFacebook className='text-[5rem]' />
        </div>
        <p className='font-[500] p-3 md:pr-10'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur officiis necessitatibus, expedita nulla exercitationem vero natus laborum aliquid ipsa, vitae pariatur earum non velit odio accusantium quae nisi porro illum?
        </p>

      </div>
     
      <a href='https://linkedin.com' className='bg-stone-100 mt-4 h-[50px] rounded-xl flex items-center justify-center gap-2'>
        <BsLinkedin /> Linkedin Link
      </a>

    </div>
  )
}

export default Company