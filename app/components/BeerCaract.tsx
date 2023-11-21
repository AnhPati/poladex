import { Box, Flex, Separator, Text } from '@radix-ui/themes'
import Image from 'next/image'
import styled from 'styled-components'

const BeerCaractContainer = styled.div`
    width: 100%;
    margin: 1.4em 1.2em;
    
    img {
        margin-bottom: 0.275em;
    }

    .rt-Separator {
        margin-bottom: 0.375em;
    }
`

export const BeerCaract = ({ ibu, degree, type }: { ibu: string, degree: string, type: string }) => {
    return (
        <BeerCaractContainer>
            <Flex justify={'between'} align={'end'} mb={'3'}>
                <Image src={'/icons/beer-hop.svg'} alt={`IBU`} width={30} height={30} />
                <Box grow={'1'} pr={'3'} pl={'3'}>
                    <Separator size={'4'} color={'amber'} />
                </Box>
                <Box>
                    <Text as={'p'} weight={'medium'} size={'4'}>
                        {ibu} IBU
                    </Text>
                </Box>
            </Flex>
            <Flex justify={'between'} align={'end'} mb={'3'}>
                <Image src={'/icons/beer-degree.svg'} alt={`Degrés d'alcool`} width={30} height={30} />
                <Box grow={'1'} pr={'3'} pl={'3'}>
                    <Separator size={'4'} color={'amber'} />
                </Box>
                <Box>
                    <Text as={'p'} weight={'medium'} size={'4'}>
                        {degree} °
                    </Text>
                </Box>
            </Flex>
            <Flex justify={'between'} align={'end'}>
                <Image src={'/icons/beer-type.svg'} alt={`Type de bière`} width={30} height={30} />
                <Box grow={'1'} pr={'3'} pl={'3'}>
                    <Separator size={'4'} color={'amber'} />
                </Box>
                <Box>
                    <Text as={'p'} weight={'medium'} size={'4'}>
                        {type}
                    </Text>
                </Box>
            </Flex>
        </BeerCaractContainer>
    )
}
