class Toast extends HTMLElement {
	timeOut: null | NodeJS.Timeout
	duration: number
	startTime: number | undefined
	elapsed: number | undefined

	constructor() {
		super()

		this.timeOut = null
		this.duration = 6000 // ms
		this.startTime
		this.elapsed

		this.addEventListener('mouseenter', () => {
			if (!this.timeOut) return
			clearTimeout(this.timeOut)
			this.timeOut = null
			const elapsed = Date.now() - (this.startTime || 0)
			this.duration -= elapsed
		})

		this.addEventListener('mouseleave', this.startTimeOut)
	}

	startTimeOut() {
		this.startTime = Date.now()
		this.timeOut = setTimeout(
			() => this.classList.remove('show'),
			this.duration
		)
	}

	show(message: string, options?: { duration: number }) {
		if (this.classList.contains('show')) {
			if (this.timeOut) clearTimeout(this.timeOut)
			this.classList.remove('show')
			this.timeOut = null
		}

		this.innerHTML = `<span>${message}</span>`
		this.classList.add('show')
		this.duration = options?.duration || this.duration

		this.startTimeOut()
	}
}

customElements.define('cm-toast', Toast)
