"use client"



import Link from "next/link"
import Image from 'next/image'



import { HeroButton } from "@/components/custom-heroui/button";

import { Menu } from "./menu";
import { Language } from "./international"
import {
    Drawer,
    DrawerTrigger,
} from "@/components/ui/drawer"


export function Header() {

    return (
        <header className="fixed flex justify-between w-svw bg-amber-700 pr-2">


            {/* LOGO */}
            <HeroButton className="bg-background text-foreground hover:bg-white group">
                <Link href="/" className="select-none">
                    <Image
                        src="/resources/logo/OpenDriveLab/D.png"
                        alt="OpenDriveLab"
                        width={24}
                        height={24}
                        className="group-hover:scale-125 transition delay-100 duration-200"
                    />
                </Link>
            </HeroButton>




            <div className="flex mr-6 gap-6">



                {/* Language */}
                <Drawer direction="right">
                    
                    <DrawerTrigger asChild>
                        <HeroButton>Language</HeroButton>
                    </DrawerTrigger>

                    <Language/>
                
                </Drawer>



                {/* Menu */}
                <Drawer direction="right">

                    <DrawerTrigger asChild>
                        <HeroButton>Menu</HeroButton>
                    </DrawerTrigger>

                    <Menu/>
                
                </Drawer>



            </div>



        </header>
    )
}
