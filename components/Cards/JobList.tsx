
'use client'

import { useRef, useState } from 'react'
import { resume } from '@/data/resume'
import { motion } from 'framer-motion'

import { JobItem } from '@/components/Cards/JobItem'

export default function JobsList() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const handleScroll = (e :any) => {
    setScrollPosition(e.target.scrollTop)
  }
  const heightItem = 64

  const containerref = useRef(null)
  return (
    <motion.div className="relative w-full overflow-y-scroll">
      <section
        className="relative flex w-full flex-col items-center gap-4 px-2 md:gap-2"
        onScroll={handleScroll}
        ref={containerref}
      >
        {resume.map((role, roleIndex) => (
          <JobItem
            key={roleIndex}
            role={role}
            scrollPosition={scrollPosition}
            heightItem={heightItem}
            roleIndex={1}
          />
        ))}
      </section>
    </motion.div>
  )
}
