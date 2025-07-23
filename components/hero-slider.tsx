"use client"

import { motion } from "framer-motion"
import { ImagesSlider } from "@/components/ui/images-slider"

export default function HeroSlider() {
  const images = [
    "/hero/h1.jpg",
    "/hero/h2.jpg",
    "/hero/h3.jpg",
  ]

  return (
    <ImagesSlider className="h-[40rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4 font-serif">
          Discover Your Style <br /> with JUI & Co
        </motion.p>
        <button className="px-4 py-2 backdrop-blur-sm border bg-moss-green/20 border-moss-green/30 text-white mx-auto text-center rounded-full relative mt-4 hover:bg-moss-green/30 transition-all duration-300">
          <span>Shop Now →</span>
          <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-moss-green to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  )
}
