import { UserButton } from '@clerk/nextjs'
import React from 'react'

export default function RootPage() {
  return (
    <div>
      <h1>Root Page (Protected)</h1>
      <UserButton afterSignOutUrl='/'/>
    </div>
  )
}
