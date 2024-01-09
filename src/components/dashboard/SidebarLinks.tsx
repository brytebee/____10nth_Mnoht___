'use client';

import React from 'react'
import { usePathname } from 'next/navigation';
import LinksContainer from './LinkComponent';
import { student, admin, reviewer, tutor } from '@/app/utils/links';

const LinksByPath = (pathname: string) => {
  switch (pathname) {
    case '/dashboard/student':
      return <LinksContainer links={student} />;
    case '/dashboard/admin':
      return <LinksContainer links={admin} />;
    case '/dashboard/reviewer':
      return <LinksContainer links={reviewer} />;
    case '/dashboard/tutor':
      return <LinksContainer links={tutor} />;
    default:
      return [];
  }
}

export default function SidebarLinks() {
  const pathname = usePathname();
  return (
    <>
      {LinksByPath(pathname)}
    </>
  )
}
