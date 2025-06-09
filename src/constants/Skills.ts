interface Skill {
	name: string
	icon: `#${string}`
	color?: string
}

export const SKILLS: Skill[] = [
	{ name: 'React', icon: '#react', color: '#1399c4' },
	{ name: 'Next.js', icon: '#next.js' },
	{ name: 'Tailwindcss', icon: '#tailwindcss', color: '#3ebff8' },
	{ name: 'HTML', icon: '#html', color: '#f16a30' },
	{ name: 'CSS', icon: '#css', color: '#2e69f2' },
	{ name: 'JavaScript', icon: '#javascript', color: '#f7e025' },
	{ name: 'TypeScript', icon: '#typescript', color: '#377cc8' },
	{ name: 'Node.js', icon: '#node', color: '#74a965' },
	{ name: 'Express', icon: '#express' },
	{ name: 'python', icon: '#python', color: '#3f76a5' },
	{ name: 'PHP', icon: '#php', color: '#7b7fb5' },
	{ name: 'Laravel', icon: '#laravel', color: '#f93831' },
	{ name: 'Flask', icon: '#flask' },
	{ name: 'MySQL', icon: '#mysql', color: '#e59208' },
	{ name: 'SQL', icon: '#sql', color: '#bad538' },
	{ name: 'SQLite', icon: '#sqlite', color: '#74c1ea' },
	{ name: 'Github', icon: '#github' },
	{ name: 'Git', icon: '#git', color: '#f1553a' },
	{ name: 'Acode', icon: '#acode', color: '#399cff' },
	{ name: 'VS Code', icon: '#vscode', color: '#2bb0f3' },
	{ name: 'Astro', icon: '#astro', color: '#ff5b0f' },
	{ name: 'Powershell', icon: '#powershell', color: '#277fcf' },
	{ name: 'Java', icon: '#java', color: '#f8a133' },
	{ name: 'Zustand', icon: '#zustand', color: '#685B4F' },
	{ name: 'Expo', icon: '#expo' },
	{ name: 'JSON Web Token (JWT)', icon: '#jsonwebtoken', color: '#d740ff' },
	{ name: 'React Native', icon: '#react-native', color: '#2de2ff' }
] as const
