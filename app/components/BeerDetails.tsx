'use client'
import { Card } from "@radix-ui/themes"
import { BeerCaract } from "./BeerCaract"

export const BeerDetails = ({ beerId }: { beerId: string }) => {
    return (
        <div>
            {`${beerId}`}
            <Card>
                <BeerCaract />
            </Card>
        </div>
    )
}
