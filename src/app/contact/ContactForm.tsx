'use client';

import React from 'react'
import { useFormWithValidation } from '@/hooks/useFormValidator';
import { contactSchema as schema } from '../utils/schema';

export default function ContactForm() {
  const { register, handleSubmit, onSubmit, errors, isSubmitting } = useFormWithValidation(schema);

  return (
    <form className='flex flex-col gap-5 md:w-[450px]' onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">
        <input type="text" id="name" placeholder='Name'
          className='py-3 px-2 w-full border border-none rounded-[5px] bg-[#d9d9dc]'
          {...register("name")}
          style={errors.name && errorStyles}
        />
        {errors.name && <p className='text-red-700'>{errors.name.message}</p>}
      </label>
      <label htmlFor="email">
        <input type="email" id="email" placeholder='Email'
          className='py-3 px-2 w-full border border-none rounded-[5px] bg-[#d9d9dc]'
          {...register("email")}
          style={errors.email && errorStyles}
        />
        {errors.email && <p className='text-red-700'>{errors.email.message}</p>}
      </label>
      <label htmlFor="message">
        <textarea id="message" cols={30} rows={6} placeholder='Type in your message' className='py-3 px-2 w-full border border-none rounded-[5px] bg-[#d9d9dc]'
          {...register("message")}
          style={errors.message && errorStyles}
        ></textarea>
        {errors.message && <p className='text-red-700'>{errors.message.message}</p>}
      </label>
      <button type="submit" className='self-center md:self-start mt-3 w-28 md:w-[200px] py-3 px-6 flex items-center bg-[#D97508] rounded-[10px] text-white mb-3 md:mb-0 justify-center'
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  )
}

const errorStyles = {
  border: '1px solid red',
  color: 'red'
}
