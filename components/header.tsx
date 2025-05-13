"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, Moon, Sun, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { useMobile } from "@/hooks/use-mobile"

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const { theme, setTheme } = useTheme()
    const isMobile = useMobile()

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    const navItems = [
        { name: "Inicio", href: "#" },
        { name: "Tecnologías", href: "#tech-stack" },
        { name: "Proyectos", href: "#projects" },
        { name: "Experiencia", href: "#experience" },
        { name: "Blog", href: "#blog" },
        { name: "Contacto", href: "#contact" },
    ]

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm" : "bg-transparent"
                }`}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between h-16 md:h-20">
                    <Link href="/" className="font-bold text-xl md:text-2xl">
                    <span className="text-emerald-600 dark:text-emerald-500">Dev</span>.Ortiz
                    </Link>

                    <nav className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-gray-500 dark:text-gray-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center space-x-4">
                        <button
                            className="p-2 rounded-full text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            aria-label="Toggle theme"
                        >
                            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                        </button>

                        <Button className="hidden md:flex bg-emerald-600 hover:bg-emerald-700">
                            <Download className="mr-2 h-4 w-4" /> CV
                        </Button>

                        <button
                            className="md:hidden p-2 rounded-full text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                            onClick={toggleMenu}
                            aria-label="Toggle menu"
                        >
                            <Menu className="h-6 w-6" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
                    <nav className="flex flex-col py-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="px-6 py-3 text-gray-700 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="px-6 py-3">
                            <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                                <Download className="mr-2 h-4 w-4" /> Descargar CV
                            </Button>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    )
}
