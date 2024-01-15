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
    <div className="flex flex-col gap-3 md:items-start">
      <h4 className="text-[20px] text-white font-semibold leading-6 md:text-lg lg:text-xl">{heading}</h4>
      <ul className='flex flex-col gap-1 md:items-start md:gap-3'>
        {data.map(({ name, path }, index) => (
          <li key={index}>
            <Link href={path} target={name === 'WhatsApp' ? '_blank' : undefined} className="block py-3 pr-4 leading-5 rounded text-white md:text-body md:text-base lg:text-base hover:pl-2 hover:bg-gray-100 hover:text-primary md:hover:bg-transparent md:p-0 md:text-white md:hover:pl-0" aria-current={path === path ? 'page' : undefined}>
              {name === 'Phone' ? `${name}: +2347085665133` : name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}