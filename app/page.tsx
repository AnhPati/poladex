import { Home } from "@/app/Home"
import { getAuthSession } from "./lib/auth-options"

export default async function App() {
  const session = await getAuthSession()

  return (
    <Home user={session?.user} />
  )
}
