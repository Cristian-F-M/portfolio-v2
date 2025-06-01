import type { ui } from '@/i18n/ui'


type PathToString<T, P extends string = ''> = {
	[K in keyof T]: T[K] extends object
		? PathToString<T[K], `${P}${P extends '' ? '' : '.'}${Extract<K, string>}`>
		: `${P}${P extends '' ? '' : '.'}${Extract<K, string>}`
}[keyof T]

export type Path = PathToString<(typeof ui)[keyof typeof ui]>

interface ProjectImage {
	path: string
	alt: Path
}

interface Skill {
	id: string
	text: string
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	icon: any
}

interface BaseProject {
	id: string
	name: string
	description: string
	mainImage: ProjectImage
	images: ProjectImage[]
	skills: Skill[]
	github?: string
}

export type Project = BaseProject &
	({ isActive: true; url: string } | { isActive: false })

export const PROJECTS: Project[] = []
