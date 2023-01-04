import { useLayoutEffect, useState } from 'react'

export function useDebounce<T>(value: T, delay: number) {
	const [debouncedValue, setDebouncedValue] = useState<T>(value)

	useLayoutEffect(() => {
		const callback = () => setDebouncedValue(value)
		const cleanUp = () => clearTimeout(timeoutId)
		const timeoutId = setTimeout(callback, delay)
		return cleanUp
	}, [value, delay])

	return debouncedValue
}
