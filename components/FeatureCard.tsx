import { Feature } from "@/types";

interface FeatureCardProps {
  feature: Feature;
}

export default function FeatureCard({
  feature,
}: FeatureCardProps) {
  const Icon = feature.icon;

  return (
    <div className="w-full border p-8 ">
      <Icon className="mb-2 h-5 w-5" />

      <h3 className="text-base ">
        {feature.title}
      </h3>

      <p className="mt-2 text-sm text-muted-foreground">
        {feature.description}
      </p>
    </div>
  );
}