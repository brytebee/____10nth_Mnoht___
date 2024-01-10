'use client';

import React from 'react'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'

export default function ProfileLink({ classes }: { classes: (href: string) => string }) {
  const segment = useSelectedLayoutSegment()
  return (
    <Link href={`/dashboard/${segment}/profile`} className={`${classes(`/dashboard/${segment}/profile`)}`}>
      Profile
    </Link>
  )
}
