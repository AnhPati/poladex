'use client'

import { Button } from '@radix-ui/themes'
import { signOut } from 'next-auth/react'
import { useTransition } from 'react'
import { ExitIcon } from '@radix-ui/react-icons'
import { Loader } from '../components/ui/Loader'

export const DropdownMenuItemLogout = () => {
    const [isPending, startTransition] = useTransition()
    return (
        <Button onClick={() => {
            startTransition(() => signOut())
        }}>
            {isPending ? <Loader /> : <ExitIcon />} Déconnexion
        </Button>
    )
}
