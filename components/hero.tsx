"use client"

import { Button } from "@/components/ui/button"
import { Download, Send } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Hero() {
    return (
        <section className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-white py-24 md:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <div className="space-y-6">
                            <div>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4">
                                    Desarrollador Fullstack Sr.
                                </h1>
                                <p className="text-xl md:text-2xl text-gray-300 font-light">Con 14 años de experiencia</p>
                            </div>

                            <p className="text-lg md:text-xl text-gray-300">
                                Apasionado por construir soluciones escalables con tecnologías modernas en backend y frontend.
                            </p>

                            <p className="text-xl md:text-2xl font-medium text-emerald-400">&quot;Transformando ideas en soluciones digitales desde 2010.&quot;</p>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <Button className="bg-emerald-600 hover:bg-emerald-700">
                                    <Download className="mr-2 h-4 w-4" /> Descargar CV
                                </Button>
                                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                                    <Send className="mr-2 h-4 w-4" /> Contáctame
                                </Button>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="aspect-square rounded-full bg-gradient-to-tr from-emerald-500 to-purple-600 p-1 shadow-2xl">
                            <div className="rounded-full bg-gray-900 p-2 h-full w-full flex items-center justify-center">
                                <Image
                                    src="/images/cesar.jpg"
                                    alt="Foto de perfil"
                                    className="rounded-full h-full w-full object-cover"
                                    width={400}
                                    height={400}
                                />
                            </div>
                        </div>

                        <div className="absolute -bottom-6 -right-6 bg-gray-800 rounded-lg p-4 shadow-xl">
                            <p className="text-lg font-medium">14+ años de experiencia</p>
                            <p className="text-gray-400">100+ proyectos completados</p>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-100 to-transparent"></div>
        </section>
    )
}
