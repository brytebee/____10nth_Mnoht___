import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SidebarLinks from '@/components/dashboard/SidebarLinks'

export default function DashboardSideBar() {
  return (
    <section className='flex flex-col w-[300px] h-screen bg-secondary-color pb-14 pt-5'>
      <div className='relative w-[268px] h-[83px] mx-auto'>
        <Image src='/svgs/techverse-logo2.svg' fill alt='logo' className='absolute mb-3' />
      </div>
      <div className='mb-auto pl-16'>
        <SidebarLinks />
      </div>
      <Link href='logout' className='mt-auto pl-16 px-2 py-1 text-base font-bold text-body rounded-[20px] hover:text-white w-[200px]'>
        Logout
      </Link>
    </section>
  )
}
