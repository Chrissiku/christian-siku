import type { StaticImageData } from "next/image";
import { v4 as uid } from "uuid";
import project from "../assets/works/project.jpg";

interface Work {
  id: string;
  src: StaticImageData | string;
  title: string;
  link: string;
  stack: string[];
}

const WorksData: Work[] = [
  {
    id: uid(),
    src: project,
    title: "Burger Builder",
    link: "https://burger-builder-1a3e5.web.app/",
    stack: ["React", "Redux", "CSS"],
  },
  {
    id: uid(),
    src: project,
    title: "Burger Builder",
    link: "https://burger-builder-1a3e5.web.app/",
    stack: ["React", "Redux", "CSS"],
  },
  {
    id: uid(),
    src: project,
    title: "Burger Builder",
    link: "https://burger-builder-1a3e5.web.app/",
    stack: ["React", "Redux", "CSS"],
  },
  {
    id: uid(),
    src: project,
    title: "Burger Builder",
    link: "https://burger-builder-1a3e5.web.app/",
    stack: ["React", "Redux", "CSS"],
  },
  {
    id: uid(),
    src: project,
    title: "Burger Builder",
    link: "https://burger-builder-1a3e5.web.app/",
    stack: ["React", "Redux", "CSS"],
  },
  {
    id: uid(),
    src: project,
    title: "Burger Builder",
    link: "https://burger-builder-1a3e5.web.app/",
    stack: ["React", "Redux", "CSS"],
  },
];

export default WorksData;
