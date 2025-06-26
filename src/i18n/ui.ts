export const languages = {
	en: 'English',
	es: 'Español'
}

export const defaultLang = 'es'

export const ui = {
	es: {
		index: {
			title:
				'Portafolio de Cristian Morales | Trainee en el desarrollo de software',
			description:
				'Trainee en el desarrollo de software enfocado en el desarrollo web con habilidades en diferentes plataformas como Móvil, Escritorio.'
		},
		networks: {
			copyMessage: 'Copiado al portapapelest',
			infoCopyMessage: 'Haz shift + clic para copiar el enlace a la red solcial'
		},
		hero: {
			description:
				'Tecnologo en <Strong>analisis y desarrollo de software</Strong> enfocado en el desarrollo web.',
			imageAlt: 'Foto de Cristian Fernando Morales Diaz'
		},
		about: {
			sectionTitle: 'Sobre mí',
			text: '<p>Me gusta <strong>adquirir</strong> nuevos conocimientos y <strong>compartirlos</strong> con los demás. Disfruto explorando la programación y la tecnología, y actualmente soy <strong>trainee</strong> en el campo del <strong>desarrollo web</strong>. Mi objetivo es seguir especializándome y avanzar hacia senior en esta área.</p> <p>Participé en un evento de desarrollo web donde obtuve el <strong>segundo</strong> lugar. Durante este evento, desarrollé un <strong>sistema de gestión</strong> para una <strong>biblioteca</strong>, completando tanto el <strong>backend</strong> como el <strong>frontend</strong>, así como la configuración de la <strong>base de datos</strong> en un lapso de 8 horas.</p>'
		},
		experience: {
			sectionTitle: 'Experiencia laboral',
			jobs: {
				wm: {
					summary:
						'Encargado de realizar pruebas de calidad a la aplicación <strong>Meters NG</strong>, verificando que todas sus funciones operaran correctamente. Esto incluía asegurar que los usuarios pudieran tomar lecturas, completar validaciones y emitir facturas sin problemas, además de revisar las configuraciones realizadas desde el portal web para garantizar una experiencia fluida en campo.'
				}
			}
		},
		education: {
			sectionTitle: 'Educación',
			studies: {
				'sena-adso': {
					certificateName: 'Tecnología en Analisís y Desarrollo de Software'
				},
				'sena-fbpj': {
					certificateName: 'Curso en fundamentos básicos en programación java'
				},
				'sena-acc': {
					certificateName: 'Apropiación de conceptops en ciberseguridad'
				}
			}
		},
		projects: {
			page: {
				title: 'Projectos realizados por Cristian Fernando Morales Diaz',
				description:
					'Lista de todos los proyectos realizados por Cristian Fernando Morales Diaz',
				mainTitle: 'Mis Proyectos',
				paragraph:
					'Una colección curada de proyectos que demuestran mi experiencia en desarrollo web moderno y tecnologías de vanguardia',
				descriptionText: 'Descripción',
				genericImageAlt:
					'Imagen donde se muestra el projecto en funcionamiento',
				activeText: {
					active: 'Proyecto activo',
					inactive: 'Proyecto inactivo'
				},
				apkAvailableText: {
					available: 'Apk disponible',
					unavailable: 'Apk no disponible'
				},
				dowloadApkText: 'Descargar apk',
				codeText: 'Código',
				stateText: 'Estado',
				seeProject: 'Ver proyecto',
				technologies: 'Tecnologías',
				projectDetails: {
					text: 'Detalles del proyecto',
					type: 'Tipo',
					id: 'ID',
					state: 'Estado',
					types: {
						web: 'Aplicación Web',
						app: 'App Móvil',
						command: 'Comando en consola',
						api: 'API'
					}
				}
			},
			sectionTitle: 'Proyectos',
			seeMoreText: 'Ver más...',
			cardProjectTitle: 'Haz clic para ver los detalles del projecto',
			seeDemoText: 'Ver demo',
			seeProjectDemoText: 'Haz clic para ver la demostración del projecto',
			seeMoreProjects: 'Ver Más Proyectos',
			projects: {
				votaciones: {
					api: {
						name: 'Api Votaciones v2',
						mainImageAlt:
							'Foto de una respuesta del proyecto Api Votaciones v2',
						description:
							'Api desarrollada con Javascript para hacer la gestión de la votaciones para el CGAO (SENA), permitiendo realizar las peticiones desde la aplicación móvile así como la web; Utilizando sqlite (o mysql) para la base de datos'
					},
					web: {
						mainImageAlt:
							'Imagen de el inicio de sesión en la aplicación web del proyecto votaciones v2',
						name: 'Web Votaciones v2',
						description:
							'Pagina web para realizar participar en las votaciones de CGAO (SENA), creación del perfil de candidato y gestión administrativa de la aplicación.'
					},
					app: {
						mainImageAlt:
							'Imagen de el inicio de sesión en la aplicación móvil del proyecto votaciones v2',
						name: 'App móvil Votaciones v2',
						description:
							'Aplicación móvil para realizar participar en las votaciones de CGAO (SENA), creación del perfil de candidato.'
					}
				},
				hojaDeVida: {
					name: 'Hoja de vida',
					mainImageAlt: 'Imagen de la pagina web hoja de vida',
					description:
						'Hoja de vida en pagina web para mostrar información sobre mí, experiencia y proyectos realizados además de información de contacto.'
				},
				todoCm: {
					name: 'TODO CM v2',
					mainImageAlt:
						'Imagen de la aplicación móvil todo cm (Lista de tareas )',
					description:
						'Aplicación de lista de tareas permitiendo organizarlas en carpetas y permitir notificar la tarea en determinado tiempo o fecha especifica.'
				},
				videoPlayer: {
					name: 'Reproductor de video',
					mainImageAlt: 'Imagen del projecto Reproductor de video',
					description:
						'Pagina web que permite cargar un video local o desde una URL para visualizarlo, con diferentes controles para navegar por el video, además de configuraciones para visualizar el video.'
				},
				touchCommand: {
					name: 'Comando Touch',
					mainImageAlt: "Imagen de ejemplo de la ejecución del comando 'touch'",
					description:
						'Comando touch para crear archivos y carpetas rapidamente.'
				},
				astronomyPictureDay: {
					name: 'Imagen astronomica del día',
					mainImageAlt: 'Imagen de el projecto Imagen astronomica del día',
					description:
						'Pagina web que hacer una petición a la api de la NASA (astonomy-picture-day) par obtener la imagen (o video) astronomica del día o de una fecha especifica, además de una descripción de la imagen'
				},
				buscaminas: {
					name: 'Buscamnias',
					mainImageAlt: 'Imagen de el proyecto Buscamnias',
					description:
						'Juego clásico de buscaminas desarrollado con HTML, CSS y JavaScript, permitiendo elegir el tamaño del tablero y guardando la preferencias.'
				},
				wordle: {
					name: 'wordle',
					description:
						'Juego para adivinar la palabra con varios intentos dandole al usuario feedback con colores de los aciertos de cada letra.',
					mainImageAlt: 'Imagen del proyecto wordle'
				}
			}
		},
		skills: {
			sectionTitle: 'Habilidades',
			endBoardText: '🚧 Has llegado al final del board'
		}
	},
	en: {
		index: {
			title: 'Cristian Morales Portfolio | Trainee in Software Development',
			description:
				'Trainee in software development focused on web development with skills in various platforms such as Mobile and Desktop.'
		},
		networks: {
			copyMessage: 'Copied to clipboard',
			infoCopyMessage: 'Shift + click to copy the link to the social network'
		},
		hero: {
			description:
				'Technologist in <strong>software analysis and development</strong> focused on web development.',
			imageAlt: 'Photo of Cristian Fernando Morales Diaz'
		},
		about: {
			sectionTitle: 'About Me',
			text: '<p>I enjoy <strong>acquiring</strong> new knowledge and <strong>sharing</strong> it with others. I like exploring programming and technology, and I am currently a <strong>trainee</strong> in the field of <strong>web development</strong>. My goal is to continue specializing and advance toward a senior role in this area.</p> <p>I participated in a web development event where I achieved <strong>second</strong> place. During the event, I developed a <strong>management system</strong> for a <strong>library</strong>, completing both the <strong>backend</strong> and the <strong>frontend</strong>, as well as the <strong>database</strong> setup within 8 hours.</p>'
		},
		experience: {
			sectionTitle: 'Work Experience',
			jobs: {
				wm: {
					summary:
						'Responsible for performing quality tests on the <strong>Meters NG</strong> application, ensuring all its functions operated correctly. This included making sure users could take readings, complete validations, and issue invoices smoothly, as well as reviewing configurations made from the web portal to ensure a seamless field experience.'
				}
			}
		},
		education: {
			sectionTitle: 'Education',
			studies: {
				'sena-adso': {
					certificateName: 'Technology in Software Analysis and Development'
				},
				'sena-fbpj': {
					certificateName: 'Course in Basic Fundamentals in Java Programming'
				},
				'sena-acc': {
					certificateName: 'Understanding of Cybersecurity Concepts'
				}
			}
		},
		projects: {
			sectionTitle: 'Projects',
			seeMoreText: 'See more...',
			cardProjectTitle: 'Click to see project details',
			seeDemoText: 'View demo',
			seeProjectDemoText: 'Click to see project demo',
			seeMoreProjects: 'See More Projects',
			page: {
				title: 'Projects completed by Cristian Fernando Morales Diaz',
				description:
					'List of all projects completed by Cristian Fernando Morales Diaz',
				mainTitle: 'My Projects',
				paragraph:
					'A curated collection of projects that showcase my expertise in modern web development and cutting-edge technologies',
				descriptionText: 'Description',
				genericImageAlt: 'Image showing the project in operation',
				activeText: {
					active: 'Active project',
					inactive: 'Inactive project'
				},
				apkAvailableText: {
					available: 'Apk available',
					unavailable: 'Apk not available'
				},
				dowloadApkText: 'Download apk',
				codeText: 'Code',
				stateText: 'Status',
				seeProject: 'View project',
				technologies: 'Technologies',
				projectDetails: {
					text: 'Project details',
					type: 'Type',
					id: 'ID',
					state: 'Status',
					types: {
						web: 'Web Application',
						app: 'Mobile App',
						command: 'Console Command',
						api: 'API'
					}
				}
			},
			projects: {
				votaciones: {
					api: {
						name: 'Voting API v2',
						mainImageAlt: 'Image of a response from the Voting API v2 project',
						description:
							'API developed with JavaScript to manage voting for CGAO (SENA), allowing requests from both the mobile and web applications; using SQLite (or MySQL) as the database.'
					},
					web: {
						mainImageAlt:
							'Image of the login screen in the Voting v2 web application',
						name: 'Voting Web v2',
						description:
							'Website for participating in CGAO (SENA) voting, creating candidate profiles, and managing the application administratively.'
					},
					app: {
						mainImageAlt:
							'Image of the login screen in the Voting v2 mobile application',
						name: 'Voting Mobile App v2',
						description:
							'Mobile app for participating in CGAO (SENA) voting, including candidate profile creation.'
					}
				},
				hojaDeVida: {
					name: 'Resume',
					mainImageAlt: 'Image of the resume webpage',
					description:
						'Resume presented as a webpage to showcase information about me, experience, and completed projects as well as contact information.'
				},
				todoCm: {
					name: 'TODO CM v2',
					mainImageAlt: 'Image of the TODO CM mobile app (Task List)',
					description:
						'Task list app that allows organization into folders and setting notifications for specific times or dates.'
				},
				videoPlayer: {
					name: 'Video Player',
					mainImageAlt: 'Image of the Video Player project',
					description:
						'Webpage that allows uploading a local or URL video for playback, with various controls for navigating and viewing settings.'
				},
				touchCommand: {
					name: 'Touch Command',
					mainImageAlt: "Example image of executing the 'touch' command",
					description: 'Touch command to quickly create files and folders.'
				},
				astronomyPictureDay: {
					name: 'Astronomy Picture of the Day',
					mainImageAlt: 'Image of the Astronomy Picture of the Day project',
					description:
						"Webpage that makes a request to NASA's API (astronomy-picture-day) to retrieve the astronomy image (or video) of the day or a specific date, including a description of the image."
				},
				buscaminas: {
					name: 'Minesweeper',
					mainImageAlt: 'Image of the Minesweeper project',
					description:
						'Classic Minesweeper game developed with HTML, CSS, and JavaScript, allowing board size selection and preference saving.'
				},
				wordle: {
					name: 'wordle',
					description:
						'A word-guessing game with several attempts, giving the user color-coded feedback on each letter correctly guessed.',
					mainImageAlt: 'Image from the Wordle project'
				}
			}
		},
		skills: {
			sectionTitle: 'Skills',
			endBoardText: '🚧 You have reached the end of the board'
		}
	}
} as const
