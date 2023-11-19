'use client'

import { Button } from '@radix-ui/themes'
import { GoogleIcon } from './GoogleIcon'
import { signIn } from 'next-auth/react'

const Authentification = () => {
    return (
        <div>
            <h2>
                Authentification
            </h2>
            <Button onClick={() => {
                signIn()
            }}>
                <GoogleIcon /> Connexion
            </Button>
        </div>
    )
}

export default Authentification