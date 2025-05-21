import BenefitsHero from "@/components/benefits/hero"
import WhyChooseUs from "@/components/benefits/why-choose-us"
import ExploreServices from "@/components/benefits/explore-services"
import ServiceCards from "@/components/benefits/service-cards"
import HowItWorks from "@/components/benefits/how-it-works"
import QuoteForm from "@/components/benefits/quote-form"

export default function BenefitsPage() {
  return (
    <main>
      <BenefitsHero />
      <WhyChooseUs />
      <ExploreServices />
      <ServiceCards />
      <div className="container mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-8">
        <HowItWorks />
        <QuoteForm />
      </div>
    </main>
  )
}
