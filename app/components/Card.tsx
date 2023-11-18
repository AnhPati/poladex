import styled from "styled-components"
import { CountButton } from "../utils/CountButton"
import { AddCartButton } from "../utils/AddCartButton"

const CardContainer = styled.li`
    width: 300px;
    height: auto;
    list-style: none;
    margin: 0.4em;
    padding: 0.8em;
    text-align: center;
    font-family: 'Josefin Sans', sans-serif;
    border: 1px lightgray solid;
    border-radius: 5px;
    box-shadow: 1px 1px lightgray;
`
const CardTitle = styled.h4`
    font-size: 1.2em;
    font-weight: 700;
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

export const Card = ({ id, name, image, description }) => {
    const srcImg = image === "" ? '/beers/poladex-logo.png' : image

    return (
        <CardContainer id={id}>
            <CardTitle>{name}</CardTitle>
            <ImageContainer>
                <CardImage src={srcImg} alt={name} />
            </ImageContainer>
            <CardDescription>{description}</CardDescription>
            <CardButtonsContainer>
                <button>Bouton</button>
            </CardButtonsContainer>
        </CardContainer>
    )
}