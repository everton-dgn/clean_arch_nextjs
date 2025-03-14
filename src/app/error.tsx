'use client'

import { useRouter } from 'next/navigation'

import { ErrorFallback } from 'presentation/components/organisms/ErrorFallback'

const ErrorPage = () => {
  const { replace } = useRouter()

  return <ErrorFallback reset={() => replace('/')} />
}

export default ErrorPage
