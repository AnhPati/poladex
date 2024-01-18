import { prisma } from "../lib/prisma"
import { BeerDetails } from "./BeerDetails"

interface Beer {
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
interface UserBeerDetails {
    id: string
    drinkerId: string
    beerId: string
    date: Date
    location: string
    content: string | null
}

const Beer = ({ beer, userBeerDetails, userId }: { beer: Beer, userBeerDetails: UserBeerDetails, userId: string | null | undefined }) => {
    const addBeer = async (drinkerData: any) => {
        await prisma.beer.create({
            data: {
                beerId: drinkerData.beerId,
                drinkerId: drinkerData.drinkerId,
                location: drinkerData.location,
                content: drinkerData.content
            }
        })
    }

    return (
        <div>
            <BeerDetails beer={beer} userBeerDetails={userBeerDetails} addBeer={addBeer} userId={userId} />
        </div>
    )
}

export default Beer