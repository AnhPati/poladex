import { useQuery } from "@tanstack/react-query"
import { fetchBeers } from "../APIservices/fetchBeers"
import CardList from "./poladex/CardList"

const Poladex = () => {
    const queryKey = ['beers']
    const { data, isLoading, isError, error } = useQuery({
        queryKey: queryKey,
        queryFn: fetchBeers,
        refetchOnWindowFocus: false
    })

    return (
        <div>Poladex
            <CardList beers={data} isLoading={isLoading} isError={isError} error={error} />
        </div>
    )
}

export default Poladex