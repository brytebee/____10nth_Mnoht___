'use client';

import React from 'react'
import { usePathname } from 'next/navigation';
import LinksContainer from './LinkComponent';
import { student, admin, reviewer, tutor } from '@/app/utils/links';

const studentPaths = ['/dashboard/student', '/dashboard/student/*']
const adminPaths = ['/dashboard/admin', '/dashboard/admin/*']
const reviewerPaths = ['/dashboard/reviewer', '/dashboard/reviewer/*']
const tutorPaths = ['/dashboard/tutor', '/dashboard/tutor/*']

function LinksByPath(pathname: string): React.JSX.Element | null {
  if (studentPaths.some(path => pathname.startsWith(path))) {
    return <LinksContainer path={pathname} links={student} />;
  }
  if (adminPaths.some(path => pathname.startsWith(path))) {
    return <LinksContainer path={pathname} links={admin} />;
  }
  if (reviewerPaths.some(path => pathname.startsWith(path))) {
    return <LinksContainer path={pathname} links={reviewer} />;
  }
  if (tutorPaths.some(path => pathname.startsWith(path))) {
    return <LinksContainer path={pathname} links={tutor} />;
  }
  return null;
}

export default function SidebarLinks() {
  const pathname = usePathname();
  return LinksByPath(pathname);
}
