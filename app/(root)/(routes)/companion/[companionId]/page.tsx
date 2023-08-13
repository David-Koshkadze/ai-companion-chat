import prismadb from '@/lib/prisma_db'
import React from 'react'
import CompanionForm from './components/companion-form'

interface CompanionIdProps {
  params: {
    companionId: string
  }
}

export default async function CompanionPage({params}: CompanionIdProps) {

  // Check Subscription

  const companion = prismadb.companion.findUnique({where: {
    id: params.companionId
  }})

  const categories = await prismadb.category.findMany();


  return (
    <CompanionForm
      initialData={companion}
      categories={categories}
    />
  )
}
