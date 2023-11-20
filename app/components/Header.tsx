import { Box, Flex, Heading } from "@radix-ui/themes"
import { getAuthSession } from '../lib/auth-options'
import { LoginButton } from '@/components/authentification/LoginButton'
import { UserProfile } from '@/components/authentification/UserProfile'
import { Navigation } from "./navigation/Navigation"
import Image from "next/image"
import '../styles.css'

export const Header = async () => {
    const session = await getAuthSession()

    return (
        <header>
            <Flex
                align={'center'}
                justify={'between'}
            >
                <Box>
                    <Navigation />
                </Box>
                <Box>
                    <Flex
                        justify={'between'}
                        align={'center'}
                    >
                        <Image src={'/poladex-logo.svg'} alt={'Poladex logo'} width={40} height={40} />
                        <Heading
                            as={'h1'}
                            weight={'bold'}
                            ml={'4'}
                            mr={'4'}
                        >
                            POLADEX
                        </Heading>
                    </Flex>
                </Box>
                <Box>
                    {session?.user ? <UserProfile userName={session.user.name} /> : <LoginButton />}
                </Box>
            </Flex>
        </header>
    )
}