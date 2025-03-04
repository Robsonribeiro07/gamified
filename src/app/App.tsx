import { QueryClientProvider } from '@tanstack/react-query'
import './global.css'
import DefaultRootStack from './navigation/Root-navigator'
import queryClient from '@/lib/queryclient'

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <DefaultRootStack />
    </QueryClientProvider>
  )
}
