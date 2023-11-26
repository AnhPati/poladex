import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/prisma/client";

const addDrinkerDetailsSchema = z.object({
    drinkerId: z.string().min(1),
    beerId: z.string().min(1),
    location: z.string().min(1).max(255),
    content: z.string().min(0)
})

export const POST = async (request: NextRequest) => {
    const body = await request.json()
    const validation = addDrinkerDetailsSchema.safeParse(body)

    if (!validation.success) {
        return NextResponse.json(validation.error.errors, { status: 400 })
    }

    const newDrinkedBeer = await prisma.beer.create({
        data: {
            drinkerId: body.drinkerId,
            beerId: body.beerId,
            location: body.location,
            content: body.content
        }
    })

    return NextResponse.json(newDrinkedBeer, { status: 201 })
}
