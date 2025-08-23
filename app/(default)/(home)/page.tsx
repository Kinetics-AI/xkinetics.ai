import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "p",
    description: "OpenDriveLab is committed to exploring cutting-edge embodied AI technology, launching a series of benchmarking work, open source to serve the community, and promote the common development of the industry. Friends who are committed to making influential research are welcome to join!",
    keywords: ["OpenDriveLab", "Robotics", "Embodied AI", "Autonomous Driving", "HKU", "SII"],
};



import Image from 'next/image'
import Link from "next/link"

import { AspectRatio } from "@/components/ui/aspect-ratio"


export default function Home() {

    return (
        <div className="w-full">




            <div className="w-full px-6 flex justify-center mt-36">
                <div className="w-full max-w-7xl flex">
                    <div className="w-full flex justify-between items-center">
                        <h2 className="text-t1"> 
                            <Link href="#news" className="text-t1" id="news">
                                News

                            </Link>
                        </h2>
                    </div>
                </div>
            </div>





        </div>
    )
}
