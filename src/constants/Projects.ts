import type { ui } from "@/i18n/ui";

type PathToString<T, P extends string = ""> = {
	[K in keyof T]: T[K] extends object
		? PathToString<T[K], `${P}${P extends "" ? "" : "."}${Extract<K, string>}`>
		: `${P}${P extends "" ? "" : "."}${Extract<K, string>}`;
}[keyof T];

export type Path = PathToString<(typeof ui)[keyof typeof ui]>;

interface ProjectImage {
	path: string;
	alt: Path;
}

interface Skill {
	id: string;
	text: string;
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	icon: any;
}

interface BaseProject {
	id: string;
	name: Path;
	description: Path;
	mainImage: ProjectImage;
	images: ProjectImage[];
	skills: Skill[];
	github?: string;
	type: "web" | "app" | "api" | "command";
}

type URL = `${`${"https" | "http"}://` | "www."}${string}`;

export type Project = BaseProject &
	(
		| ({
				isAppMobile: true;
		  } & ({ thereIsApk: false } | { thereIsApk: true; apkPath: string }))
		| ({ isAppMobile: false } & (
				| { isActive: true; url: URL }
				| { isActive: false }
		  ))
	);
export const PROJECTS: Project[] = [
	{
		id: "web-votaciones-v2",
		name: "projects.projects.votaciones.web.name",
		description: "projects.projects.votaciones.web.description",
		mainImage: {
			path: "/images/projects/votaciones/web/votaciones-web-login.png",
			alt: "projects.projects.votaciones.web.mainImageAlt",
		},
		github: "https://github.com/Cristian-F-M/web-votaciones-v2",
		isActive: false,
		isAppMobile: false,
		type: "web",
		images: [],
		skills: [
			{
				id: "react",
				icon: "react",
				text: "React",
			},
			{
				id: "next.js",
				icon: "next.js",
				text: "Next.js",
			},
			{
				id: "tailwindcss",
				icon: "tailwindcss",
				text: "Tailwindcss",
			},
			{
				id: "typescript",
				icon: "typescript",
				text: "TypeScript",
			},
			{
				id: "zustand",
				icon: "zustand",
				text: "Zustand",
			},
		],
	},
	{
		id: "app-votaciones-v2",
		name: "projects.projects.votaciones.app.name",
		mainImage: {
			alt: "projects.projects.votaciones.app.mainImageAlt",
			path: "/images/projects/votaciones/app/votaciones-app-login.jpg",
		},
		description: "projects.projects.votaciones.app.description",
		isAppMobile: true,
		thereIsApk: false,
		type: "app",
		github: "https://github.com/Cristian-F-M/app-votaciones-v2",
		skills: [
			{
				id: "react",
				icon: "react",
				text: "React",
			},
			{
				id: "tailwindcss",
				icon: "tailwindcss",
				text: "Tailwindcss",
			},
			{
				id: "expo",
				icon: "expo",
				text: "Expo",
			},
			{
				id: "react-native",
				icon: "react-native",
				text: "React Native",
			},
			{
				id: "typescript",
				icon: "typescript",
				text: "TypeScript",
			},
		],
		images: [
      {
        alt: 'projects.page.genericImageAlt',
        path: '/images/projects/votaciones/app/votaciones-app_1.jpg'
      },
      {
        alt: 'projects.page.genericImageAlt',
        path: '/images/projects/votaciones/app/votaciones-app_2.jpg'
      },
      {
        alt: 'projects.page.genericImageAlt',
        path: '/images/projects/votaciones/app/votaciones-app_3.jpg'
      },
      {
        alt: 'projects.page.genericImageAlt',
        path: '/images/projects/votaciones/app/votaciones-app_4.jpg'
      },
      {
        alt: 'projects.page.genericImageAlt',
        path: '/images/projects/votaciones/app/votaciones-app_5.jpg'
      }
    ],
	},
	{
		id: "todo-cm",
		name: "projects.projects.todoCm.name",
		mainImage: {
			alt: "projects.projects.todoCm.mainImageAlt",
			path: "/images/projects/todo-cm/todo-cm.jpg",
		},
		description: "projects.projects.todoCm.description",
		images: [
			{
				alt: "projects.page.genericImageAlt",
				path: "/images/projects/todo-cm/todo-cm-1.jpg",
			},
			{
				alt: "projects.page.genericImageAlt",

				path: "/images/projects/todo-cm/todo-cm-2.jpg",
			},
			{
				alt: "projects.page.genericImageAlt",

				path: "/images/projects/todo-cm/todo-cm-2.jpg",
			},
			{
				alt: "projects.page.genericImageAlt",

				path: "/images/projects/todo-cm/todo-cm-4.jpg",
			},
		],
		github: "https://github.com/Cristian-F-M/todo-app-v2",
		type: "app",
		isAppMobile: true,
		thereIsApk: true,
		apkPath: "https://pub-697125bf809a4f898288a94f7895e538.r2.dev/todocm.apk",
		skills: [
			{
				id: "react",
				icon: "react",
				text: "React",
			},
			{
				id: "tailwindcss",
				icon: "tailwindcss",
				text: "Tailwindcss",
			},
			{
				id: "expo",
				icon: "expo",
				text: "Expo",
			},
			{
				id: "react-native",
				icon: "react-native",
				text: "React Native",
			},
			{
				id: "sqlite",
				icon: "sqlite",
				text: "SQLite",
			},
			{
				id: "typescript",
				icon: "typescript",
				text: "TypeScript",
			},
		],
	},
	{
		id: "touch-command",
		name: "projects.projects.touchCommand.name",
		description: "projects.projects.touchCommand.description",
		github: "https://github.com/Cristian-F-M/touch-for-powershell",
		isAppMobile: false,
		isActive: false,
		type: "command",
		mainImage: {
			alt: "projects.projects.touchCommand.mainImageAlt",
			path: "/images/projects/touch-command/touch-command.png",
		},
		images: [
      {
        alt: 'projects.page.genericImageAlt',
        path: '/images/projects/touch-command/touch-command_1.png'
      },
      {
        alt: 'projects.page.genericImageAlt',
        path: '/images/projects/touch-command/touch-command_2.png'
      },
    ],
		skills: [
			{
				id: "powershell",
				icon: "powershell",
				text: "Powershell",
			},
		],
	},
	{
		id: "video-player",
		name: "projects.projects.videoPlayer.name",
		description: "projects.projects.videoPlayer.description",
		isActive: true,
		isAppMobile: false,
		type: "web",
		github: "https://github.com/Cristian-F-M/video-player",
		url: "https://video-player-lemon-six.vercel.app/",
		mainImage: {
			alt: "projects.projects.videoPlayer.mainImageAlt",
			path: "/images/projects/video-player/video-player.png",
		},
		skills: [
			{
				id: "react",
				icon: "react",
				text: "React",
			},
			{
				id: "tailwindcss",
				icon: "tailwindcss",
				text: "Tailwindcss",
			},
			{
				id: "typescript",
				icon: "typescript",
				text: "Typescript",
			},
		],
		images: [
      {
        alt: 'projects.page.genericImageAlt',
        path: '/images/projects/video-player/video-player_1.png'
      },
      {
        alt: 'projects.page.genericImageAlt',
        path: '/images/projects/video-player/video-player_2.png'
      }
    ],
	},
	{
		id: "hoja-de-vida",
		name: "projects.projects.hojaDeVida.name",
		description: "projects.projects.hojaDeVida.description",
		isActive: true,
		isAppMobile: false,
		type: "web",
		github: "https://github.com/Cristian-F-M/hoja-de-vida",
		url: "https://hoja-de-vida-theta-nine.vercel.app/",
		mainImage: {
			alt: "projects.projects.hojaDeVida.mainImageAlt",
			path: "/images/projects/hoja-de-vida/hoja-de-vida.png",
		},
		images: [
      {
        alt: 'projects.page.genericImageAlt',
        path: '/images/projects/hoja-de-vida/hoja-de-vida_1.png'
      },
      {
        alt: 'projects.page.genericImageAlt',
        path: '/images/projects/hoja-de-vida/hoja-de-vida_2.png'
      },
      {
        alt: 'projects.page.genericImageAlt',
        path: '/images/projects/hoja-de-vida/hoja-de-vida_3.png'
      }
    ],
		skills: [
			{
				id: "astro",
				icon: "astro",
				text: "Astro",
			},
			{
				id: "tailwindcss",
				icon: "tailwindcss",
				text: "Tailwindcss",
			},
			{
				id: "javascript",
				icon: "javascript",
				text: "JavaScript",
			},
		],
	},
	{
		id: "astronomy-picture-day",
		name: "projects.projects.astronomyPictureDay.name",
		description: "projects.projects.astronomyPictureDay.description",
		isActive: true,
		isAppMobile: false,
		type: "web",
		url: "https://astronomy-picture-day.netlify.app/",
		github: "https://github.com/Cristian-F-M/astronomy-picture-day",
		mainImage: {
			alt: "projects.projects.astronomyPictureDay.mainImageAlt",
			path: "/images/projects/astronomy-picture-day/astronomy-picture-day.png",
		},
		images: [],
		skills: [
			{
				id: "react",
				icon: "react",
				text: "React",
			},
			{
				id: "tailwindcss",
				icon: "tailwindcss",
				text: "Tailwindcss",
			},
			{
				id: "javascript",
				icon: "javascript",
				text: "JavaScript",
			},
		],
	},
	{
		id: "api-votaciones-v2",
		name: "projects.projects.votaciones.api.name",
		description: "projects.projects.votaciones.api.description",
		isActive: false,
		isAppMobile: false,
		type: "api",
		mainImage: {
			alt: "projects.projects.votaciones.api.mainImageAlt",
			path: "/images/projects/votaciones/api/api.png",
		},
		github: "https://github.com/Cristian-F-M/api-votaciones-v2",
		images: [
      {
        alt: 'projects.page.genericImageAlt',
        path: '/images/projects/votaciones/api/api_1.png'
      },
      {
        alt: 'projects.page.genericImageAlt',
        path: '/images/projects/votaciones/api/api_2.png'
      },
      {
        alt: 'projects.page.genericImageAlt',
        path: '/images/projects/votaciones/api/api_3.png'
      },
    ],
		skills: [
			{
				id: "sequelize",
				icon: "sequelize",
				text: "Sequelize",
			},
			{
				id: "typescript",
				icon: "typescript",
				text: "TypeScript",
			},

			{
				id: "jsonwebtoken",
				icon: "jsonwebtoken",
				text: "Json Web Token (JWT)",
			},
			{
				id: "express",
				icon: "express",
				text: "Express",
			},
			{
				id: "mysql",
				icon: "mysql",
				text: "MySQL",
			},
			{
				id: "sqlite",
				icon: "sqlite",
				text: "SQLite",
			},
			{
				id: "node",
				icon: "node",
				text: "Node.js",
			},
		],
	},
	{
		id: "buscaminas",
		name: "projects.projects.buscaminas.name",
		description: "projects.projects.buscaminas.description",
		isActive: true,
		isAppMobile: false,
		type: "web",
		url: "https://buscaminas-rho.vercel.app/",
		github: "https://github.com/Cristian-F-M/buscaminas",
		mainImage: {
			alt: "projects.projects.buscaminas.mainImageAlt",
			path: "/images/projects/buscaminas/buscaminas.png",
		},
		images: [
      {
        alt: 'projects.page.genericImageAlt',
        path: '/images/projects/buscaminas/buscaminas_1.png'
      },
      {
        alt: 'projects.page.genericImageAlt',
        path: '/images/projects/buscaminas/buscaminas_2.png'
      },
    ],
		skills: [
			{
				id: "html",
				icon: "html",
				text: "HTML",
			},
			{
				id: "css",
				icon: "css",
				text: "CSS",
			},
			{
				id: "javascript",
				icon: "javascript",
				text: "JavaScript",
			},
		],
	},
	{
		id: "wordle",
		description: "projects.projects.wordle.description",
		name: "projects.projects.wordle.name",
		isActive: true,
		isAppMobile: false,
		type: "web",
		url: "https://wordle-alpha-indol.vercel.app/",
		github: "https://github.com/Cristian-F-M/wordle",
		mainImage: {
			path: "/images/projects/wordle/wordle.png",
			alt: "projects.projects.wordle.mainImageAlt",
		},
		images: [],
		skills: [
			{
				id: "html",
				icon: "html",
				text: "HTML",
			},
			{
				id: "css",
				icon: "css",
				text: "CSS",
			},
			{
				id: "javascript",
				icon: "javascript",
				text: "JavaScript",
			},
			{
				id: "tailwindcss",
				icon: "tailwindcss",
				text: "Tailwindcss",
			},
		],
	},
	{
		id: "python-games-web",
		description: "projects.projects.pythonGamesWeb.description",
		name: "projects.projects.pythonGamesWeb.name",
		mainImage: {
			path: "/images/projects/python-games-web/python-games-web.png",
			alt: "projects.projects.pythonGamesWeb.mainImageAlt",
		},
		isAppMobile: false,
		isActive: true,
		type: "web",
		url: "https://python-games-web.vercel.app/",
		github: "https://github.com/Cristian-F-M/python-games-web",
		images: [
      {
        path: '/images/projects/python-games-web/python-games-web_1.png',
        alt: 'projects.page.genericImageAlt'
      },
      {
        path: '/images/projects/python-games-web/python-games-web_2.png',
        alt: 'projects.page.genericImageAlt'
      },
      {
        path: '/images/projects/python-games-web/python-games-web_3.png',
        alt: 'projects.page.genericImageAlt'
      }
    ],
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
    ],
	},
  {
    id: 'python-games-from-android',
    description: 'projects.projects.pythonGamesFromAndroid.description',
    name: 'projects.projects.pythonGamesFromAndroid.name',
    mainImage: {
      path: '/images/projects/python-games-from-android/python-games-from-android.png',
      alt: 'projects.projects.pythonGamesFromAndroid.mainImageAlt'
    },
    isAppMobile: false,
    isActive: false,
    type: 'command',
    github: 'https://github.com/Cristian-F-M/python-games-from-android',
    images: [
      {
        path: '/images/projects/python-games-from-android/python-games-from-android_1.png',
        alt: 'projects.page.genericImageAlt',
      },
      {
        path: '/images/projects/python-games-from-android/python-games-from-android_2.png',
        alt: 'projects.page.genericImageAlt',
      },
      {
        path: '/images/projects/python-games-from-android/python-games-from-android_3.png',
        alt: 'projects.page.genericImageAlt',
      }
    ],
    skills: [
      {
        id: 'python',
        icon: 'python',
        text: 'Python'
      },
      {
        id: 'acode',
        icon: 'acode',
        text: 'Acode'
      }
    ]
  }
];

export function getProjectById(id: string) {
	return PROJECTS.find((p) => p.id === id);
}
