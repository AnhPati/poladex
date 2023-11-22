'use client'

import styled from "styled-components"
import { Box, Button, Card, Flex, Link, Heading, Text } from "@radix-ui/themes"
import { BeerCaract } from "./BeerCaract"

const CardContainer = styled.li`
    > div {
        background: var(--amber-a3);
        border-color:var(--amber-a6)!important; 
    }

    > div::after {
        box-shadow: none;
    }
`
const CardTitle = styled.div`
        max-width: 100%;
        text-align: center;
        h4 {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
    }
`

const ImageContainer = styled.div`
    overflow: hidden;
    background: #FFF;
    width: 200px;
    border-radius: 50%;
    height: 200px;
    position: relative;
`

const CardImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`

const CardDescription = styled.p`
    font-size: 0.8em;
    font-weight: 400;
    display: -webkit-box;
    height: 65px;
    overflow: hidden;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
`

interface Beer {
    id: string
    name: string
    img: string
    description: {
        ibu: string
        degree: string
        type: string
        ingredients: []
        brewery: string
        country: string
        text: string
    }
}

export const CardBeer = ({ id, name, image, description }: { id: string, name: string, image: string, description: Beer['description'] }) => {
    const srcImg = image === "" ? '/beers/poladex-logo.png' : image

    return (
        <CardContainer id={id}>
            <Card
                size={'2'}
                style={{ maxWidth: 350 }}
                variant={'surface'}
            >
                <Flex direction={'column'} align={'center'} p={'2'}>
                    <CardTitle>
                        <Heading
                            as={'h4'}
                            weight={'medium'}
                            mt={'4'}
                            mb={'5'}
                            ml={'5'}
                            mr={'5'}
                        >
                            {name}
                        </Heading>
                    </CardTitle>
                    <ImageContainer>
                        <CardImage src={srcImg} alt={name} />
                    </ImageContainer>
                    <BeerCaract ibu={description.ibu} degree={description.degree} type={description.type} />
                    <Box mt={'4'} mb={'2'}>
                        <Button size={'3'} asChild>
                            <Link href={`/beer/[${id}]`}>
                                <Text weight={'medium'}>
                                    {`+ d'infos`.toUpperCase()}
                                </Text>
                            </Link>
                        </Button>
                    </Box>
                </Flex>
            </Card>
        </CardContainer >
    )
}
//<CardDescription>{description}</CardDescription>