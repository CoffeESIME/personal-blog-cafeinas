"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface TechItemProps {
  name: string;
  icon: string;
  color: string;
}

export function TechItem({ name, icon, color }: TechItemProps) {
  return (
    <motion.div
      className="flex flex-col items-center justify-center p-4 bg-slate-800 rounded-lg cursor-pointer relative overflow-hidden group"
      whileHover={{
        scale: 1.05,
        boxShadow: `0 0 15px ${color}40`,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 10,
      }}
    >
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-10"
        style={{ backgroundColor: color }}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.15 }}
        transition={{ duration: 0.3 }}
      />

      <motion.div
        className="relative z-10 mb-3"
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <Image
          src={icon}
          alt={`${name} icon`}
          width={48}
          height={48}
          className="object-contain"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "/icons/default.svg";
          }}
        />
      </motion.div>

      <motion.span
        className="text-sm font-medium text-center text-slate-200"
        whileHover={{ scale: 1.1, color }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        {name}
      </motion.span>
    </motion.div>
  );
}
