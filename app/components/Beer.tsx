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

const Beer = ({ beer, userBeerDetails }: { beer: Beer, userBeerDetails: {} }) => {
    return (
        <div>
            <BeerDetails beer={beer} userBeerDetails={userBeerDetails} />
        </div>
    )
}

export default Beer