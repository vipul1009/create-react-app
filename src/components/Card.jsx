import React from "react"
import { motion } from "framer-motion"
import { ArrowRightCircle } from "lucide-react"

export default function InfoCard({ title, points, buttonText, buttonLink }) {
  return (
    <motion.div
      className="border rounded-md shadow-md p-6 bg-white flex flex-col justify-between h-full"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <ArrowRightCircle className="text-blue-500" size={24} />
          {title}
        </h3>
        <ul className="text-gray-700 space-y-2 list-disc list-inside pl-2">
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>

      {/* <a
        href={buttonLink}
        className="mt-6 inline-block w-fit px-4 py-2 bg-blue-400 text-white font-semibold rounded hover:bg-blue-500 transition"
      >
        {buttonText}
      </a> */}
    </motion.div>
  )
}
