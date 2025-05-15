import { IExperience } from "@/types/experiences";
import { AngularIcon, AWSIcon, CSharpIcon, DockerIcon, FlaskIcon, FlutterIcon, JavaScriptIcon, LaravelIcon, LinuxIcon, MongoIcon, MSSQLIcon, MySQLIcon, NodeIcon, NuxtIcon, PHPIcon, PostgresIcon, PythonIcon, ReactIcon, TypeScriptIcon } from "@/components/icons";

export const experiences: IExperience[] = [
    {
        id: 1,
        company: "KSP",
        role: "Desarrollador Fullstack Sr",
        period: "2024 - Actualmente",
        description: "Desarrollo para sistemas de seguros y pólizas.",
        technologies: [".NET Core", "React", "MSSQL", "Azure", "TypeScript"],
        detailedDescription:
            "Como Desarrollador Fullstack Senior, soy responsable de consolidar los mejores estándares de UX/UI con el equipo de diseño, además de desarrollar pruebas unitarias para asegurar la calidad del código. Mi rol abarca desde el desarrollo del Frontend y apoyar en el Backend si es necesario, además de hacer revisiones de código a mis compañeros cuando lo solicitan",
        responsibilities: [
            "Definir estándares de UI/UX",
            "Desarrollar el maquetado definido por el equipo de diseño",
            "Realizar code reviews y mentorías técnicas",
            "Comunicación directa con stakeholders y clientes",
            "Estimación de tiempos y recursos para proyectos",
        ],
        detailedAchievements: [
            {
                text: "Desarrollo de aplicación Web Con Responsive Design",
                highlight: true,
            },
            {
                text: "Desarrollo de sistema para seguros y pólizas",
                highlight: true,
            },
            {
                text: "Desarrollo de componentes escalables y reutilizables",
            },
        ],
        techDetails: [
            { name: "React", description: "Frontend principal con React Hooks y Redux", level: 4, icon: <ReactIcon size={10} /> },
            { name: "TypeScript", description: "Definición de tipos e interfaces", level: 3, icon: <TypeScriptIcon size={10} /> },
            { name: ".Net Core 8", description: "API RESTful", level: 4, icon: <CSharpIcon size={10} /> },
            { name: "Docker", description: "Containerización de aplicaciones y servicios", level: 4, icon: <DockerIcon size={10} /> },
        ],
    },
    {
        id: 2,
        company: "Consiss",
        role: "Líder Técnico / Desarrollador Fullstack Sr.",
        period: "2021 - 2025",
        description: "Liderando equipos de desarrollo y desarrollo de soluciones fullstack para clientes enterprise.",
        technologies: ["React", "Laravel", "Docker", "Azure Functions", ".Net Core 8", "Angular", "TypeScript", "Nuxt", "Node.js"],
        detailedDescription:
          "Como Líder Técnico y Desarrollador Fullstack Senior, dirigí equipos multidisciplinarios en el desarrollo de soluciones tecnológicas para clientes enterprise. Mi rol abarca desde la definición de arquitectura hasta la implementación de funcionalidades críticas, asegurando la calidad y escalabilidad de los proyectos.",
        responsibilities: [
          "Liderar equipos de desarrollo de 5-10 personas",
          "Definir arquitectura y estándares técnicos",
          "Definir diseño UI/UX",
          "Realizar code reviews y mentorías técnicas",
          "Comunicación directa con stakeholders y clientes",
          "Estimación de tiempos y recursos para proyectos",
        ],
        detailedAchievements: [
          {
            text: "Implementación de sistema paperless para el Gobierno de Nuevo León que redujo el uso de papel en un 87% y optimizó procesos administrativos",
            highlight: true,
          },
          {
            text: "Optimización de consultas en sistema legal que redujo el tiempo de respuesta de 300 segundos a menos de 9 segundos, mejorando drásticamente la experiencia de usuario",
            highlight: true,
          },
          {
            text: "Diseño e implementación de arquitectura de microservicios para aplicación de gestión con más de 10,000 usuarios concurrentes",
          },
          {
            text: "Desarrollo de aplicaciones para empresas como Whirlpool, Gobierno de Nuevo León, Grainger, Contpaqi, Afimex y Datamóvil",
          },
        ],
        techDetails: [
          { name: "React", description: "Frontend principal con React Hooks y Redux", level: 4, icon: <ReactIcon size={10} /> },
          { name: "Node.js", description: "APIs RESTful", level: 4, icon: <NodeIcon size={10} /> },
          { name: "Laravel", description: "Desarrollo de backend para aplicaciones empresariales", level: 5, icon: <LaravelIcon size={10} /> },
          { name: "Docker", description: "Containerización de aplicaciones y servicios", level: 4, icon: <DockerIcon size={10} /> },
          { name: "AWS", description: "Infraestructura cloud y servicios gestionados", level: 4, icon: <AWSIcon size={10} /> },
          { name: ".Net Core 8", description: "API RESTful", level: 4, icon: <CSharpIcon size={10} /> },
          { name: "Angular", description: "Frontend pricipal con RxJS", level: 2, icon: <AngularIcon size={10} /> },
          { name: "Nuxt", description: "Frontend principal con Nuxt2 y Vuex", level: 4, icon: <NuxtIcon size={10} /> },
          { name: "Linux", description: "Configuración de Servidores Linux", level: 4, icon: <LinuxIcon size={10} /> },
          { name: "TypeScript", description: "Definición de tipos e interfaces", level: 3, icon: <TypeScriptIcon size={10} /> },
          { name: "MSSQL", description: "Gestión y diseño de Base de Datos, Creación y Optimización de Stored Procedures", level: 4, icon: <MSSQLIcon size={10} /> },
        ],
    },
    {
        id: 3,
        company: "Cloud Source IT",
        role: "Desarrollador Fullstack Sr.",
        period: "2020 - 2021",
        description: "Desarrollando Web Apps y RESTful APIs",
        technologies: ["Node.js", "Laravel", "MySQL", "Angular"],
        detailedDescription:
          "Como Líder Técnico y Desarrollador Fullstack Senior, dirijo equipos multidisciplinarios en el desarrollo de soluciones tecnológicas para clientes enterprise. Mi rol abarca desde la definición de arquitectura hasta la implementación de funcionalidades críticas, asegurando la calidad y escalabilidad de los proyectos.",
        responsibilities: [
          "Comunicación directa con stakeholders y clientes",
          "Estimación de tiempos y recursos para proyectos",
        ],
        detailedAchievements: [
          {
            text: "Desarrollando API RESTful para la App Pasaporte Nuevo León",
            highlight: true,
          },
          {
            text: "Optimización de consultas en API Pasaporte Nuevo León (dejó de colapsarse)",
            highlight: true,
          },
          {
            text: "Refactor de sistema de administración web para Pasaporte Nuevo León",
          },
          {
            text: "Mantenimiento de sistema de administración web para Glucosite",
          },
        ],
        techDetails: [
          { name: "Angular", description: "Frontend principal con RxJS", level: 2, icon: <AngularIcon size={10} /> },
          { name: "Node.js", description: "APIs RESTful y microservicios", level: 4, icon: <NodeIcon size={10} /> },
          { name: "Laravel", description: "Desarrollo de backend para aplicaciones empresariales", level: 5, icon: <LaravelIcon size={10} /> },
          { name: "MySQL", description: "Gestión y diseño de Base de Datos, Optimización de Stored Procedures", level: 5, icon: <MySQLIcon size={10} /> },
        ],
    },
    {
        id: 4,
        company: "Winston Data",
        role: "Desarrollador Fullstack Sr.",
        period: "2020 - 2020",
        description: "Desarrollando aplicaciones web para Banorte Seguros y Axa seguros",
        technologies: ["PHP", "Python", "Flask", "C# (.Net)", "Node.js", "MSSQL", "PostgresSQL"],
        detailedDescription:
          "Cómo desarrollador Fullstack Sr, desarrollé y mantuve aplicaciones web en PHP, Flask, C# y Node.js, además de hacer aplicaciones de consola en Python, también estuve trabajando con Bases de Datos como PostgresSQL y SQL Server (MSSQL), atendí a clientes como Banorte Seguros, Axa Seguros y BNP Paribas",
        responsibilities: [
          "Configurar servidores Linux(CentOS) para desplegar las aplicaciones realizadas",
          "Creación de jobs y scripts en Shell para ejecutar tareas programadas",
          "Desarrollar APIs RESTful",
          "Desarrollar aplicaciones de consola para búsqueda de documentos en un sistema de archivos",
          "Comunicación directa con stakeholders y clientes",
          "Estimación de tiempos y recursos para proyectos",
        ],
        detailedAchievements: [
          {
            text: "Generación de script en shell que monitoreaba una aplicación hecha en flask y la levantaba si es que esta no respondía de manera éxitosa",
            highlight: true,
          },
          {
            text: "Comunicación entre una aplicación en Pascal y otra en Python para lectura de correos, respaldo de los mismos, almacenado en Base de Datos y transferencia del respaldo a un sistema de archivos",
            highlight: true,
          },
          {
            text: "Diseño y desarrollo de aplicación móvil(MVP) utilizando Flutter para BNP Paribas",
          },
          {
            text: "Creación de aplicación en consola para búsqueda avanzada documentos por número de póliza",
          },
        ],
        techDetails: [
          { name: "PHP", description: "Desarrollo de APIs RESTful y aplicaciones web", level: 5, icon: <PHPIcon size={10} /> },
          { name: "Python", description: "Desarrollo de aplicaciones en consola", level: 5, icon: <PythonIcon size={10} /> },
          { name: "Flask", description: "Desarrollo de APIs RESTful", level: 5, icon: <FlaskIcon size={10} /> },
          { name: "C#", description: "Desarrollo de APIs RESTful", level: 4, icon: <CSharpIcon size={10} /> },
          { name: "Node.js", description: "Desarrollo de APIs RESTful y WebSockets", level: 4, icon: <NodeIcon size={10} /> },
          { name: "MSSQL", description: "Gestión y Diseño de Bases de Datos, creación de Stored Procedures", level: 5, icon: <MSSQLIcon size={10} /> },
          { name: "PostgresSQL", description: "Gestión y Diseño de Bases de Datos, creación de Functions", level: 4, icon: <PostgresIcon size={10} /> },
        ],
    },
    {
        id: 5,
        company: "Grupo Publicitario de B.C.S.",
        role: "Desarrollador Fullstack Sr.",
        period: "2019 - 2020",
        description: "Desarrollando API RESTful, aplicación web y móvil",
        technologies: ["Angular", "Laravel", "Flutter"],
        detailedDescription:
          "Como responsable del desarrollo, participé en el desarrollo de la API en Laravel, aplicación web en Angular y aplicación móvil en Flutter para una sistema de recomendaciones de lugares turísticos, restaurantes, eventos y centros nocturnos del área de Baja California Sur.",
        responsibilities: [
          "Definir arquitectura y estándares técnicos",
          "Desarrollo de API RESTful en Laravel",
          "Desarrollo de aplicación web en Angular",
          "Desarrollo de aplicación móvil en Flutter",
        ],
        detailedAchievements: [
          {
            text: "Desarrollo de aplicación móvil (MVP) en Flutter, para el desarrollo e incremento del turismo en Baja California Sur, principalmente en Cabo San Lucas.",
            highlight: true,
          },
          {
            text: "Diseño e implementación de arquitectura de API RESTful",
          },
          {
            text: "Despliegue de aplicación web hecha en Angular en Heroku",
          },
        ],
        techDetails: [
          { name: "Laravel", description: "Desarrollo de API RESTful", level: 5, icon: <LaravelIcon size={10} /> },
          { name: "Angular", description: "Desarrollo de aplicación web", level: 2, icon: <AngularIcon size={10} /> },
          { name: "Flutter", description: "Desarrollo de aplicación móvil", level: 2, icon: <FlutterIcon size={10} /> },
        ],
    },
    {
        id: 6,
        company: "MPQ Arquitectos",
        role: "Desarrollador Fullstack Sr.",
        period: "2015 - 2019",
        description: "Liderando equipo de desarrollo.",
        technologies: ["Laravel", "MySQL", "Node.js", "JavaScript"],
        detailedDescription:
          "Como Líder del equipo de desarrollo, dirigí un pequeño grupo de desarrolladores para elaborar una aplicación de levantamiento de avalúos para la empresa Acertec y luego para la Federación de Colegios de Valuadores (FECOVAL).",
        responsibilities: [
          "Liderar equipos de desarrollo de 3-5 personas",
          "Definir arquitectura y estándares técnicos",
          "Definir diseño UX/UI",
          "Comunicación directa con stakeholders y clientes",
          "Despliegue de sitio en servidor administrado",
        ],
        detailedAchievements: [
          {
            text: "Implementación de sistema paperless para la Federación de Colegios de Valuadores que redujo el uso de papel en al menos un 90% y optimizó procesos administrativos",
            highlight: true,
          },
          {
            text: "Diseño e implementación de arquitectura de API RESTful para aplicación de gestión con más de 1,000 usuarios concurrentes",
            highlight: true,
          },
          {
            text: "Optimización de flujo de levantamiento de avalúo y carga de evidencias (fotos del predio)",
          },
        ],
        techDetails: [
          { name: "Node.js", description: "Desarrollo de APIs RESTful", level: 4, icon: <NodeIcon size={10} />  },
          { name: "Laravel", description: "Desarrollo de APIs RESTful", level: 5, icon: <LaravelIcon size={10} />  },
          { name: "JavaScript", description: "Desarrollo de aplicación web", level:5, icon: <JavaScriptIcon size={10} />  },
          { name: "MySQL", description: "Gestión y diseño de Base de Datos", level: 5, icon: <MySQLIcon size={10} />  },
        ],
    },
]