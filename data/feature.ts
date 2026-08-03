import { Feature } from "@/types";
import { Webhook, Palette, Zap, Settings, FileCode, CodeXml } from "lucide-react";

export const features: Feature[] = [
   {
    id: 1,
    title: "Properties",
    description: "Java properties files (.properties) for Spring Boot, Maven, and enterprise Java applications",
    icon: Settings,
   },
   {
    id: 2,
    title: "Yaml",
    description: "YAML configuration files (.yml, .yaml) for Kubernetes, Docker Compose, and CI/CD pipelines",
    icon: FileCode,
   },
   {
    id: 3,
    title: "Xml",
    description: "Extensible Markup Language (.xml) for Maven pom.xml, SOAP services, and enterprise apps",
    icon: CodeXml,
   },
]