export type EducationItem = {
  institution: string;
  degree: string;
  start: string;
  end?: string;
  details?: string;
};

export const education: EducationItem[] = [
  {
    institution: "Universidad Nacional Autónoma de Honduras",
    degree: "Ingeniería en Sistemas",
    start: "Enero 2021",
    end: "Abril 2026",
    details: "Formación en Ingeniería en Sistemas con énfasis en desarrollo de software y aplicaciones web."
  }
];
