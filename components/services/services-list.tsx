"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const services = [
  {
    title: "Land Transport",
    description: "Efficient and reliable road freight solutions across the country",
    image: "/images/land-transport.jpg",
  },
  {
    title: "Ocean Freight",
    description: "Global shipping solutions for your international cargo needs",
    image: "/images/ocean-freight.jpg",
  },
  {
    title: "Custom Clearance",
    description: "Expert handling of customs documentation and procedures",
    image: "/images/custom-clearance.jpg",
  },
  {
    title: "Shared Container",
    description: "Cost-effective solutions for smaller shipments",
    image: "/images/shared-container.jpg",
  },
]

export default function ServicesList() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Comprehensive Logistics Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            From local deliveries to international shipping, we offer a complete range of logistics services
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-[300px]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="relative p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 