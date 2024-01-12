import React from 'react'
import DashboardTopBar from '@/components/dashboard/DashboardTopBar'
import DashboardSideBar from '@/components/dashboard/DashboardSideBar'

interface Props {
  children: React.ReactNode
}

export default async function DashboardLayout({ children }: Props) {
  return (
    <div className='flex gap-5 w-full bg-dashboard-bg-color'>
      <DashboardSideBar />
      <section className='w-full h-screen pt-3'>
        <DashboardTopBar />
        {children} { /* this is where the content will be rendered the height and width can be controlled by individual components */}
      </section>
    </div>
  )
}
