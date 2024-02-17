import { v4 as uid } from "uuid";
// import { GlobeAltIcon } from "@heroicons/react/24/outline";
// import { GlobeAltIcon } from "@heroicons/react/outline";
import * as HeroIcons from "@heroicons/react/24/outline";

interface Services<T extends keyof typeof HeroIcons> {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<React.ComponentProps<typeof HeroIcons[T]>>;
}

const ServicesData: Services<keyof typeof HeroIcons>[] = [
  {
    id: uid(),
    title: "Web Development",
    description: "I can build a website for you with the latest technologies.",
    icon: HeroIcons.GlobeAltIcon,
  },
  {
    id: uid(),
    title: "Mobile Development",
    description:
      "I can build a mobile app for you with the latest technologies.",
    icon: HeroIcons.DocumentTextIcon,
  },
  {
    id: uid(),
    title: "SEO",
    description:
      "I can optimize your website to rank higher on search engines.",
    icon: HeroIcons.DocumentTextIcon,
  },

  {
    id: uid(),
    title: "Database Development",
    description: "I can build a database for you with the latest technologies.",
    icon: HeroIcons.DocumentTextIcon,
  },
];

export default ServicesData;
