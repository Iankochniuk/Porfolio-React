import gestorAutosVideo from "../assets/gestorAutosVideo.mp4";
import f1DashboardVideo from "../assets/f1_dashboard.mp4";

const projects = [
  {
    id: 1,
    titulo: "Gestor de Autos",
    video: gestorAutosVideo,
    descripcion:
      "Aplicación web para gestionar vehículos de forma sencilla e intuitiva. Permite registrar, visualizar y administrar información mediante una interfaz moderna y responsive desarrollada con React y Tailwind CSS.",
    tecnologias: ["React", "Tailwind CSS"],
    github: "https://github.com/Iankochniuk/Miniapp-con-Tem-tica",
    demo: "https://gestorlubri.netlify.app/",
  },
  {
    id: 2,
    titulo: "F1 Dashboard",
    video: f1DashboardVideo,
    descripcion:
      "Dashboard interactivo que consume una API para mostrar información de la Fórmula 1, incluyendo pilotos, escuderías y estadísticas en tiempo real mediante una interfaz clara y dinámica.",
    tecnologias: ["React", "API REST"],
    github: "https://github.com/Iankochniuk/F1--Dashboard",
    demo: "https://f1-dashboar.netlify.app/",
  },
];

export default projects;
