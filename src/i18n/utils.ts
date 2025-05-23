import { ui, defaultLang } from './ui'

export function getLangFromUrl(url: URL) {
	const [, lang] = url.pathname.split('/')
	if (lang in ui) return lang as keyof typeof ui
	return defaultLang
}

type TFnType = (obj: (typeof ui)[keyof typeof ui]) => string

export function useTranslations(lang: keyof typeof ui) {
	return function t(key: TFnType) {
		const currentLang = structuredClone(ui[lang])
		const defaultLangClone = structuredClone(ui[defaultLang])
		return key(currentLang) || key(defaultLangClone)
	}
}
