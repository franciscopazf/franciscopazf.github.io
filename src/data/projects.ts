export type Project = {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    title: "Nexo (sistema Nexo)",
    description: "Sistema institucional desarrollado para la Universidad Nacional Autónoma de Honduras para la gestión integral de proyectos de vinculación. (nexo.unah.edu.hn)",
    technologies: ["Laravel", "PHP", "MySQL"],
    demo: "https://nexo.unah.edu.hn"
  },
  {
    title: "Cooperativa Chorotega - Landing administrativa",
    description: "Landing administrativa con secciones de noticias y gestión de activos eventuales. Personalizable. (chorotega.hn) — Laravel + Livewire",
    technologies: ["Laravel", "Livewire", "PHP"],
    demo: "https://chorotega.hn"
  },
  {
    title: "CTC (Club Turístico Cooperativo)",
    description: "Sitio para administrar membresías y recordatorios de suscripción, con gestión de miembros. (ctc.chorotega.hn) — Laravel + Livewire + Filament PHP",
    technologies: ["Laravel", "Livewire", "Filament"],
    demo: "https://ctc.chorotega.hn"
  },
  {
    title: "ProcoopSA - POS e inventario",
    description: "Soporte técnico a un POS administrable con punto de venta y gestión de inventario, incorporando nuevos módulos y características. (procoopsa.chorotega.hn)",
    technologies: ["Laravel", "Alpine.js"],
    demo: "https://procoopsa.chorotega.hn"
  },
  {
    title: "PERT Develop - GrainChain",
    description: "Creación de una plataforma para control de proyectos PERT con roles, permisos y estimaciones colaborativas. Hecho con NestJS y Angular.",
    technologies: ["NestJS", "Angular"],
    demo: "https://pert-develop.grainchain.io"
  },
  {
    title: "Quindy Crochet - eCommerce",
    description: "Administración de dominio y tienda e-commerce con ventas internacionales.",
    technologies: ["E-commerce", "Payments"],
    demo: "https://quindycrochet.com"
  }
];
