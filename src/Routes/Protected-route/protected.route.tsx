import Loading from '@/app/(private)/loading'
import { usePathname, useRouter } from 'expo-router'
import { ReactNode, useEffect, useState } from 'react'

const privateRoutes = ['/Home', '/Ranking', '/History']
const authRoutes = ['/Auth']

export function ProtectRouter({
  children,
  isAuthenticated = false,
}: {
  children: ReactNode
  isAuthenticated?: boolean
}) {
  const { replace } = useRouter()
  const pathname = usePathname()

  const [checkingAuth, setCheckingAuth] = useState(true)

  useEffect(() => {
    if (!isAuthenticated && privateRoutes.includes(pathname)) {
      if (pathname !== '/Auth') {
        replace('/Auth')
      }
    }

    if (isAuthenticated && authRoutes.includes(pathname)) {
      if (pathname !== '/Home') {
        replace('/Home')
      }
    }

    setCheckingAuth(false)
  }, [isAuthenticated, pathname, replace, isAuthenticated])

  if (checkingAuth && !isAuthenticated) return <Loading />

  return <>{children}</>
}
