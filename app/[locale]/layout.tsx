import * as React from "react"
import type { Metadata } from "next";

import "../globals.css";

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { BackToTop } from "@/components/layout/top"

import {notFound} from 'next/navigation';
import {Locale, hasLocale, NextIntlClientProvider} from 'next-intl';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import {clsx} from 'clsx';
import {routing} from '@/i18n/routing';





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





// font
import { Inter } from "next/font/google";
const inter = Inter({
    subsets: ["latin"],
    display: "swap",
});



// Google Analystics
import { GoogleAnalytics } from '@next/third-parties/google'



export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({
    children,
    params
}: LayoutProps<'/[locale]'>) {
    // Ensure that the incoming `locale` is valid
    const {locale} = params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    // Enable static rendering
    setRequestLocale(locale);


    return (
        <html lang={locale} className={inter.className}>
            <body>       
                <NextIntlClientProvider>

                    <Header/>

                    <main className='w-full overflow-hidden'>

                        {children}

                    </main>

                    <Footer/>

                    <BackToTop/>
                    
                </NextIntlClientProvider>
            </body>
            <GoogleAnalytics gaId="xx" />
        </html>
    );
}
