import { ReactElement } from "react"

export interface IAchievement {
    text: string
    highlight?: boolean
}

export interface ITechDetail {
    name: string
    description: string
    level: number
    icon?: ReactElement
}

export interface IExperience {
    id: number
    company: string
    role: string
    period: string
    description: string
    technologies: string[]
    detailedDescription?: string
    responsibilities?: string[]
    detailedAchievements?: IAchievement[]
    techDetails?: ITechDetail[]
}