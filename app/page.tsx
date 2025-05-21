import Hero from "@/components/home/hero"
import Gateway from "@/components/home/gateway"
import HowItWorks from "@/components/home/how-it-works"
import EarnWithUpick from "@/components/home/earn-with-upick"
import CourierPartner from "@/components/home/courier-partner"
import LocalDelivery from "@/components/home/local-delivery"

export default function Home() {
  return (
    <main>
      <Hero />
      <LocalDelivery />
      <Gateway />
      <HowItWorks />
      <EarnWithUpick />
      <CourierPartner />
    </main>
  )
}
