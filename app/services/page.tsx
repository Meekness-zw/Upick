import ServicesList from "@/components/services/services-list"
import ServiceFeatures from "@/components/services/features"
import ServiceCTA from "@/components/services/cta"

export default function ServicesPage() {
  return (
    <main>
      <ServicesList />
      <ServiceFeatures />
      <ServiceCTA />
    </main>
  )
} 