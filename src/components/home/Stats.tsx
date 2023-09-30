import React from 'react'

type Props = {
  stats: {
    title: string,
    value: number,
  }[]
}
export default function Stats({ stats }: Props) {
  return (
    <div className='mx-auto px-3 py-6 w-[320px] lg:w-[1133px] md:w-11/12 lg:my-16 md:my-10 border lg:border-none md:border-none bg-[#F6F6F6] lg:bg-inherit md:bg-inherit shadow-[0px 4px 30px 0px rgba(0, 0, 0, 0.05)] rounded-md flex flex-wrap items-center justify-between gap-7'>
      {stats.map(({ value, title }, index) => (
        <div key={index} className='flex flex-col items-center justify-center'>
          <p className='text-lg font-bold text-body lg:text-2xl'>{title}</p>
          <h3 className='text-xl font-black text-body lg:text-3xl'>{value}<span className='font-normal text-lg'>+</span></h3>
        </div>
      ))
      }
    </div>
  )
}