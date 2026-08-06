import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

export interface Feature {
   id: number,
   title: string,
   description: string,
   icon: LucideIcon
}

export interface Props {
   href: string,
   name: string
}