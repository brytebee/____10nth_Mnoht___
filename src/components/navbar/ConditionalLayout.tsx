'use client';

import React from 'react'
import { usePathname } from 'next/navigation'
import NavBar from './NavBar';
import Footer from '../footer/Footer';

interface IProps {
  children: React.ReactNode;
}

export default function ConditionalLayout({ children }: IProps) {
  const pathname = usePathname()
  return (
    <React.Fragment>
      {
        pathname.startsWith('/dashboard') ? children :
          (<>
            <NavBar />
            {children}
            <Footer />
          </>)
      }
    </React.Fragment>
  )
}
