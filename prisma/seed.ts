import { Prisma, PrismaClient } from "@prisma/client"
import { faker } from "@faker-js/faker"

const prisma = new PrismaClient()

const main = async () => {
    const beers = []

    for (let i = 0; i < 10; i++) {
        const beerIndex = i.toString()

        const beer = {
            beerId: beerIndex,
            drinkerId: "clp5zrq4k0000r7bvbhpg37vy",
            location: faker.location.city()

        } satisfies Prisma.BeerUncheckedCreateInput

        const b = await prisma.beer.create({ data: beer })
        beers.push(b)
    }
}

main().then(async () => {
    await prisma.$disconnect()
}).catch(async error => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
})