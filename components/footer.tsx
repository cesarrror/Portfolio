import Link from "next/link"
import { LuGithub, LuLinkedin, LuTwitter, LuMail } from "react-icons/lu"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="font-bold text-2xl">
              <span className="text-emerald-500">Dev</span>.Ortiz
            </Link>
            <p className="mt-4 text-gray-400 max-w-md">
              Desarrollador Fullstack Sr. con 14 años de experiencia en múltiples tecnologías y proyectos enterprise.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="http://" className="text-gray-400 hover:text-emerald-500 transition-colors" aria-label="GitHub">
                <LuGithub className="h-5 w-5" />
              </a>
              <a href="http://" className="text-gray-400 hover:text-emerald-500 transition-colors" aria-label="LinkedIn">
                <LuLinkedin className="h-5 w-5" />
              </a>
              <a href="http://" className="text-gray-400 hover:text-emerald-500 transition-colors" aria-label="Twitter">
                <LuTwitter className="h-5 w-5" />
              </a>
              <a
                href="mailto:tu.email@ejemplo.com"
                className="text-gray-400 hover:text-emerald-500 transition-colors"
                aria-label="Email"
              >
                <LuMail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#tech-stack" className="text-gray-400 hover:text-emerald-500 transition-colors">
                  Tecnologías
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-gray-400 hover:text-emerald-500 transition-colors">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link href="#experience" className="text-gray-400 hover:text-emerald-500 transition-colors">
                  Experiencia
                </Link>
              </li>
              <li>
                <Link href="#blog" className="text-gray-400 hover:text-emerald-500 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-emerald-500 transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contacto</h3>
            <ul className="space-y-2 text-gray-400">
              <li>León, Guanajuato, México</li>
              <li>cesar.ortran@gmail.com</li>
              <li>+52 (477) 852-7717</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">&copy; {currentYear} Dev.Ortiz. Todos los derechos reservados.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm text-gray-400">
              <li>
                <Link href="#" className="hover:text-emerald-500 transition-colors">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-emerald-500 transition-colors">
                  Términos de Servicio
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
