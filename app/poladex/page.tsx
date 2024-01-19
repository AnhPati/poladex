import { fetchBeers } from "@/APIservices/fetchLocalBeers"
import CardList from "@/components/CardList"
import getQueryClient from "@/APIservices/getQueryClient"
import { dehydrate } from "@tanstack/react-query"
import { Hydrate } from "../components/Hydrate"
import { getAuthSession } from "../lib/auth-options"
import { prisma } from "../lib/prisma"


const Poladex = async () => {
    const session = await getAuthSession()
    const userId = session?.user.id ? session.user.id : ''

    const queryClient = getQueryClient()
    const queryKey = ['beers']

    await queryClient.prefetchQuery({
        queryKey: queryKey,
        queryFn: fetchBeers,
    })

    const drinkerBeers = await prisma.beer.findMany({
        where: { drinkerId: userId }
    })

    const dehydratedState = dehydrate(queryClient, {
        shouldDehydrateQuery: () => true
    })

    return (
        <Hydrate state={dehydratedState}>
            <CardList user={session?.user} beers={drinkerBeers} />
        </Hydrate>
    )
}

export default Poladex