'use client'

import { Box, Flex, Heading } from "@radix-ui/themes"
import styled from "styled-components"
import { Navigation } from "./navigation/Navigation"
import Image from "next/image"

const HeaderContainer = styled.header`
    position: relative;
    width: 100%;
    height: 60px;
    background: var(--amber-a10);
    color: var(--amber-a12);

    > div {
        height: 100%;
    }
    
    svg {
        color: var(--amber-a12);
    }
`
export const Header = () => {
    return (
        <HeaderContainer>
            <Flex
                align={'center'}
                justify={'between'}
                pl={'4'}
                pr={'4'}
            >
                <Box>
                    <Navigation />
                </Box>
                <Box>
                    <Heading as={'h2'}>
                        POLADEX
                    </Heading>
                </Box>
                <Box>
                    <Image src={'/beers/poladex-logo.svg'} alt={'Poladex logo'} width={40} height={40} />
                </Box>
            </Flex>
        </HeaderContainer>
    )
}