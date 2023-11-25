import { Prisma, PrismaClient } from "@prisma/client"
import { faker } from "@faker-js/faker"

const prisma = new PrismaClient()

const main = async () => {
    const beers = []

    for (let i = 0; i < 10; i++) {
        const randomBeerIndex = faker.number.int({
            min: 0,
            max: 19
        }).toString()

        const beer = {
            drinkerId: "clp5zrq4k0000r7bvbhpg37vy",
            localisation: faker.lorem.sentence(1)

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