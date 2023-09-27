'use client'

import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  const { status, data: session } = useSession();

  return (
    <div className='flex bg-slate-200 p-2 space-x-3'>
      <Link href="/">Next.js</Link>
      <Link href="/users">Users</Link>
      {status === 'loading' && <span className='loading loading-dots loading-sm'></span>}
      {status === 'authenticated' && <div>
        {session.user!.name}
        <Link href="/api/auth/signout" className='ml-3'>Sign out</Link>
      </div>}
      {status === 'unauthenticated' && <Link href="/api/auth/signin">Login</Link>}
    </div>
  )
}

export default NavBar