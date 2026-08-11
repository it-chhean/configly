export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  className?: string;
}

export const faqItems: FaqItem[] = [
  {
    id: "faq-1",
    question: "What is Converter?",
    answer:
      "Converter is a browser-based configuration converter that helps developers transform files between formats like JSON, YAML, XML, TOML, Properties, and ENV without installing additional tools.",
  },
  {
    id: "faq-2",
    question: "Which file formats are supported?",
    answer:
      "Converter supports popular configuration formats including JSON, YAML, XML, TOML, Java Properties, and ENV. More formats will be added in future updates.",
  },
  {
    id: "faq-3",
    question: "Is my data uploaded to a server?",
    answer:
      "No. Your files are processed directly in your browser whenever possible. Your configuration data never leaves your device, giving you better privacy and security.",
  },
  {
    id: "faq-4",
    question: "Can I upload configuration files?",
    answer:
      "Yes. You can upload supported configuration files or paste raw text directly into the editor. Converter will automatically parse and convert the content.",
  },
  {
    id: "faq-5",
    question: "Is converter free to use?",
    answer:
      "Yes. The core conversion features are completely free, allowing developers to quickly convert configuration files without creating an account.",
  },
  {
    id: "faq-6",
    question: "Who is converter built for?",
    answer:
      "Converter is designed for software developers, DevOps engineers, students, and anyone working with application configuration files across different technologies.",
  },
  {
    id: "faq-7",
    question: "Why should I use converter?",
    answer:
      "Converter provides fast, accurate, and browser-based configuration conversion with a clean interface. It helps reduce manual formatting errors and saves time when switching between different configuration formats.",
  },
];
