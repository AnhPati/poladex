'use client'

import { useState } from 'react'
import styled from "styled-components"
import { Box, Button, Card, Flex, Link, Heading, Text } from "@radix-ui/themes"
import { BeerCaract } from "./BeerCaract"
import BeerDrinkerDetails from './BeerDrinkerDetails'

const CardContainer = styled.li`
    display: flex;
    flex-direction: column;
    padding: 1.6em;

    > div {
        background: var(--amber-a3);
        border-color:var(--amber-a6)!important; 
    }

    > div::after {
        box-shadow: none;
    }

    > .rt-Text {
        align-self: end;
        color: #4F3422;
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

const CardDescription = styled.div`
    > p {
        display: inline-block;
        background: #FEFDFB;
        border: solid 1px #F3D673;
        border-radius: 5px;
        padding: 0.6em;
    }
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

export const BeerDetails = ({ beer, userBeerDetails, addBeer }: { beer: Beer, userBeerDetails: {}, addBeer: any }) => {
    const [viewDrinkerDetails, setViewDrinkerDetails] = useState(false)
    const [editMode, setEditMode] = useState(false)

    const srcImg = beer.img === "" ? '/beers/poladex-logo.png' : beer.img

    const handleDrinkerDetails = () => {
        setViewDrinkerDetails(!viewDrinkerDetails)
    }

    const handleEditMode = () => {
        setEditMode(!editMode)
    }
    console.log(userBeerDetails)
    const isDrinked = userBeerDetails ? true : false

    return (
        <CardContainer id={beer.id}>
            <Card
                size={'2'}
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
                            {beer.name.toUpperCase()}
                        </Heading>
                    </CardTitle>
                    <ImageContainer>
                        <CardImage src={srcImg} alt={beer.name} />
                    </ImageContainer>
                    {viewDrinkerDetails && isDrinked ? (
                        <>
                            <BeerDrinkerDetails userDetails={userBeerDetails} handleEditMode={handleEditMode} editMode={editMode} addBeer={addBeer} />
                        </>
                    ) : (
                        <>
                            <BeerCaract ibu={beer.description.ibu} degree={beer.description.degree} type={beer.description.type} />
                            <CardDescription>
                                <Text weight={'regular'} color={'amber'} as={'p'}>
                                    {beer.description.text}
                                </Text>
                            </CardDescription>
                        </>
                    )
                    }
                    {!editMode && (
                        <Box mt={'4'} mb={'2'}>
                            <Button size={'3'} asChild onClick={isDrinked ? handleDrinkerDetails : handleEditMode}>
                                <Text weight={'medium'}>
                                    {isDrinked ? `Infos de dégustation`.toUpperCase() : `éditer`.toUpperCase()}
                                </Text>
                            </Button>
                        </Box>
                    )}
                </Flex>
            </Card>
            <Button size={'3'} asChild mt={'3'}>
                <Link href={'/poladex'}>
                    <Text weight={'medium'}>
                        {`Retour`.toUpperCase()}
                    </Text>
                </Link>
            </Button>
        </CardContainer >
    )
}