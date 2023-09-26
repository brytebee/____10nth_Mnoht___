import React from 'react'
import Link from 'next/link'

type Props = {
  data:
  {
    name: string,
    path: string
  }[],
  heading: string
}

export default function Links({ data, heading }: Props) {
  return (
    <div className="flex flex-col gap-5 md:items-center">
      <h4 className="text-[20px] text-white font-semibold leading-6">{heading}</h4>
      <ul className='flex flex-col gap-1 md:items-center md:gap-6'>
        {data.map(({ name, path }, index) => (
          <li key={index}>
            <Link href={path} className="block py-3 pr-4 leading-5 rounded text-white md:text-body hover:pl-2 hover:bg-gray-100 hover:text-primary md:hover:bg-transparent md:p-0 md:text-white md:hover:pl-0" aria-current={path === path ? 'page' : undefined}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}