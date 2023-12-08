import React from 'react'
import ContactForm from './ContactForm'
import ContactDetails from './ContactDetails'
import Image from 'next/image'

export default function ContactUsPage() {
  return (
    <main className='bg-[#F2F2F2] pt-16 px-8 md:pb-20 relative'>
      <Image src='/svgs/polygon-header.svg' alt='polygon' width={100} height={100} className='hidden lg:block absolute top-2 left-[470px]' />
      <Image src='/svgs/polygon-nav.svg' alt='polygon' width={150} height={150} className='hidden lg:block absolute -top-20 right-80 z-auto' />
      <h1 className='text-center mb-12 text-[#333] text-xl md:text-3xl font-black border-b border-[#A63F0E] w-[125px] md:w-[250px] md:mb-16 mx-auto'>Contact Us!</h1>
      <Image src='/svgs/polygon-double.svg' alt='polygon' width={100} height={50} className='hidden lg:block absolute top-10 left-0' />
      <div className='flex flex-col md:flex-row-reverse lg:ml-[360px] md:justify-center gap-12 md:w-full lg:w-7/12'>
        <ContactForm />
        <ContactDetails />
        <Image src='/svgs/polygon-form.svg' alt='polygon' width={150} height={150} className='hidden lg:block absolute bottom-36 right-12' />
      </div>
      <Image src='/svgs/polygon-footer.svg' alt='polygon' width={80} height={80} className='hidden lg:block absolute -bottom-10 left-20 z-auto' />
    </main>
  )
}
