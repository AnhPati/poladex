'use client'

import styled from "styled-components"
import { CardBeer } from "./CardBeer"
import { useQuery } from "@tanstack/react-query"
import { fetchBeers } from "../APIservices/fetchBeers"
import { Grid } from "@radix-ui/themes"
import { useState } from "react"
import Beer from "./Beer"

const CardsContainer = styled.ul`
    padding: 20px;
    display: flex;
    justify-content: center;
`

interface BeerProps {
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

interface UserBeers {
    id: string
    drinkerId: string
    beerId: string
    date: Date
    location: string
    content: string | null
}

const CardList = ({ user, beers }: { user: ({ name?: string | null | undefined; email?: string | null | undefined; image?: string | null | undefined; } & { id?: string | undefined; beers: []; }) | undefined, beers: { id: string; drinkerId: string; beerId: string; date: Date; location: string; content: string | null; }[] }) => {
    const [viewDetails, setViewDetails] = useState(false)
    const [beerDetails, setBeerDetails] = useState<BeerProps>({
        id: "",
        name: "",
        img: "",
        description: {
            ibu: "",
            degree: "",
            type: "",
            ingredients: [],
            brewery: "",
            country: "",
            text: ""
        }
    })
    const [drinkerDetails, setDrinkerDetails] = useState<UserBeers>({
        id: "",
        drinkerId: "",
        beerId: "",
        date: new Date(),
        location: "",
        content: ""
    })

    const queryKey = ['beers']
    const { data, isLoading, isError, error } = useQuery({
        queryKey: queryKey,
        queryFn: fetchBeers,
        refetchOnWindowFocus: false
    })


    const handleBeerDetails = (e: Event) => {
        const target = e.currentTarget as HTMLButtonElement
        const id = target?.id
        const beerSelected = data[id]
        const beerDrinked: UserBeers = beers[beers.findIndex(beer => beer.id === id)]

        setDrinkerDetails(beerDrinked)
        setViewDetails(true)
        setBeerDetails(beerSelected)
    }

    const beersDrinkedIds = beers?.map(beer => beer.beerId)

    return (
        <>
            {!viewDetails ? (
                <CardsContainer>
                    {isLoading && `En cours de chargement...`}
                    {isError && ` Une erreur est survenue : ${error}`}

                    <Grid columns={'2'} gap={'4'}>
                        {data && data.map((beer: BeerProps) =>
                            Number(beer.id) < 20 &&
                            <CardBeer
                                key={beer.id}
                                id={beer.id}
                                isDrinked={beersDrinkedIds?.includes(beer.id)}
                                name={beer.name}
                                description={beer.description}
                                image={beer.img}
                                handleBeerDetails={handleBeerDetails}
                            />
                        )}
                    </Grid>
                </CardsContainer>
            ) : (
                <Beer beer={beerDetails} userBeerDetails={drinkerDetails} userId={user?.id} />
            )}
        </>
    )
}

export default CardList

