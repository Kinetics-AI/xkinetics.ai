"use client"

import { useState, useEffect } from "react"
import { HeroButton } from "@/components/custom-heroui/button"
import { ChevronUp } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function BackToTop() {
  const [show, setShow] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      // 如果向下滚动，隐藏按钮；静止或向上滚动时显示
      setShow(currentScrollY < lastScrollY || currentScrollY === 0)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <HeroButton onClick={scrollToTop}>
            <ChevronUp className="h-5 w-5" />
          </HeroButton>
        </motion.div>
      )}
    </AnimatePresence>
  )
}