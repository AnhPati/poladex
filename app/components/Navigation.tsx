import { HamburgerMenuIcon } from "@radix-ui/react-icons"
import Link from "next/link"

export const Navigation = () => {
    return (
        <nav>
            <button>
                <HamburgerMenuIcon />
            </button>
            <div>
                <ul>
                    <li>
                        <Link href='/authentification'>Authentification</Link>
                    </li>
                    <li>
                        <Link href={'/poladex'}>Poladex</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}