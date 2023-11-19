import { HamburgerMenuIcon } from "@radix-ui/react-icons"
import { Heading } from "@radix-ui/themes"
import Image from "next/image"
import Link from "next/link"
import styled from "styled-components"

const DropdownContainer = styled.div`
    position: absolute;
    width: 100%;
`

const DropdownNav = styled.ul`
    list-style-type: none;
    padding: 0;
    background: var(--amber-a10);
    color: var(--amber-a12);
    text-align: center;
`

const DropdownNavItem = styled.li`
    height: 60px;
    display: flex;
    align-items: center;

    > a {
        width: 100%;
        text-decoration: none;
        color: var(--amber-a12);

        &:hover {
            color: var(--amber-a11);
        }
    }
`

export const Navigation = () => {
    return (
        <nav>
            <button>
                <Image src={'/beers/hambuger-open.svg'} alt={'Poladex logo'} width={20} height={20} />
            </button>
            <DropdownContainer>
                <DropdownNav>
                    <DropdownNavItem>
                        <Link href={'/authentification'}>
                            <Heading as={'h2'} weight={'medium'}>
                                Authentification
                            </Heading>
                        </Link>
                    </DropdownNavItem>
                    <DropdownNavItem>
                        <Link href={'/poladex'}>
                            <Heading as={'h2'} weight={'medium'}>
                                Poladex
                            </Heading></Link>
                    </DropdownNavItem>
                </DropdownNav>
            </DropdownContainer>
        </nav>
    )
}