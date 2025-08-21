

import Link from "next/link"
import Image from 'next/image'
import { AspectRatio } from "@/components/ui/aspect-ratio"



const links: {
    icon: string;
    url: string;
}[] = [
    {
        icon: 'email',
        url: 'mailto:contact@opendrivelab.com',
    },
    {
        icon: 'github',
        url: 'https://github.com/OpenDriveLab',
    },
    {
        icon: 'huggingface',
        url: 'https://huggingface.co/OpenDriveLab',
    },
    {
        icon: 'x',
        url: 'https://twitter.com/OpenDriveLab',
    },
    {
        icon: 'bluesky',
        url: 'https://bsky.app/profile/opendrivelab.bsky.social',
    },
    {
        icon: 'linkedin',
        url: 'https://www.linkedin.com/company/opendrivelab/',
    },
    {
        icon: 'zhihu',
        url: 'https://www.zhihu.com/people/PerceptionX',
    },
    {
        icon: 'xiaohongshu',
        url: 'https://www.xiaohongshu.com/user/profile/67467f16000000001c0182ba',
    },
    {
        icon: 'youtube',
        url: 'https://www.youtube.com/@OpenDriveLab',
    },
    {
        icon: 'bilibili',
        url: 'https://space.bilibili.com/503310953',
    },
    {
        icon: 'discord',
        url: 'https://discord.gg/vCw2PjR2B8',
    },
];




export function Footer() {
    return (
        <footer className="w-full px-6 my-24 gap-6 flex flex-col items-center select-none">


            <div className="fixed right-0 bottom-0 m-6 z-20">
                <Link href="#" className="bg-background text-foreground hover:bg-o-blue hover:text-background rounded-full flex justify-center items-center p-2 select-none">
                    <span>
                        <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
                        </svg>
                    </span>
                </Link>
            </div>

            

            <div className="w-full max-w-7xl flex gap-6 flex-wrap">
                {links.map((link) => (
                    <Link href={link.url} target="_blank" key={link.icon} className="size-4 md:size-5 group">
                        <AspectRatio ratio={1/1}>
                            <Image
                                src={"/resources/icon/" + link.icon + ".svg"}
                                alt={link.icon}
                                fill
                                className="group-hover:scale-125 transition delay-100 duration-200"
                            />
                        </AspectRatio>
                    </Link>
                ))}

            </div>


            <div className="w-full max-w-7xl text-xs">
                OpenDriveLab © 2021 - 2025
            </div>

        </footer>
    )
}
