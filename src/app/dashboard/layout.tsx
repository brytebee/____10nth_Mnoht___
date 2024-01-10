import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SidebarLinks from '@/components/dashboard/SidebarLinks'

interface Props {
  children: React.ReactNode
}

export default async function DashboardLayout({ children }: Props) {
  const session = true
  return (
    <div className='flex gap-5'>
      <section className='flex flex-col w-[300px] h-screen bg-[#E6C09C] pb-14 pt-5'>
        <div className='relative w-[268px] h-[83px] mx-auto'>
          <Image src='/svgs/techverse-logo2.svg' fill alt='logo' className='absolute mb-3' />
        </div>
        <div className='mb-auto pl-16'>
          <SidebarLinks />
        </div>

        <Link href='logout' className='mt-auto pl-16 px-2 py-1 text-base font-bold text-[#333] rounded-[20px] hover:text-white w-[200px]'>
          Logout
        </Link>
      </section>
      <section className='w-[73%] h-full bg-white border'>
        {children}
      </section>
    </div>
  )
}
