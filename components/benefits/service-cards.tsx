"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Anchor, Truck, Headset, FileText, Bike, Package } from "lucide-react"

const services = [
  {
    icon: <Anchor className="h-8 w-8" />,
    title: "Ocean Freight",
    description: "Shipping from / to any port in the world",
    image: "/images/ocean-freight.jpg",
  },
  {
    icon: <Truck className="h-8 w-8" />,
    title: "Land Transport",
    description: "Fast and reliable land transport",
    image: "/images/land-transport.jpg",
  },
  {
    icon: <Headset className="h-8 w-8" />,
    title: "Customer Support",
    description: "24/7 customer service",
    image: "/images/customer-support.jpg",
  },
  {
    icon: <FileText className="h-8 w-8" />,
    title: "Custom Clearance",
    description: "Let us handle paperwork",
    image: "/images/custom-clearance.jpg",
  },
  {
    icon: <Bike className="h-8 w-8" />,
    title: "Local Transport",
    description: "Fast local deliveries",
    image: "/images/local-transport.jpg",
  },
  {
    icon: <Package className="h-8 w-8" />,
    title: "Shared Container",
    description: "Cost-effective solution",
    image: "/images/shared-container.jpg",
  },
]

export default function ServiceCards() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="relative h-[250px] overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="bg-primary rounded-full w-12 h-12 flex items-center justify-center text-black mb-3">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{service.title}</h3>
                <p className="text-white/80 text-sm mb-4">{service.description}</p>
                <button className="text-primary font-medium text-sm hover:underline transition-colors">
                  View service
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
