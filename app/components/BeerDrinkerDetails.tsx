import { Button, Flex, Heading, Text } from "@radix-ui/themes"
import styled from "styled-components"

const CardComment = styled.div`
    width: 100%;
    padding-right: 1.2rem;

    > p {
        display: inline-block;
        width: -moz-available;
        width: stretch;
        min-height: 180px;
        background: #FEFDFB;
        border: solid 1px #F3D673;
        border-radius: 5px;
        padding: 0.6em;
    }
`

const BeerDrinkerDetails = ({ userDetails }: { userDetails: { id: string, beerId: string, userId: string, date: Date, location: string, comments: string | null } }) => {
    const dateFormat = (date: Date) => {
        const day = date.getDate()
        const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre']
        const month = date.getMonth()
        const year = date.getFullYear()
        const newDate = `${day} ${months[month]} ${year}`

        return newDate
    }

    const date = dateFormat(userDetails.date)

    return (
        <Flex direction={'column'}>
            <Text as={'p'} size={'6'} mt={'5'} mb={'5'}>
                Tu as eu la chance de déguster cette bière le {date} à {userDetails.location}.
            </Text>
            <Heading as={'h3'} size={'6'} mb={'3'}>
                Ce que tu en as pensé :
            </Heading>
            <CardComment>
                <Text as={'p'}>

                </Text>
            </CardComment>
            <Button style={{ alignSelf: 'center' }} mt={'2'} size={'3'}>
                {'éditer'.toUpperCase()}
            </Button>
        </Flex>
    )
}

export default BeerDrinkerDetails