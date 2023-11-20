'use client'

import { Button } from '@radix-ui/themes'
import { signIn } from 'next-auth/react'
import { useTransition } from 'react'
import { EnterIcon } from '@radix-ui/react-icons'
import { Loader } from '../components/ui/Loader'

export const LoginButton = () => {
    const [isPending, startTransition] = useTransition()
    return (
        <Button onClick={() => {
            startTransition(() => signIn())
        }}>
            {isPending ? <Loader /> : <EnterIcon />} Connexion
        </Button>
    )
}
