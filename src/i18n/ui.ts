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
			copyMessage: 'Copiado al portapapelest'
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
			sectionTitle: 'Proyectos',
			projects: {
				votaciones: {
					web: {
						login: {
							mainImageAlt:
								'Imagen de el inicio de sesión en la aplicación web del proyecto votaciones v2'
						}
					},
					app: {
						login: {
							mainImageAlt:
								'Imagen de el inicio de sesión en la aplicación móvil del proyecto votaciones v2'
						}
					}
				},
				hojaDeVida: {
					mainImageAlt: 'Imagen de la pagina web hoja de vida'
				},
				todoCm: {
					mainImageAlt:
						'Imagen de la aplicación móvil todo cm (Lista de tareas )'
				},
				videoPlayer: {
					mainImageAlt:
						'Imagen de la aplicación web video player (Reproductor de video)'
				}
			}
		}
	},
	en: {
		index: {
			title: 'Cristian Morales Portfolio | Software Development Trainee',
			description:
				'Software development trainee focused on web development with skills in various platforms such as Mobile and Desktop.'
		},
		networks: {
			copyMessage: 'Copied to clipboard'
		},
		hero: {
			description:
				'Technologist in <strong>software analysis and development</strong> focused on web development.',
			imageAlt: 'Photo of Cristian Fernando Morales Diaz'
		},
		about: {
			sectionTitle: 'About me',
			text: '<p>I enjoy <strong>acquiring</strong> new knowledge and <strong>sharing it</strong> with others. I love exploring programming and technology, and I am currently a <strong>trainee</strong> in the field of <strong>web development</strong>. My goal is to continue specializing and advance to a senior level in this area.</p> <p>I participated in a web development event where I achieved <strong>second</strong> place. During the event, I developed a <strong>management system</strong> for a <strong>library</strong>, completing both the <strong>backend</strong> and <strong>frontend</strong>, as well as configuring the <strong>database</strong> in just 8 hours.</p>'
		},
		experience: {
			sectionTitle: 'Work Experience',
			jobs: {
				wm: {
					summary:
						'Responsible for conducting quality assurance tests on the <strong>Meters NG</strong> application, ensuring that all features worked correctly. This included verifying that users could take readings, complete validations, and issue invoices without problems, as well as reviewing configurations made from the web portal to ensure a smooth field experience.'
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
					certificateName: 'Course in Basic Java Programming Fundamentals'
				},
				'sena-acc': {
					certificateName: 'Understanding of Cybersecurity Concepts'
				}
			}
		},
		projects: {
			sectionTitle: 'Projects',
			projects: {
				votaciones: {
					web: {
						login: {
							mainImageAlt:
								'Image of the login screen of the web app for the Votaciones v2 project'
						}
					},
					app: {
						login: {
							mainImageAlt:
								'Image of the login screen of the mobile app for the Votaciones v2 project'
						}
					}
				},
				hojaDeVida: {
					mainImageAlt: 'Image of the Hoja de Vida web page'
				},
				todoCm: {
					mainImageAlt: 'Image of the Todo CM mobile app (Task list)'
				},
				videoPlayer: {
					mainImageAlt: 'Image of the Video Player web app'
				}
			}
		}
	}
} as const
