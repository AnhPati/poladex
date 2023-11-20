import { UpdateIcon } from '@radix-ui/react-icons'
import styled from 'styled-components'

const SpinnerContainer = styled.div`
    svg {
        animation: rotation 1s infinite linear;
    }

    @keyframes rotation {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`

export const Loader = ({ size, className }: { size?: number, className?: string }) => {
    return (
        <SpinnerContainer>
            <UpdateIcon />
        </SpinnerContainer>
    )
}
