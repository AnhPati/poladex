import styled from "styled-components"
import { Card } from "./Card"

const CardsContainer = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const CardList = ({ beers, isLoading, isError, error }) => {

    return (
        <div>
            {isLoading && `En cours de chargement...`}
            {isError && ` Une erreur est survenue : ${error}`}

            <CardsContainer>
                <img src="" alt="" />
                {beers && beers.map(beer =>
                    beer.id < 20 &&
                    <Card
                        key={beer.id}
                        id={beer.id}
                        name={beer.name}
                        description={beer.descript}
                        image={beer.img}
                    />
                )}
            </CardsContainer>
        </div>
    )
}

export default CardList