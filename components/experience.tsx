"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar, Building, CheckCircle2, Eye, ArrowRight, ExternalLink, Users, Code2 } from "lucide-react"
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Modal } from "@/components/ui/modal"
import { experiences } from "@/utils/experiences";
import { IExperience } from "@/types/experiences";
import { Badge } from "./ui/badge";



export default function Experience() {
    const [selectedExperience, setSelectedExperience] = useState<IExperience | null>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = (experience: IExperience) => {
        setSelectedExperience(experience)
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }


    const defaultIcon = () => (<Code2 size={20} />);

    return (
        <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white text-emerald-500">Experiencia Profesional</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Mi trayectoria profesional durante 14 años como desarrollador fullstack.
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Timeline line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 transform md:translate-x-px"></div>

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <div
                                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""} mb-16`}
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-0 md:left-1/2 w-6 h-6 rounded-full bg-emerald-500 border-4 border-white dark:border-gray-800 shadow transform -translate-x-1/2 md:-translate-x-3"></div>

                                {/* Content */}
                                <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
                                    <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                        <div className="flex items-center mb-4">
                                            <Building className="h-5 w-5 text-emerald-500 mr-2" />
                                            <h3 className="text-xl font-bold dark:text-white text-gray-500">{exp.company}</h3>
                                        </div>

                                        <div className="flex items-center mb-2 text-gray-600 dark:text-gray-300">
                                            <Briefcase className="h-4 w-4 mr-2" />
                                            <span>{exp.role}</span>
                                        </div>

                                        <div className="flex items-center mb-4 text-gray-600 dark:text-gray-300">
                                            <Calendar className="h-4 w-4 mr-2" />
                                            <span>{exp.period}</span>
                                        </div>

                                        <p className="mb-4 text-gray-700 dark:text-gray-300">{exp.description}</p>


                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {exp.technologies.map((tech) => (
                                                <Badge key={tech} variant="secondary">
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>

                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="mt-2 w-full sm:w-auto text-emerald-500 hover:text-emerald-700 dark:hover:text-emerald-300 rounded"
                                            onClick={() => openModal(exp)}
                                        >
                                            Ver más detalles
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal for detailed experience */}
            {selectedExperience && (
                <Modal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    title={`${selectedExperience.role} en ${selectedExperience.company}`}
                    size="xl"
                >
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Descripción Detallada</h3>
                            <p className="text-gray-700 dark:text-gray-300">{selectedExperience.detailedDescription}</p>
                        </div>

                        {selectedExperience.responsibilities && (
                            <div>
                                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Responsabilidades</h3>
                                <ul className="space-y-1 list-disc pl-5">
                                    {selectedExperience.responsibilities.map((responsibility, index) => (
                                        <li key={index} className="text-gray-700 dark:text-gray-300">
                                            {responsibility}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {selectedExperience.detailedAchievements && (
                            <div>
                                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Logros Detallados</h3>
                                <ul className="space-y-2">
                                    {selectedExperience.detailedAchievements.map((achievement, index) => (
                                        <li
                                            key={index}
                                            className={`flex items-start ${achievement.highlight
                                                ? "p-2 bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 rounded"
                                                : ""
                                                }`}
                                        >
                                            <CheckCircle2
                                                className={`h-5 w-5 mr-2 mt-0.5 flex-shrink-0 ${achievement.highlight ? "text-emerald-600 dark:text-emerald-400" : "text-emerald-500"
                                                    }`}
                                            />
                                            <span className="text-gray-700 dark:text-gray-300">{achievement.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {selectedExperience.techDetails && (
                            <div>
                                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Tecnologías Utilizadas</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {selectedExperience.techDetails.map((tech) => (
                                        <div key={tech.name} className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                                            <div className="flex justify-between items-center mb-1">
                                                <h4 className="font-medium text-gray-900 dark:text-white flex flex-grid gap-2 items-center">
                                                    <span className={`${tech.name === 'Express.js' || tech.name === 'Flask' || tech.name === 'Symfony' || tech.name === 'CodeIgniter' || tech.name === 'AWS' || tech.name === 'PHP' ? 'bg-gray-700 rounded-full p-1' : 'p-1'}`}>{tech.icon ? tech.icon : defaultIcon()}</span>{tech.name}
                                                </h4>
                                                <div className="flex">
                                                    {[...Array(5)].map((_, i) => (
                                                        <div
                                                            key={i}
                                                            className={`w-2 h-2 rounded-full mx-0.5 ${i < tech.level ? "bg-emerald-500" : "bg-gray-200 dark:bg-gray-600"
                                                                }`}
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">{tech.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="pt-4 border-t border-gray-200 dark:border-gray-700 flex justify-end">
                            <Button onClick={closeModal} className="rounded">Cerrar</Button>
                        </div>
                    </div>
                </Modal>
            )}
        </section>
    )
}
