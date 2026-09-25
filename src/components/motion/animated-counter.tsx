import { animate, motion, useInView, useMotionValue, useReducedMotion, useTransform } from "motion/react"
import { useEffect, useRef } from "react"

interface AnimatedCounterProps {
  readonly value: number
}

export function AnimatedCounter({ value }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" })
  const shouldReduceMotion = useReducedMotion()
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))

  useEffect(() => {
    if (!isInView) {
      return undefined
    }
    if (shouldReduceMotion === true) {
      count.set(value)
      return undefined
    }
    const controls = animate(count, value, { duration: 1.2, ease: "easeOut" })
    return () => {
      controls.stop()
    }
  }, [isInView, shouldReduceMotion, count, value])

  return (
    <span ref={ref}>
      <motion.span aria-hidden="true">{rounded}</motion.span>
      <span className="sr-only">{value}</span>
    </span>
  )
}