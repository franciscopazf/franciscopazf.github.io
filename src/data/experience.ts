export type ExperienceItem = {
  company: string;
  role: string;
  start: string; // ISO or human-friendly
  end?: string;
  description?: string;
};

export const experience: ExperienceItem[] = [
  {
    company: "GrainChain",
    role: "Becario",
    start: "Febrero 2026",
    end: "Presente",
    description: "Fui becario en la empresa GrainChain, donde aprendí sobre nuevas tecnologías junto a un equipo de profesionales expertos. Fui guiado y mentorado paso a paso en prácticas y procesos de desarrollo."
  },
  {
    company: "Proyecto de Gestión Comunitaria",
    role: "Desarrollador",
    start: "Enero 2023",
    end: "Presente",
    description: "Desarrollo de un sistema que digitaliza la administración comunitaria en áreas rurales de Honduras, reduciendo cobros duplicados y el uso de papeleo mediante formularios y reportes automatizados."
  },
  {
    company: "Cooperativa Chorotega",
    role: "Programador JR (Voluntariado)",
    start: "Diciembre 2025",
    end: "Marzo 2026",
    description: "Voluntario en desarrollo de aplicaciones web modernas utilizando frameworks como Laravel y Django, brindando soporte e implementación de características para la cooperativa."
  },
  {
    company: "Universidad Nacional Autónoma de Honduras",
    role: "Programador en sistema Nexo",
    start: "Agosto 2024",
    end: "Marzo 2025",
    description: "Participación en el desarrollo de un sistema institucional para la gestión integral de proyectos de vinculación en la universidad a nivel nacional."
  }
];
