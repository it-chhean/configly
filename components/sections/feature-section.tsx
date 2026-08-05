import { features } from "@/data/feature";
import FeatureCard from "../feature/feature-card";

export default function FeaturesSection() {
  return (
    <section className="my-8">
      <div className="mb-8">
        <h3 className=" text-lg font-normal">Support Configuration</h3>
        <p className="text-sm mt-2 text-muted">Learn about each configuration format and find the right conversion for your project.</p>
      </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l overflow-hidden">
      {features.map((feature) => (
        <FeatureCard key={feature.title} feature={feature} Icon={feature.icon} />
      ))}
    </div>
    </section>
  );
}