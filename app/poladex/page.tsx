import { fetchBeers } from "@/APIservices/fetchBeers"
import CardList from "@/components/CardList"
import getQueryClient from "@/APIservices/getQueryClient"
import { dehydrate } from "@tanstack/react-query"
import { Hydrate } from "../components/Hydrate"
import { getAuthSession } from "../lib/auth-options"
import { prisma } from "../lib/prisma"


const Poladex = async () => {
    const session = await getAuthSession()

    const queryClient = getQueryClient()
    const queryKey = ['beers']

    await queryClient.prefetchQuery({
        queryKey: queryKey,
        queryFn: fetchBeers,
    })

    const drinkedBeers = await prisma.beer.findMany({
        select: {
            id: true,
            drinkerId: true
        }
    })

    const dehydratedState = dehydrate(queryClient, {
        shouldDehydrateQuery: () => true
    })

    return (
        <Hydrate state={dehydratedState}>
            <CardList user={session?.user} drinked={drinkedBeers} />
        </Hydrate>
    )
}

export default Poladex