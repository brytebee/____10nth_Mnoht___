'use client';

import React from 'react'
import Image from 'next/image'

export default function DashboardTopBar() {
  const [selected, setSelected] = React.useState('student');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(event.target.value);
  };

  // user role options
  const options = [
    { value: 'student', label: 'student' },
    { value: 'tutor', label: 'tutor' },
    { value: 'admin', label: 'admin' },
    { value: 'reviewer', label: 'reviewer' },
  ];
  return (
    <div className='w-full h-14 bg-white rounded-2xl shadow flex justify-between pl-11 pr-5 items-center'>
      <div className='flex pt-2 pb-2 px-5 border bg-[#F2F2F2] items-center rounded-[20px] custom-select'>
        <select name="role" id="role" className='bg-inherit w-full text-[15px] font-semibold'
          value={selected}
          onChange={handleChange}
        >
          {options.map(({ value, label }) => (
            <option key={value} value={value} className='text-body'>{label}</option>
          ))}
        </select>
      </div>
      <div className='flex gap-3'>
        <Image src='/svgs/notification.svg' alt='notification' width={24} height={24} />
        <div className='flex gap-2 items-center'>
          <Image src='/svgs/profile.svg' alt='profile' width={35} height={35} />
          <div className='flex flex-col'>
            <span className='text-sm'>Jean Tatlock</span>
            <span className='text-sm font-light'>{selected}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
