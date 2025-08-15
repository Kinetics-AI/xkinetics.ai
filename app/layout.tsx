import * as React from "react"


import { SidebarProvider } from "@/components/ui/sidebar"
import { Header } from "@/components/header"


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
