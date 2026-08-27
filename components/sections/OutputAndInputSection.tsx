import React from "react";
import InputField from "../feature/InputField";
import type { FormatLanguage } from "@/lib/converter";

interface OutputAndInputSectionProps {
  initialFrom?: FormatLanguage;
  initialTo?: FormatLanguage;
}

const OutputAndInputSection = ({
  initialFrom,
  initialTo,
}: OutputAndInputSectionProps) => {
  return (
    <section id="converter" className="scroll-mt-24">
      <div className="mb-8">
        <h3 className="text-lg font-medium">Convert Your Configuration</h3>
        <p className="mt-2 text-sm text-muted">
          Past your configuration file below, choose the output format, and
          convert in instantly in your browser.
        </p>
      </div>
      <InputField initialFrom={initialFrom} initialTo={initialTo} />
    </section>
  );
};

export default OutputAndInputSection;
