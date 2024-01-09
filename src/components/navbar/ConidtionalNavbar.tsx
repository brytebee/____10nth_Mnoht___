'use client';

import React from 'react'
import { usePathname } from 'next/navigation'
import NavBar from './NavBar';

export default function ConidtionalNavbar() {
  const pathname = usePathname()
  return (
    <>
      {pathname.startsWith('/dashboard') ? null : <NavBar />}
    </>
  )
}
