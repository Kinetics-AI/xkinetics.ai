"use client"

import Link from "next/link"
import Image from 'next/image'




import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button, Drawer, DrawerContent, DrawerHeader, DrawerBody, DrawerFooter } from "@heroui/react";
import { Menu, X } from "lucide-react";

export function Header() {

    const [open, setOpen] = useState(false);

    return (
        <header className="fixed flex flex-row gap-3 p-6 z-20 flex-wrap w-full justify-between">

                <Button className="bg-background text-foreground hover:bg-white group">
                    <Link href="/" className="select-none">
                        <Image
                            src="/resources/logo/OpenDriveLab/D.png"
                            alt="OpenDriveLab"
                            width={24}
                            height={24}
                            className="group-hover:scale-125 transition delay-100 duration-200"
                        />
                    </Link>
                </Button>

                
      <Button
        isIconOnly
        className="fixed top-4 right-4 z-50 shadow-lg"
        onPress={() => setOpen(!open)}
      >
        <motion.div
          initial={false}
          animate={{ rotate: open ? 180 : 0, scale: open ? 1.2 : 1 }}
          transition={{ duration: 0.3 }}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </motion.div>
      </Button>



      <Drawer isOpen={open} onClose={() => setOpen(false)} placement="right">
        <DrawerContent>
          <DrawerHeader className="font-bold">菜单</DrawerHeader>
          <DrawerBody>
            <ul className="space-y-4">
              <li><a href="/" className="hover:underline">首页</a></li>
              <li><a href="/about" className="hover:underline">关于我们</a></li>
              <li><a href="/contact" className="hover:underline">联系我们</a></li>
            </ul>
          </DrawerBody>
          <DrawerFooter>
            <Button color="danger" variant="light" onClick={() => setOpen(false)}>
              关闭
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>



        </header>
    )
}
