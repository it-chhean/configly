import { features } from "@/data/feature";
import FeatureCard from "./FeatureCard";

export default function FeaturesSection() {
  return (
    <section className="mt-8">
      <div className="mb-8">
        <h3 className=" text-lg font-normal">Support Configuration</h3>
        <p className="text-sm mt-2 text-muted">Learn about each configuration format and find the right conversion for your project.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 mb-15">
        {features.map((feature) => (
          <FeatureCard
            key={feature.id}
            feature={feature}
          />
        ))}
      </div>
    </section>
  );
}