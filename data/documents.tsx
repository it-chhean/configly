import { Article } from "@/types";
import { ChevronRight, ShieldAlert } from "lucide-react";

export const aboutItem: Article = {
   title: "Why Converter Config Files?",
   subtitle: "Different tools and platforms require different configuration formats. When migrating between platforms, adopting new tools, or standardizing your team's configuration approach, you often need to convert between formats. This tool makes that process instant and error-free. ",
   icon: ChevronRight
}

export const howItWork: Article = {
   title: "How It Work?",
   subtitle: "Paste your configuration text into the input panel. The tool automatically detects whether your input is JSON, YAML, TOML, or INI. Select your desired output format from the dropdown, click Convert (or press Ctrl+Enter), and get your converted configuration with syntax highlighting. Copy it to your clipboard or download it as a file with the correct extension. ",
   icon: ChevronRight 
}

export const privacyAndSecurity: Article = {
   title: "Privacy and Security",
   subtitle: "This converter runs entirely in your browser. Your configuration data never leaves your machine -- no server requests, no data storage, no tracking of your input. Safe for converting configs that contain sensitive values like database credentials or API keys. ",
   icon:  ShieldAlert
}