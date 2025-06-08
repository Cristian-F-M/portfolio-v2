import { ui, defaultLang } from './ui'
import type { Path } from '@/constants/Projects'

export function getLangFromUrl(url: URL) {
	const [, lang] = url.pathname.split('/')
	if (lang in ui) return lang as keyof typeof ui
	return defaultLang
}
type LangObj = (typeof ui)[typeof defaultLang]
type TFnType = (obj: LangObj) => string

export function useTranslations(lang: keyof typeof ui) {
	return function t(key: TFnType) {
		const currentLang = structuredClone(ui[lang]) as LangObj
		const defaultLangClone = structuredClone(ui[defaultLang])

		try {
			return key(currentLang)
		} catch {
			return key(defaultLangClone)
		}
	}
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export function getValueByPath(obj: Record<string, any>, path: Path) {
	const value = path.split('.').reduce((acc, key) => acc?.[key], obj)
	if (typeof value === 'string') return value
	return ''
}
