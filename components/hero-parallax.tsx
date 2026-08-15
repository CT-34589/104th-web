"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion"

export default function HeroParallax({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"])

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.div className="absolute inset-0" style={prefersReducedMotion ? undefined : { y }}>
        <Image src={src} alt={alt} fill priority className="scale-110 object-cover object-center" />
      </motion.div>
    </div>
  )
}
