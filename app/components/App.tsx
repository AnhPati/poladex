import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import './App.css'
import Poladex from './components/Poladex'

const queryClient = new QueryClient()

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Poladex />
      </QueryClientProvider>
    </>
  )
}

export default App
