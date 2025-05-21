import BusinessHero from "@/components/business/hero"
import TakeControl from "@/components/business/take-control"
import WhyChooseUs from "@/components/business/why-choose-us"
import BusinessBenefits from "@/components/business/benefits"

export default function BusinessPage() {
  return (
    <main>
      <BusinessHero />
      <TakeControl />
      <WhyChooseUs />
      <BusinessBenefits />
    </main>
  )
}
