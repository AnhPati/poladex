'use client'

import { Button, Flex, Heading, Text } from '@radix-ui/themes'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import { LoginButton } from './components/authentification/LoginButton'

const HeadingContainer = styled.div`
  width: 180px;
  text-align: center;
`

const TextContainer = styled.div`
  width: 280px;
  margin-top: 40px;
  text-align: center;
`

const ButtonContainer = styled.div`
  button {
    width: 140px;
    height: 50px;
    text-align: center;
  }
    a {
      font-weight: 600;
    }
`

export const Home = ({ user }: { user?: {} }) => {
    return (
        <Flex
            direction={'column'}
            align={'center'}
        >
            <HeadingContainer>
                <Heading
                    as={'h2'}
                    mt={'6'}
                    mb={'6'}
                    color={'amber'}
                    highContrast
                >
                    {'Bienvenue sur'.toUpperCase()}
                </Heading>
            </HeadingContainer>
            <Image
                src={'/poladex_logo-txt.svg'}
                alt={'Poladex logo'}
                width={360}
                height={360}
            />
            <TextContainer>
                <Text
                    color={'amber'}
                    highContrast
                >
                    {'L’application qui permet de garder un souvenir des bières les plus exotiques que l’on a pu boire ...'.toUpperCase()}
                </Text>
            </TextContainer>
            <HeadingContainer>
                <Heading
                    as={'h2'}
                    mt={'6'}
                    mb={'6'}
                    color={'amber'}
                    highContrast
                >
                    {`Dégustez les toutes !`.toUpperCase()}
                </Heading>
            </HeadingContainer>
            <ButtonContainer>
                {user ? (
                    <Button>
                        <Link href={'/poladex'}>
                            {'Accéder au Poladex'.toUpperCase()}
                        </Link>
                    </Button>
                ) : (
                    <LoginButton />
                )}
            </ButtonContainer>
        </Flex>
    )
}
