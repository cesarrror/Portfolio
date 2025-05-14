"use client"

import { ReactElement, useState } from "react"
import { motion } from "framer-motion"
import { Code2, Database, Server, Cloud, Layers } from "lucide-react"
import { AngularIcon, AsanaIcon, AtlassianIcon, AWSIcon, AzureIcon, CSharpIcon, DjangoIcon, DockerIcon, ExpressIcon, FigmaIcon, FlaskIcon, GitIcon, JavaScriptIcon, LaravelIcon, LinuxIcon, MariaDBIcon, MongoIcon, MSSQLIcon, MySQLIcon, NestIcon, NextIcon, NodeIcon, NuxtIcon, PHPIcon, PostgresIcon, PostmanIcon, ReactIcon, RedisIcon, SwaggerIcon, TypeScriptIcon } from "./icons"

type TechCategory = "frontend" | "backend" | "database" | "devops" | "other"

interface Technology {
  name: string
  category: TechCategory
  level: number // 1-5
  icon?: ReactElement
}

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState<TechCategory>("frontend")

  const technologies: Technology[] = [
    // Frontend
    { name: "React", category: "frontend", level: 4, icon: <ReactIcon size={10} /> },
    { name: "Next.js", category: "frontend", level: 4, icon: <NextIcon size={10} />},
    { name: "Angular", category: "frontend", level: 2, icon: <AngularIcon size={10} />},
    { name: "Vue/Nuxt", category: "frontend", level: 4, icon: <NuxtIcon size={10} />},
    { name: "TypeScript", category: "frontend", level: 3, icon: <TypeScriptIcon size={10} />},
    { name: "JavaScript", category: "frontend", level: 5, icon: <JavaScriptIcon size={10} />},

    // Backend
    { name: "Laravel", category: "backend", level: 5, icon: <LaravelIcon size={10} />},
    { name: "Node.js", category: "backend", level: 4, icon: <NodeIcon size={10} />},
    { name: "Express.js", category: "backend", level: 4, icon: <ExpressIcon size={10} />},
    { name: "NestJS", category: "backend", level: 2, icon: <NestIcon size={10} />},
    { name: "Flask", category: "backend", level: 5, icon: <FlaskIcon size={10}/>},
    { name: "Django", category: "backend", level: 4, icon: <DjangoIcon size={10}/>},
    { name: "Symfony", category: "backend", level: 4, icon: <PHPIcon size={10}/>},
    { name: "CodeIgniter", category: "backend", level: 5, icon: <PHPIcon size={10}/>},
    { name: "C# (.NET)", category: "backend", level: 4, icon: <CSharpIcon size={10} />},
    { name: "ASP", category: "backend", level: 4, icon: <CSharpIcon size={10} />},

    // Database
    { name: "MariaDB", category: "database", level: 5, icon: <MariaDBIcon size={10} />},
    { name: "MySQL", category: "database", level: 5, icon: <MySQLIcon size={10} />},
    { name: "PostgreSQL", category: "database", level: 4, icon: <PostgresIcon size={10} />},
    { name: "MSSQL", category: "database", level: 5, icon: <MSSQLIcon size={10} />},
    { name: "Redis", category: "database", level: 4, icon: <RedisIcon size={10} />},
    { name: "MongoDB", category: "database", level: 4, icon: <MongoIcon size={10} />},

    // DevOps
    { name: "Docker", category: "devops", level: 4, icon: <DockerIcon size={10} />},
    { name: "Linux", category: "devops", level: 4, icon: <LinuxIcon size={10} />},
    { name: "Azure", category: "devops", level: 3, icon: <AzureIcon size={10} />},
    { name: "AWS", category: "devops", level: 4, icon: <AWSIcon size={10} />},
    
    // Other
    { name: "Shell Scripting", category: "other", level: 4, icon: <LinuxIcon size={10} />},
    { name: "Git", category: "other", level: 4, icon: <GitIcon size={10} />},
    { name: "Asana", category: "other", level: 4, icon: <AsanaIcon size={10} />},
    { name: "Postman", category: "other", level: 5, icon: <PostmanIcon size={10} />},
    { name: "Figma", category: "other", level: 5, icon: <FigmaIcon size={10} />},
    { name: "Atlassian", category: "other", level: 5, icon: <AtlassianIcon size={10} />},
    { name: "Swagger", category: "other", level: 5, icon: <SwaggerIcon size={10} />},
  ]

  const getCategoryIcon = (category: TechCategory) => {
    switch (category) {
      case "frontend":
        return <Code2 size={20} />
      case "backend":
        return <Server size={20} />
      case "database":
        return <Database size={20} />
      case "devops":
        return <Cloud size={20} />
      case "other":
        return <Layers size={20} />
    }
  }

  const defaultIcon = () => ( <Code2 size={20} /> );

  return (
    <section id="tech-stack" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white text-emerald-500">Stack Tecnológico</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Tecnologías con las que he trabajado durante mis 14 años de experiencia como desarrollador fullstack.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Tabs */}
          <div className="grid grid-cols-5 gap-2 mb-8 overflow-x-auto scrollbar-hide">
            {["frontend", "backend", "database", "devops", "other"].map((category) => (
              <button
                key={category}
                className={`flex items-center justify-center gap-2 py-2 px-4 rounded transition-colors ${
                  activeCategory === category
                    ? "bg-emerald-500 text-white"
                    : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                }`}
                onClick={() => setActiveCategory(category as TechCategory)}
              >
                {getCategoryIcon(category as TechCategory)}
                <span className="hidden md:inline capitalize">{category}</span>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {technologies
              .filter((tech) => tech.category === activeCategory)
              .map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="font-medium text-gray-700 dark:text-white flex flex-grid gap-2 items-center">
                            <span className={`${tech.name === 'Express.js' || tech.name === 'Flask' || tech.name === 'Symfony' || tech.name === 'CodeIgniter' ? 'bg-gray-700 rounded-full p-1' : 'p-1'}`}>{tech.icon ? tech.icon : defaultIcon()}</span>{tech.name}
                        </h3>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full mx-0.5 ${
                              i < tech.level ? "bg-emerald-500" : "bg-gray-200 dark:bg-gray-600"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}
