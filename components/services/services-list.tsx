"use client"

import { motion } from "framer-motion"
import { Truck, Package, Clock, MapPin, Shield, Users } from "lucide-react"
import Image from "next/image"

const services = [
  {
    title: "Local Delivery",
    description: "Fast and reliable delivery services within your city",
    icon: Truck,
    features: ["Same-day delivery", "Real-time tracking", "City-wide coverage"]
  },
  {
    title: "Package Handling",
    description: "Professional handling of your valuable packages",
    icon: Package,
    features: ["Secure packaging", "Insurance options", "Careful handling"]
  },
  {
    title: "Express Service",
    description: "Priority delivery for time-sensitive items",
    icon: Clock,
    features: ["Quick pickup", "Priority routing", "Status updates"]
  },
  {
    title: "Route Optimization",
    description: "Efficient delivery routes for multiple stops",
    icon: MapPin,
    features: ["Smart routing", "Traffic avoidance", "Fuel efficiency"]
  },
  {
    title: "Secure Transport",
    description: "Safe and secure transportation of your goods",
    icon: Shield,
    features: ["GPS tracking", "Secure vehicles", "Trained drivers"]
  },
  {
    title: "Business Solutions",
    description: "Custom delivery solutions for businesses",
    icon: Users,
    features: ["Bulk shipping", "Regular schedules", "Dedicated support"]
  }
]

export default function ServicesList() {
  return (
    <section className="pt-0">
      {/* Header background image section */}
      <div className="relative w-full h-[320px] md:h-[400px] lg:h-[480px] flex items-center justify-center">
        <Image
          src="/images/shared-container.jpg"
          alt="Services background"
          fill
          className="object-cover object-center"
          priority
          quality={90}
          style={{ zIndex: 0 }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <div className="text-center max-w-3xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-4">
              Our Services
            </h1>
            <p className="text-lg text-white drop-shadow-md">
              Discover our comprehensive range of delivery and transportation services designed to meet your needs
            </p>
          </div>
        </div>
      </div>

      {/* Main content below header image */}
      <div className="container mx-auto px-4 mt-12 md:mt-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
              </div>
              <p className="text-foreground mb-4">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 