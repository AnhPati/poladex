import { fetchBeers } from "@/APIservices/fetchBeers"
import CardList from "@/components/CardList"
import getQueryClient from "@/APIservices/getQueryClient"
import { dehydrate } from "@tanstack/react-query"
import { Hydrate } from "../components/Hydrate"
import { getAuthSession } from "../lib/auth-options"


const Poladex = async () => {
    const session = await getAuthSession()

    const queryClient = getQueryClient()
    const queryKey = ['beers']

    await queryClient.prefetchQuery({
        queryKey: queryKey,
        queryFn: fetchBeers,
    })

    const dehydratedState = dehydrate(queryClient, {
        shouldDehydrateQuery: () => true
    })

    return (
        <Hydrate state={dehydratedState}>
            <CardList userId={session?.user?.id} />
        </Hydrate>
    )
}

export default Poladex