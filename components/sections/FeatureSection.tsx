import { features } from "@/data/feature";
import FeatureCard from "../feature/FeatureCard";

export default function FeaturesSection() {
  return (
    <section className="mb-20">
      <div className="mb-8">
        <h3 className="text-lg font-medium">
          Why Choose Converter Config file?
        </h3>

        <p className="mt-2 text-sm text-muted">
          Convert configuration files between popular formats with fast, secure, browser-based processing. No uploads, no servers, no data leaves your device.
        </p>
      </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l ">
      {features.map((feature) => (
        <FeatureCard key={feature.title} feature={feature} Icon={feature.icon} />
      ))}
    </div>
    </section>
  );
}