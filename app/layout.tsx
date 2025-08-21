import * as React from "react"
import type { Metadata } from "next";


import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

import { HeroUIProvider } from '@heroui/react'


export const metadata: Metadata = {
    title: {
        default: "Kinetics.ai",
        template: "%s | kinetics.ai"
    },
    description: "xxx",
    keywords: ["Oxxx"],
    icons: {
        icon: [
            {
                url: "/favicon.png",
                href: "/favicon.png",
            },
        ],
    },
};


import "./globals.css";



// font
import { Inter } from "next/font/google";
const inter = Inter({
    subsets: ["latin"],
    display: "swap",
});



// Google Analystics
import { GoogleAnalytics } from '@next/third-parties/google'





export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={inter.className}>



            <body id="#">       
                <HeroUIProvider>



                    <Header/>



                    <main className='w-full overflow-hidden'>

                        {children}

                    </main>



                    <Footer/>


                </HeroUIProvider>
            </body>



            <GoogleAnalytics gaId="xx" />



        </html>
    );
}
