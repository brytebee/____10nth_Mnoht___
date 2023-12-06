import React from 'react'
import ContactForm from './ContactForm'
import ContactDetails from './ContactDetails'

export default function ContactUsPage() {
  return (
    <main className='bg-[#F2F2F2] pt-16 px-8'>
      <h1 className='text-center mb-12 text-[#333] text-xl font-black border-b border-[#A63F0E] w-[125px] mx-auto'>Contact Us!</h1>
      <div>
        <ContactForm />
        <ContactDetails />
      </div>
    </main>
  )
}
