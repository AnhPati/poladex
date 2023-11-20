'use client'

import { Button, DropdownMenu } from "@radix-ui/themes"
import { DropdownMenuItemLogout } from "./LougoutButton"

export const UserProfile = ({ userName }: { userName?: string | null }) => {

    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger>
                <Button asChild>
                    <button aria-label="Profile options">{userName}</button>
                </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
                <DropdownMenuItemLogout />
            </DropdownMenu.Content>

        </DropdownMenu.Root>
    )
}
