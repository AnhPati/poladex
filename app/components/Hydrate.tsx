'use client'

import { HydrationBoundary } from '@tanstack/react-query'

export const Hydrate: React.FC<HydrateProps> = (props) => {
    return (
        <HydrationBoundary {...props} />
    )
}

import React from 'react';

interface HydrateProps {

}