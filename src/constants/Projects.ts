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
	name: Path
	description: Path
	mainImage: ProjectImage
	images: ProjectImage[]
	skills: Skill[]
	github?: string
  highlighted?: boolean
}

type URL = `${`${'https' | 'http'}://` | 'www.'}${string}`

export type Project = BaseProject &
	(
		| {
				isAppMobile: true
				thereIsApk: boolean
		  }
		| ({ isAppMobile: false } & (
				| { isActive: true; url: URL }
				| { isActive: false }
		  ))
	)
export const PROJECTS: Project[] = [
	{
		id: 'web-votaciones-v2',
		name: 'projects.projects.votaciones.web.name',
		description: 'projects.projects.votaciones.web.description', 
		mainImage: {
			path: '/images/projects/votaciones/web/votaciones-web-login.png',
			alt: 'projects.projects.votaciones.web.mainImageAlt'
		},
		github: 'https://github.com/Cristian-F-M/web-votaciones-v2',
		isActive: false,
		isAppMobile: false,
		images: [],
		skills: [
			{
				id: 'react',
				icon: 'react',
				text: 'React'
			},
			{
				id: 'next.js',
				icon: 'next.js',
				text: 'Next.js'
			},
			{
				id: 'tailwindcss',
				icon: 'tailwindcss',
				text: 'Tailwindcss'
			},
			{
				id: 'typescript',
				icon: 'typescript',
				text: 'TypeScript'
			},
			{
				id: 'zustand',
				icon: 'zustand',
				text: 'Zustand'
			}
		]
	},
	{
		id: 'app-votaciones-v2',
		name: 'projects.projects.votaciones.app.name',
		mainImage: {
			alt: 'projects.projects.votaciones.app.mainImageAlt',
			path: '/images/projects/votaciones/app/votaciones-app-login.jpg'
		},
		description: 'projects.projects.votaciones.app.description',
		isAppMobile: true,
		thereIsApk: false,
    highlighted: true,
		github: 'https://github.com/Cristian-F-M/app-votaciones-v2',
		skills: [
			{
				id: 'react',
				icon: 'react',
				text: 'React'
			},
			{
				id: 'tailwindcss',
				icon: 'tailwindcss',
				text: 'Tailwindcss'
			},
			{
				id: 'expo',
				icon: 'expo',
				text: 'Expo'
			},
			{
				id: 'react-native',
				icon: 'react-native',
				text: 'React Native'
			},
			{
				id: 'typescript',
				icon: 'typescript',
				text: 'TypeScript'
			}
		],
		images: []
	},
	{
		id: 'todo-cm',
		name: 'projects.projects.todoCm.name',
		mainImage: {
			alt: 'projects.projects.todoCm.mainImageAlt',
			path: '/images/projects/todo-cm/todo-cm.jpg'
		},
		description: 'projects.projects.todoCm.description',
		images: [],
		github: 'https://github.com/Cristian-F-M/todo-app-v2',
		isAppMobile: true,
		thereIsApk: false,
    highlighted: true,
		skills: [
			{
				id: 'react',
				icon: 'react',
				text: 'React'
			},
			{
				id: 'tailwindcss',
				icon: 'tailwindcss',
				text: 'Tailwindcss'
			},
			{
				id: 'expo',
				icon: 'expo',
				text: 'Expo'
			},
			{
				id: 'react-native',
				icon: 'react-native',
				text: 'React Native'
			},
			{
				id: 'sqlite',
				icon: 'sqlite',
				text: 'SQLite'
			},
			{
				id: 'typescript',
				icon: 'typescript',
				text: 'TypeScript'
			}
		]
	},
	{
		id: 'touch-command',
		name: 'projects.projects.touchCommand.name',
		description: 'projects.projects.touchCommand.description',
		github: 'https://github.com/Cristian-F-M/touch-for-powershell',
		isAppMobile: false,
		isActive: false,
		mainImage: {
			alt: 'projects.projects.touchCommand.mainImageAlt',
			path: '/images/projects/touch-command/touch-command.png'
		},
		images: [],
		skills: [
			{
				id: 'powershell',
				icon: 'powershell',
				text: 'Powershell'
			}
		]
	},
	{
		id: 'video-player',
		name: 'projects.projects.videoPlayer.name',
		description: 'projects.projects.videoPlayer.description',
		isActive: true,
		isAppMobile: false,
		github: 'https://github.com/Cristian-F-M/video-player',
		url: 'https://video-player-lemon-six.vercel.app/',
		mainImage: {
			alt: 'projects.projects.videoPlayer.mainImageAlt',
			path: '/images/projects/video-player/video-player.png'
		},
		skills: [
			{
				id: 'react',
				icon: 'react',
				text: 'React'
			},
			{
				id: 'tailwindcss',
				icon: 'tailwindcss',
				text: 'Tailwindcss'
			},
			{
				id: 'typescript',
				icon: 'typescript',
				text: 'Typescript'
			}
		],
		images: []
	},
	{
		id: 'hoja-de-vida',
		name: 'projects.projects.hojaDeVida.name',
		description: 'projects.projects.hojaDeVida.description',
		isActive: true,
		isAppMobile: false,
		github: 'https://github.com/Cristian-F-M/hoja-de-vida',
		url: 'https://hoja-de-vida-theta-nine.vercel.app/',
		mainImage: {
			alt: 'projects.projects.hojaDeVida.mainImageAlt',
			path: '/images/projects/hoja-de-vida/hoja-de-vida.png'
		},
		images: [],
		skills: [
			{
				id: 'astro',
				icon: 'astro',
				text: 'Astro'
			},
			{
				id: 'tailwindcss',
				icon: 'tailwindcss',
				text: 'Tailwindcss'
			},
			{
				id: 'javascript',
				icon: 'javascript',
				text: 'JavaScript'
			}
		]
	},
	{
		id: 'astronomy-picture-day',
		name: 'projects.projects.astronomyPictureDay.name',
		description: 'projects.projects.astronomyPictureDay.description',
		isActive: true,
		isAppMobile: false,
    highlighted: true,
		url: 'https://astronomy-picture-day.netlify.app/',
		github: 'https://github.com/Cristian-F-M/astronomy-picture-day',
		mainImage: {
			alt: 'projects.projects.astronomyPictureDay.mainImageAlt',
			path: '/images/projects/astronomy-picture-day/astronomy-picture-day.png'
		},
		images: [],
		skills: [
			{
				id: 'react',
				icon: 'react',
				text: 'React'
			},
			{
				id: 'tailwindcss',
				icon: 'tailwindcss',
				text: 'Tailwindcss'
			},
			{
				id: 'javascript',
				icon: 'javascript',
				text: 'JavaScript'
			}
		]
	},
	{
		id: 'api-votaciones-v2',
		name: 'projects.projects.votaciones.api.name',
		description: 'projects.projects.votaciones.api.description',
		isActive: false,
		isAppMobile: false,
    highlighted: true,
		mainImage: {
			alt: 'projects.projects.votaciones.api.mainImageAlt',
			path: '/images/projects/votaciones/api/api.png'
		},
		github: 'https://github.com/Cristian-F-M/api-votaciones-v2',
		images: [],
		skills: [
			{
				id: 'sequelize',
				icon: 'sequelize',
				text: 'Sequelize'
			},
			{
				id: 'typescript',
				icon: 'typescript',
				text: 'TypeScript'
			},

			{
				id: 'jsonwebtoken',
				icon: 'jsonwebtoken',
				text: 'Json Web Token (JWT)'
			},
			{
				id: 'express',
				icon: 'express',
				text: 'Express'
			},
			{
				id: 'mysql',
				icon: 'mysql',
				text: 'MySQL'
			},
			{
				id: 'sqlite',
				icon: 'sqlite',
				text: 'SQLite'
			},
			{
				id: 'node',
				icon: 'node',
				text: 'Node.js'
			}
		]
	},
	{
		id: 'buscaminas',
		name: 'projects.projects.buscaminas.name',
		description: 'projects.projects.buscaminas.description',
		isActive: true,
		isAppMobile: false,
		url: 'https://buscaminas-rho.vercel.app/',
		github: 'https://github.com/Cristian-F-M/buscaminas',
		mainImage: {
			alt: 'projects.projects.buscaminas.mainImageAlt',
			path: '/images/projects/buscaminas/buscaminas.png'
		},
		images: [],
		skills: [
			{
				id: 'html',
				icon: 'html',
				text: 'HTML'
			},
			{
				id: 'css',
				icon: 'css',
				text: 'CSS'
			},
			{
				id: 'javascript',
				icon: 'javascript',
				text: 'JavaScript'
			}
		]
	}
]
