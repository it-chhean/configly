import { LucideIcon } from "lucide-react";

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

export interface Article {
   title: string,
   subtitle: string,
   icon: LucideIcon
}