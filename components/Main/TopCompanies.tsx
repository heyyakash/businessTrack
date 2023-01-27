import Link from 'next/link'
import React from 'react'
import { IoLogoLinkedin } from 'react-icons/io'
import TopCompanyBox from './TopCompanyBox'


const TopCompanies = () => {
    return (
        <div className='py-4 mt-4 flex flex-col gap-8'>
            <h3 className='text-xl font-semibold'>Top Companies</h3>
            <div className='grid grid-cols-3 gap-8 grid-rows-1'>

            <TopCompanyBox name = "LinkedIn" percentage={12} />
            <TopCompanyBox name = "FaceBook" percentage={5} />
            <TopCompanyBox name = "Instagram" percentage={8} />
            

            </div>
        </div>
  
  )
}

export default TopCompanies