import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const email = 'techverseacademy23@gmail.com';

export default function ContactDetails() {
  return (
    <div className='pb-20'>
      <div className='flex flex-col gap-3 justify-center md:items-start'>
        <p className='flex items-center gap-2'>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
            <path d="M15 2.5C10.1625 2.5 6.25 6.4125 6.25 11.25C6.25 17.8125 15 27.5 15 27.5C15 27.5 23.75 17.8125 23.75 11.25C23.75 6.4125 19.8375 2.5 15 2.5ZM8.75 11.25C8.75 7.8 11.55 5 15 5C18.45 5 21.25 7.8 21.25 11.25C21.25 14.85 17.65 20.2375 15 23.6C12.4 20.2625 8.75 14.8125 8.75 11.25Z" fill="#333333" />
            <path d="M15 14.375C16.7259 14.375 18.125 12.9759 18.125 11.25C18.125 9.52411 16.7259 8.125 15 8.125C13.2741 8.125 11.875 9.52411 11.875 11.25C11.875 12.9759 13.2741 14.375 15 14.375Z" fill="#333333" />
          </svg>
          <span className=''>Remote</span>
        </p>

        <Link href={`mailto:${email}`} className='flex gap items-center gap-2 hover:text-[#D97508]'>
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M25.6668 7.00002C25.6668 5.71669 24.6168 4.66669 23.3335 4.66669H4.66683C3.3835 4.66669 2.3335 5.71669 2.3335 7.00002V21C2.3335 22.2834 3.3835 23.3334 4.66683 23.3334H23.3335C24.6168 23.3334 25.6668 22.2834 25.6668 21V7.00002ZM23.3335 7.00002L14.0002 12.8334L4.66683 7.00002H23.3335ZM23.3335 21H4.66683V9.33335L14.0002 15.1667L23.3335 9.33335V21Z" fill="#333333" />
          </svg>
          <span>{email}</span>
        </Link>
        <Link href='https://facebook.com/tecverseacademy' target='_blank' className='flex gap items-center gap-2 hover:text-[#D97508]'>
          <Image src='/svgs/facebook.svg' width={30} height={30} alt='facebook' />
          @tecverseacademy
        </Link>

        <Link href='https://instagram.com/tecverseacademy' target='_blank' className='flex gap items-center gap-2 hover:text-[#D97508]'>
          <Image src='/svgs/instagram.svg' width={30} height={30} alt='instagram' />
          @tecverseacademy
        </Link>

        <Link href='https://twitter.com/TecVerseAcademy' target='_blank' className='flex gap items-center gap-2 hover:text-[#D97508]'>
          <Image src='/svgs/twitter.svg' width={30} height={30} alt='twitter' />
          @TecVerseAcademy
        </Link>

        <Link href='https://wa.me/2347066324306' target='_blank' className='flex gap items-center gap-2 hover:text-[#D97508]'>
          <Image src='/svgs/whatsapp.svg' width={30} height={30} alt='whatsapp' />
          +2347066324306
        </Link>
      </div>
    </div>
  )
}
