import { HamburgerMenuIcon } from "@radix-ui/react-icons"
import * as NavigationMenu from "@radix-ui/react-navigation-menu"
import { Button, Heading } from "@radix-ui/themes"
import Image from "next/image"
import Link from "next/link"
import './navigation.css'

export const Navigation = () => {
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
                                    <Link href='/authentification'>
                                        <Heading
                                            as={'h2'}
                                            weight={'medium'}
                                        >
                                            AUTHENTIFICATION
                                        </Heading>
                                    </Link>
                                </NavigationMenu.Link>
                            </NavigationMenu.Item>
                            <NavigationMenu.Item className={'NavigationMenuItem'}>
                                <NavigationMenu.Link>
                                    <Link href='/poladex'>
                                        <Heading
                                            as={'h2'}
                                            weight={'medium'}
                                        >
                                            POLADEX
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