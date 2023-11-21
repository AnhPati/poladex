'use client'

import styled from "styled-components"
import { Card, Heading } from "@radix-ui/themes"

const CardContainer = styled.li`
    list-style: none;
    text-align: center;
    font-family: 'Josefin Sans', sans-serif;
    > div {
        box-shadow: 1px 1px lightgray;
    }
`
const CardTitle = styled.div`
        text-align: center;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
`

const ImageContainer = styled.div`
    max-width: 100%;
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

const CardButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
`

interface Description {
    ibu: string
    degree: string
    type: string
    ingredients: []
    brewery: string
    country: string
    text: string
}

export const CardBeer = ({ id, name, image, description }: { id: number, name: string, image: string, description: Description }) => {
    const srcImg = image === "" ? '/beers/poladex-logo.png' : image

    return (
        <CardContainer id={`${id}`}>
            <Card
                size={'2'}
                style={{ maxWidth: 350 }}
                variant={'surface'}
            >
                <CardTitle>
                    <Heading
                        as={'h4'}
                        weight={'medium'}
                        mt={'4'}
                        mb={'5'}
                    >
                        {name}
                    </Heading>
                </CardTitle>
                <ImageContainer>
                    <CardImage src={srcImg} alt={name} />
                </ImageContainer>
                <div>
                    <div>
                        {description.ibu} IBU
                    </div>
                    <div>
                        {description.degree} °
                    </div>
                    <div>
                        {description.type}
                    </div>
                </div>
                <CardButtonsContainer>
                    <button>Bouton</button>
                </CardButtonsContainer>
            </Card>
        </CardContainer>
    )
}
//<CardDescription>{description}</CardDescription>