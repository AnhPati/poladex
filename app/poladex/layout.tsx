import { ReactNode } from 'react'

export default function PoladexLayout({
    children,
}: {
    children: ReactNode
}) {
    return (
        <div>
            {children}
        </div>
    )
}
