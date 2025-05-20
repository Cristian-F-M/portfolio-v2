import Instagram from '@/icons/Instagram.svg'
import Linkedin from '@/icons/Linkedin.svg'
import Github from '@/icons/Github.svg'
import Mail from '@/icons/Mail.svg'
import Twitter from '@/icons/Twitter.svg'

export interface Network {
	href: string
	id: string
	class?: string
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	icon: any
}

export const NETWORKS: Network[] = [
	{
		href: 'https://www.linkedin.com/in/devcristianmorales/',
		id: 'Linkedin',
		icon: Linkedin
	},
	{
		href: 'https://github.com/Cristian-F-M/',
		id: 'Github',
		icon: Github
	},
	{
		href: 'mailto:cfmorales.diaz@gmail.com',
		id: 'mail',
		icon: Mail
	},
	{
		href: 'https://x.com/Morales_M20',
		id: 'Twitter',
		icon: Twitter
	},
	{
		href: 'https://www.instagram.com/__cristian.morales/',
		id: 'Instagram',
		icon: Instagram
	}
]
