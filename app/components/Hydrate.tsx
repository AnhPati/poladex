'use client'

import { HydrationBoundary } from '@tanstack/react-query'

export const Hydrate = (props: any) => {
    return (
        <HydrationBoundary {...props} />
    )
}
