import { Button, DropdownMenu, Heading } from '@radix-ui/themes'
import { getAuthSession } from '../lib/auth-options'
import { LoginButton } from './LoginButton'
import { UserProfile } from './UserProfile'

const Authentification = async () => {
    const session = await getAuthSession()
    return (
        <div>
            <Heading>
                Authentification
            </Heading>
            {session?.user ? <UserProfile userName={session.user.name} /> : <LoginButton />}
        </div>
    )
}

export default Authentification