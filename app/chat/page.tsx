'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { v4 as uuidv4 } from 'uuid'
import withAuth from '@/components/withAuth'
import { LoadingSpinner } from '@/components/ui/loading-spinner'

function CreateChatPage() {
  const router = useRouter()

  useEffect(() => {
    const newChatId = uuidv4()
    router.replace(`/chat/${newChatId}`)
  }, [router])

  return (
    <div className="flex h-screen items-center justify-center">
      <LoadingSpinner />
      <p className="ml-2">Creating a new chat...</p>
    </div>
  )
}

export default withAuth(CreateChatPage)
