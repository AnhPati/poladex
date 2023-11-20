'use client'

import styled from "styled-components"
import { CardBeer } from "./Card"
import { useQuery } from "@tanstack/react-query"
import { fetchBeers } from "../APIservices/fetchBeers"
import { Grid } from "@radix-ui/themes"

const CardsContainer = styled.ul`
    padding: 20px;
    display: flex;
    justify-content: center;
`

const CardList = ({ userId }: { userId: number }) => {
    const queryKey = ['beers']
    const { data, isLoading, isError, error } = useQuery({
        queryKey: queryKey,
        queryFn: fetchBeers,
        refetchOnWindowFocus: false
    })

    return (
        <CardsContainer>
            {isLoading && `En cours de chargement...`}
            {isError && ` Une erreur est survenue : ${error}`}

            <Grid columns={'2'} gap={'4'}>
                {data && data.map((beer: { id: number, name: string; descript: string, img: string }) =>
                    beer.id < 20 &&
                    <CardBeer
                        key={beer.id}
                        id={beer.id}
                        name={beer.name}
                        description={beer.descript}
                        image={beer.img}
                    />
                )}
            </Grid>
        </CardsContainer>
    )
}

export default CardList

