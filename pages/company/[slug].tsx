import CustomRow from '@/components/Main/CustomRow'
import { useRouter } from 'next/router'
import React, { ReactNode } from 'react'
import { BsApp, BsApple, BsChat, BsFacebook, BsLinkedin } from 'react-icons/bs'
import RadarChart from '@/components/Main/RadarChart'

const Company = () => {
  const router = useRouter()
  const { slug } = router.query
  return (
    <div className='w-full p-8 border-l'>
      <h2 className='text-xl font-semibold'>{slug}</h2>
      <div className='mt-4 bg-stone-100 h-[200px] w-full rounded-xl flex items-center'>
        <div className='w-[500px] h-full grid place-items-center'>
          <BsApple className='text-[5rem]' />
        </div>
        <p className='font-[500] p-3 md:pr-10'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur officiis necessitatibus, expedita nulla exercitationem vero natus laborum aliquid ipsa, vitae pariatur earum non velit odio accusantium quae nisi porro illum?
        </p>

      </div>

      <div className='w-full grid grid-cols-2 gap-3'>
      <a href='https://linkedin.com' target='_blank' className='bg-stone-100 mt-4 h-[50px] rounded-xl flex items-center justify-center gap-2'>
        <BsLinkedin /> Linkedin Link
      </a>
      <a href='https://linkedin.com' target='_blank' className='bg-stone-100 mt-4 h-[50px] rounded-xl flex items-center justify-center gap-2'>
        <BsChat /> Chat
      </a>
      </div>

      <h2 className='text-xl mt-4 font-semibold'>Statistics</h2>
      <div className='-mt-8 grid grid-rows-1 gap-4  grid-cols-2'>
        <div className='bg-stone-100 w-full mt-[3rem] flex flex-col gap-2 p-2 rounded-lg'>
          <CustomRow parameter='Funding' value = {0.5} />
          <CustomRow parameter='Market Cap' value = {0.5} />
          <CustomRow parameter='Enterprise Value' value = {0.5} />
        </div>
        <div className='bg-stone-100 w-full mt-[3rem] flex flex-col gap-2 p-2 rounded-lg'>
          <CustomRow parameter='Revenue' value = {0.5} />
          <CustomRow parameter='Tax' value = {0.5} />
          <CustomRow parameter='Profit' value = {0.5} />
        </div>

      </div>
      <h2 className='text-xl font-semibold my-4 mt-6'>Spending Analysis</h2>
      <div className='-my-8'></div>
        <div className='bg-stone-100 w-full mt-[3rem] flex flex-col gap-2 p-2 rounded-lg'>
          <CustomRow parameter='R&D' value = {0.5} />
          <CustomRow parameter='Marketing' value = {0.5} />
          <CustomRow parameter='Administration' value = {0.5} />
        </div>
      <div></div>
    </div>
  )
}

Company.CompanyLayout = (page: ReactNode) => {
  return (
    { page }
  )
}

export default Company
