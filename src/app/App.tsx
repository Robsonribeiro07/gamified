import { QueryClientProvider } from '@tanstack/react-query'
import './global.css'
import DefaultRootStack from './navigation/Root-navigator'
import queryClient from '@/lib/queryclient'
import useCustomFonts from '@/hooks/use-custom-fonts'

export default function App() {
  useCustomFonts()

  return (
    <QueryClientProvider client={queryClient}>
      <DefaultRootStack />
    </QueryClientProvider>
  )
}
