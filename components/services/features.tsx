"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Clock, Shield, Truck, Users, Zap } from "lucide-react"

const features = [
  {
    title: "Fast Delivery",
    description: "Quick and efficient delivery services to meet your deadlines",
    icon: Zap
  },
  {
    title: "Real-time Tracking",
    description: "Track your shipments in real-time with our advanced system",
    icon: Clock
  },
  {
    title: "Secure Transport",
    description: "Your goods are protected with our secure transportation",
    icon: Shield
  },
  {
    title: "Professional Drivers",
    description: "Experienced and trained drivers for safe delivery",
    icon: Users
  },
  {
    title: "Fleet Management",
    description: "Efficient management of our delivery fleet",
    icon: Truck
  },
  {
    title: "Quality Service",
    description: "Commitment to providing the best service quality",
    icon: CheckCircle2
  }
]

export default function ServiceFeatures() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Our Services
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            We provide reliable and efficient delivery solutions with a focus on quality and customer satisfaction
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {feature.title}
                </h3>
              </div>
              <p className="text-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 