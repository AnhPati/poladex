'use client'

import * as NavigationMenu from "@radix-ui/react-navigation-menu"
import { Button, Heading } from "@radix-ui/themes"
import Link from "next/link"
import './navigation.css'
import { usePathname } from "next/navigation"

export const Navigation = () => {
    const pathname = usePathname()

    return (
        <NavigationMenu.Root orientation={'vertical'}>
            <NavigationMenu.List>
                <NavigationMenu.Item>
                    <NavigationMenu.Trigger
                        onPointerMove={(event) => event.preventDefault()}
                        onPointerLeave={(event) => event.preventDefault()}
                        className={'NavTrigger'}
                    >
                        <Button className={'NavButton'} mr={'2'} ml={'2'}>
                            {/*Burger Menu Icon :*/}
                            <svg width="30" height="19" viewBox="0 0 30 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect className={'first-bar'} width="30" height="5" rx="2.5" fill="#582D1D" />
                                <rect className={'second-bar'} y="7" width="30" height="5" rx="2.5" fill="#582D1D" />
                                <rect className={'third-bar'} y="14" width="30" height="5" rx="2.5" fill="#582D1D" />
                            </svg>
                            {/*Burger Menu Icon - End*/}
                        </Button>
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content
                        onPointerMove={(event) => event.preventDefault()}
                        onPointerLeave={(event) => event.preventDefault()}
                        className={'NavigationMenuContent'}
                    >
                        <NavigationMenu.List className={'NavigationMenuList'}>
                            <NavigationMenu.Item className={'NavigationMenuItem'}>
                                <NavigationMenu.Link>
                                    <Link href={pathname === '/poladex' ? '/' : '/poladex'}>
                                        <Heading
                                            as={'h2'}
                                            weight={'medium'}
                                        >
                                            {pathname === '/poladex' ? 'HOME' : 'POLADEX'}
                                        </Heading>
                                    </Link>
                                </NavigationMenu.Link>
                            </NavigationMenu.Item>
                        </NavigationMenu.List>
                    </NavigationMenu.Content>
                </NavigationMenu.Item>
            </NavigationMenu.List>
        </NavigationMenu.Root>
    )
}