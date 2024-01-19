'use client'

import styled from "styled-components"
import { Box, Button, Card, Flex, Link, Heading, Text } from "@radix-ui/themes"
import { BeerCaract } from "./BeerCaract"

const CardContainer = styled.li`
    > div {
        position: relative;
        background: var(--amber-a3);
        border-color:var(--amber-a6)!important; 
    }

    > div::after {
        box-shadow: none;
    }

    .not-drinked {
        .unavailable {position: absolute;
            top: 0;
            bottom: 0;
            background: rgba(254, 253, 251, 0.8);
            z-index: 1;
            left: 0;
            right: 0;
            border-radius: 8px;
            border: 1px solid var(--amber-a6) !important;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .rt-Button {
            position: relative;
            z-index: 2;
        }
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
    id: string;
    name: string;  // Mettez à jour ici
    img: string | null;
    description: null | string | {
        ibu: string | null;
        degree: string | null;
        type: string | null;
        ingredients: Array<string> | [] | null;
        brewery: string | null;
        country: string | null;
        text: string | null;
    };
}

export const CardBeer = ({ id, name, image, description, handleBeerDetails, isDrinked }: { id: string, name: string, image: Beer['img'], description: Beer['description'], handleBeerDetails: any, isDrinked: boolean | undefined }) => {
    const srcImg = image === "" ? '/beers/poladex-logo.png' : image

    return (
        <CardContainer id={id}>
            <Card
                className={isDrinked ? '' : 'not-drinked'}
                size={'2'}
                style={{ maxWidth: 350 }}
                variant={'surface'}
            >
                {!isDrinked && (
                    <Box className={'unavailable'}>
                        <Button size={'3'} asChild onClick={handleBeerDetails} id={id}>
                            <Text weight={'medium'}>
                                {`Boire cette bière`.toUpperCase()}
                            </Text>
                        </Button>
                    </Box>
                )}
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
                            {name.toUpperCase()}
                        </Heading>
                    </CardTitle>
                    <ImageContainer>
                        <CardImage src={srcImg ? srcImg : ''} alt={name} />
                    </ImageContainer>
                    <BeerCaract ibu={description && typeof description !== 'string' ? description.ibu : ''} degree={description && typeof description !== 'string' ? description.degree : ''} type={description && typeof description !== 'string' ? description.type : ''} />
                    <Box mt={'4'} mb={'2'}>
                        <Button size={'3'} asChild onClick={handleBeerDetails} id={id}>
                            <Text weight={'medium'}>
                                {`+ d'infos`.toUpperCase()}
                            </Text>
                        </Button>
                    </Box>
                </Flex>
            </Card>
        </CardContainer >
    )
}
//<CardDescription>{description}</CardDescription>