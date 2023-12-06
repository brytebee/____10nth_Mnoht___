'use client';

import React from 'react'

export default function ContactForm() {
  const [contactDetails, setContactDetails] = React.useState({
    name: '',
    email: '',
    message: ''
  })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactDetails({ ...contactDetails, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(contactDetails)
    setContactDetails({
      name: '',
      email: '',
      message: ''
    })
  }
  const { name, email, message } = contactDetails
  return (
    <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
      <label style={{ display: 'none' }} htmlFor="name">Name</label>
      <input type="text" name="name" id="name" placeholder='email'
        className='py-3 px-2 w-full border border-none rounded-[5px] bg-[#d9d9dc]'
        value={name}
        onChange={handleChange}
      />
      <label style={{ display: 'none' }} htmlFor="email">Email</label>
      <input type="email" name="email" id="email" placeholder='email'
        className='py-3 px-2 w-full border border-none rounded-[5px] bg-[#d9d9dc]'
        value={email}
        onChange={handleChange}
      />
      <label style={{ display: 'none' }} htmlFor="message">Message</label>
      <textarea name="message" id="message" cols={30} rows={10} placeholder='message' className='py-3 px-2 w-full border border-none rounded-[5px] bg-[#d9d9dc]'
        value={message}
        onChange={handleChange}
      ></textarea>
      <button type="submit" className='self-center mt-3 w-28 py-3 px-6 flex items-center bg-[#D97508] rounded-[10px] text-white mb-12'>Submit</button>
    </form>
  )
}
