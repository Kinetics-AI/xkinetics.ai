import * as React from "react"
import type { Metadata } from "next";


import { SidebarProvider } from "@/components/ui/sidebar"
import { Header } from "@/components/header"


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
                url: "/favicon.ico",
                href: "/favicon.ico",
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
                <SidebarProvider>



                    <Header/>



                    {children}



                </SidebarProvider>
            </body>



            <GoogleAnalytics gaId="xx" />



        </html>
    );
}
