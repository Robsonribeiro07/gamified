import Loading from '@/app/(private)/loading'
import { usePathname, useRouter } from 'expo-router'
import { ReactNode, useEffect, useState } from 'react'

const privateRoutes = ['/Home', '/Profile', '/Shop']
const authRoutes = ['/Auth']

export function ProtectRouter({ children }: { children: ReactNode }) {
  const isAuthenticated = true
  const { replace } = useRouter()
  const pathname = usePathname()

  const [checkingAuth, setCheckingAuth] = useState(true)

  useEffect(() => {
    if (!isAuthenticated && privateRoutes.includes(pathname)) {
      if (pathname !== '/Auth') replace('/Auth')
    }

    if (isAuthenticated && authRoutes.includes(pathname)) {
      if (pathname !== '/') replace('/')
    }

    setCheckingAuth(false)
  }, [isAuthenticated, pathname, replace])

  if (checkingAuth) return <Loading />

  return <>{children}</>
}
