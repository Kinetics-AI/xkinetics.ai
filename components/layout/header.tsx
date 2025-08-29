"use client"

import Link from "next/link"
import Image from 'next/image'

import { Button } from "@/components/ui/button";
import {
    Drawer,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Menudr } from "./menu";
import { Language } from "./international"

import { Languages, Menu } from "lucide-react"

import { FadeIn } from "@/components/animation/fade-in"



export function Header() {
    return (
        <header className="fixed mt-3 flex justify-between w-svw md:pr-2 z-10 select-none">



            {/* LOGO */}
            <FadeIn>
                <Button className="ml-3 bg-transparent hover:bg-background group">
                    <Link href="/" className="select-none">
                        <Image
                            src="/resources/logo/OpenDriveLab/D.png"
                            alt="Ascend AI"
                            width={6}
                            height={6}
                        />
                    </Link>
                </Button>
            </FadeIn>


            <div className="flex mr-3 gap-3">



                {/* Language */}
                <Drawer direction="right">
                    
                    <DrawerTrigger asChild>
                        <FadeIn>
                            <Button className="bg-transparent hover:bg-background hover:text-foreground">
                                <Languages/>
                            </Button>
                        </FadeIn>
                    </DrawerTrigger>

                    <Language/>
                
                </Drawer>



                {/* Menu */}
                <Drawer direction="right">

                    <DrawerTrigger asChild>
                        <FadeIn>
                            <Button className="bg-transparent hover:bg-background hover:text-foreground">
                                <Menu/>
                            </Button>
                        </FadeIn>
                    </DrawerTrigger>

                    <Menudr/>
                
                </Drawer>



            </div>



        </header>
    )
}
