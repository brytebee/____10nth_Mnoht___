'use client';

import React from 'react'
import { useFormWithValidation } from '@/hooks/useFormValidator';
import { contactSchema as schema } from '../utils/schema';

export default function ContactForm() {
  const { register, handleSubmit, onSubmit, errors } = useFormWithValidation(schema);
  console.log(errors);

  return (
    <form className='flex flex-col gap-5 md:w-[450px]' onSubmit={handleSubmit(onSubmit)}>
      <label style={{ display: 'none' }} htmlFor="name">Name</label>
      <input type="text" id="name" placeholder='name'
        className='py-3 px-2 w-full border border-none rounded-[5px] bg-[#d9d9dc]'
        {...register("name")}
      />
      {errors.name && <p className='text-red-700'>{errors.name.message}</p>}
      <label style={{ display: 'none' }} htmlFor="email">Email</label>
      <input type="email" id="email" placeholder='email'
        className='py-3 px-2 w-full border border-none rounded-[5px] bg-[#d9d9dc]'
        {...register("email")}
      />
      {errors.email && <p className='text-red-700'>{errors.email.message}</p>}
      <label style={{ display: 'none' }} htmlFor="message">Message</label>
      <textarea id="message" cols={30} rows={10} placeholder='message' className='py-3 px-2 w-full border border-none rounded-[5px] bg-[#d9d9dc]'
        {...register("message")}
      ></textarea>
      {errors.message && <p className='text-red-700'>{errors.message.message}</p>}
      <button type="submit" className='self-center md:self-start mt-3 w-28 md:w-[200px] py-3 px-6 flex items-center bg-[#D97508] rounded-[10px] text-white mb-12 md:mb-0 justify-center'>Submit</button>
    </form>
  )
}
