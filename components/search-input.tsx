import React from 'react'
import { Input } from './ui/input'
import { Search } from 'lucide-react'

export default function SearchInput() {
  return (
    <div className="relative">
      <Search className="absolute w-4 h-4 left-4 top-3"/>
      <Input placeholder='Search...' className="pl-10 bg-primary/10 text-sm"/>
    </div>
  )
}
