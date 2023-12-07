import React from 'react'
import ContactForm from './ContactForm'
import ContactDetails from './ContactDetails'

export default function ContactUsPage() {
  return (
    <main className='bg-[#F2F2F2] pt-16 px-8 md:pb-20'>
      <h1 className='text-center mb-12 text-[#333] text-xl md:text-3xl font-black border-b border-[#A63F0E] w-[125px] md:w-[250px] md:mb-16 mx-auto'>Contact Us!</h1>
      <div className='flex flex-col md:flex-row-reverse lg:ml-[360px] md:justify-center gap-12 md:w-full lg:w-7/12'>
        <ContactForm />
        <ContactDetails />
      </div>
    </main>
  )
}
