import type { Path } from "./Projects";

interface Experience {
  id: string;
  company: Path;
  period: {
    start: `${string}/${string}/${string}`;
    end: `${string}/${string}/${string}` | null;
  };
  position: Path;
  summary: Path
  verificate: boolean;
}

export const EXPERIENCES: Experience[] = [
  {
    id: "WM",
    company: "experience.jobs.wm.company.name",
    period: {
      start: "14/04/2024",
      end: "17/10/2024",
    },
    position: "experience.jobs.wm.position",
    summary: "experience.jobs.wm.summary",
    verificate: true,
  },
  {
    id: "software-developer–independent-projects",
    company: "experience.jobs.independentProjects.company.name",
    period: {
      start: "20/10/2024",
      end: null
    },
    position: "experience.jobs.independentProjects.position",
    summary: "experience.jobs.independentProjects.summary",
    verificate: false,
  },
  {
    id: "react-native-developer",
    company: "experience.jobs.reactNativeDeveloper.company.name",
    period: {
      start: "20/10/2024",
      end: null
    },
    position: "experience.jobs.reactNativeDeveloper.position",
    summary: "experience.jobs.reactNativeDeveloper.summary",
    verificate: false,
  },
  {
    id: "frontend-developer-react-react-native",
    company: "experience.jobs.fontEndDeveloper.company.name",
    period: {
      start: "20/10/2024",
      end: null
    },
    position: "experience.jobs.fontEndDeveloper.position",
    summary: "experience.jobs.fontEndDeveloper.summary",
    verificate: false,
  }
] as const