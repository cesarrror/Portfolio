"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Filter, ExternalLink, Github, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    image?: string;
    role: string;
    link?: string;
    github?: string;
}

export default function Projects() {
    const [selectedTech, setSelectedTech] = useState<string[]>([]);
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const projects: Project[] = [
        {
            id: 1,
            title: "Sistema Paperless - Gobierno de Nuevo León",
            description:
                "Implementación de sistema sin papel para optimizar procesos gubernamentales y reducir el uso de recursos físicos.",
            technologies: ["Laravel", "React", "MySQL", "Docker"],
            role: "Desarrollador Fullstack / Líder Técnico",
        },
        {
            id: 2,
            title: "Optimización de Sistema Legal",
            description:
                "Rediseño de consultas SQL que redujo el tiempo de respuesta de 1000 segundos a solo 9 segundos, mejorando drásticamente el rendimiento.",
            technologies: ["MySQL", "Laravel"],
            role: "Especialista en Optimización de Consultas a Bases de Datos con ORM",
        },
        {
            id: 3,
            title: "Control Vehicular - DataMóvil",
            description:
                "Sistema de gestión y seguimiento de flotas vehiculares con integración en tiempo real.",
            technologies: ["Azure Functions", "React", "JavaScript", "MSSQL", ".Net Core 8"],
            role: "Desarrollador Fullstack",
        },
        {
            id: 4,
            title: "Proyecto Contpaqi",
            description:
                "Desarrollo de sistema contable con arquitectura moderna y escalable.",
            technologies: ["Docker", "Node.js", "React", "TypeScript"],
            role: "Desarrollador Fullstack",
        },
        {
            id: 5,
            title: "Sistema para Seguros El Potosí",
            description:
                "Plataforma integral para gestión de seguros y pólizas con panel administrativo.",
            technologies: [".Net Core 8", "React", "MSSQL", "Azure"],
            role: "Desarrollador Frontend",
        },
        {
            id: 6,
            title: "Sistema backend para App Móvil",
            description:
                "Desarrollo de API para consumo en aplicativo móvil para turismo del estado de Nuevo León",
            technologies: ["Laravel", "MySQL", "AWS"],
            role: "Desarrollador Frontend",
        },
    ];

    // Get all unique technologies
    const allTechnologies = [
        ...new Set(projects.flatMap((project) => project.technologies)),
    ].sort();

    // Filter projects based on selected technologies
    const filteredProjects =
        selectedTech.length > 0
            ? projects.filter((project) =>
                selectedTech.some((tech) => project.technologies.includes(tech)),
            )
            : projects;

    const toggleTech = (tech: string) => {
        setSelectedTech((prev) =>
            prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech],
        );
    };

    return (
        <section id="projects" className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white text-gray-700">
                            Proyectos Destacados
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
                            Una selección de los proyectos más relevantes en los que he
                            trabajado durante mi carrera.
                        </p>
                    </div>

                    <div className="mt-4 md:mt-0 relative">
                        <Button
                            variant="outline"
                            onClick={() => setIsFilterOpen(!isFilterOpen)}
                            className="flex items-center gap-2 text-emerald-500 hover:text-emerald-700 dark:hover:text-emerald-300"
                        >
                            <Filter size={16} />
                            Filtrar por tecnología
                            {selectedTech.length > 0 && (
                                <Badge variant="secondary" className="ml-2">
                                    {selectedTech.length}
                                </Badge>
                            )}
                        </Button>

                        {isFilterOpen && (
                            <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-md shadow-lg z-10 p-2">
                                <div className="py-1">
                                    {allTechnologies.map((tech) => (
                                        <label
                                            key={tech}
                                            className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                                        >
                                            <input
                                                type="checkbox"
                                                checked={selectedTech.includes(tech)}
                                                onChange={() => toggleTech(tech)}
                                                className="mr-2"
                                            />
                                            <span className="text-gray-700 dark:text-gray-200">{tech}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <div className="h-full flex flex-col overflow-hidden bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={project.image || "/images/bg-cesar.png"}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                                        width={400}
                                        height={300}
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-1 dark:text-white text-emerald-500">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                                        {project.role}
                                    </p>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {project.technologies.map((tech) => (
                                            <Badge
                                                key={tech}
                                                variant={
                                                    selectedTech.includes(tech) ? "default" : "secondary"
                                                }
                                                className="cursor-pointer"
                                                onClick={() => toggleTech(tech)}
                                            >
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                                <div className="px-6 py-4 mt-auto border-t border-gray-100 dark:border-gray-700 flex justify-between">
                                    {project.link && (
                                        <Button variant="ghost" size="sm" className="gap-1">
                                            <ExternalLink className="h-4 w-4" /> Ver proyecto
                                        </Button>
                                    )}
                                    {project.github && (
                                        <Button variant="ghost" size="sm" className="gap-1">
                                            <Github className="h-4 w-4" /> Código
                                        </Button>
                                    )}
                                    <Button variant="outline" size="sm" className="gap-1 ml-auto">
                                        <Code className="h-4 w-4" /> Detalles
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
