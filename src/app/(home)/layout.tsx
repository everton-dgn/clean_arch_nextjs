import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  description: 'Boilerplate Clean Architecture + DDD',
  title: 'Home Page'
}

const HomeLayout = ({ children }: { children: ReactNode }) => <>{children}</>

export default HomeLayout
