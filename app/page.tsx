import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeatureSection";
import FAQSection from "@/components/sections/FAQSection";
import CommonUseCases from "@/components/sections/CommonUseCases";

export default function HomePage() {
  return (
	<main className="mx-auto w-full max-w-5xl flex-1 px-6">
		<HeroSection/>
		<CommonUseCases/>
		<FeaturesSection/>
		<div id="faq-link">
			<FAQSection/>
		</div>
	</main>
  )
}

