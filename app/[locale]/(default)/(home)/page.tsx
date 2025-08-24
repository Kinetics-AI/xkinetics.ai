import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "p",
    description: "OpenDriveLab is committed to exploring cutting-edge embodied AI technology, launching a series of benchmarking work, open source to serve the community, and promote the common development of the industry. Friends who are committed to making influential research are welcome to join!",
    keywords: ["OpenDriveLab", "Robotics", "Embodied AI", "Autonomous Driving", "HKU", "SII"],
};
import {setRequestLocale} from 'next-intl/server';
import {useTranslations} from 'next-intl';

import Image from 'next/image'
import Link from "next/link"
import { Button } from "@/components/ui/button"

import { AspectRatio } from "@/components/ui/aspect-ratio"


export default function Home({ params }: { params: Promise<{ cat: string }> }) {

    const { locale } = params;
    
    // Enable static rendering
    setRequestLocale(locale);
    
    // Once the request locale is set, you
    // can call hooks from `next-intl`
    const t = useTranslations('Home');


    return (
        <div className="w-full">




            <div className="w-full px-6 flex justify-center mt-36">
                <div className="w-full max-w-7xl flex">
                    <div className="w-full flex justify-between items-center">
                        <h2 className="text-t1"> 
                            <Link href="#news" className="text-t1 link link-animated" id="news">
                                {t('title')}

                            </Link>

                        </h2>


                    </div>
                </div>
            </div>





        </div>
    )
}
