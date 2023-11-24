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

const Beer = ({ beer, user }: { beer: Beer }) => {
    console.log(user.beers)
    return (
        <div>
            <BeerDetails beer={beer} />
        </div>
    )
}

export default Beer