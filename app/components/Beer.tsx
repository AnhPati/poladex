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

const Beer = ({ beer, userBeers }: { beer: Beer, userBeers: {} }) => {
    return (
        <div>
            <BeerDetails beer={beer} userBeers={userBeers} />
        </div>
    )
}

export default Beer