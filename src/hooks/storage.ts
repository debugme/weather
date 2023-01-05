import { ref, getBlob } from 'firebase/storage'
import { useEffect, useState } from 'react'

import { storage } from './firebase'

export const useStorage = <T>(path: string) => {
	const [data, setData] = useState<T>()

	useEffect(() => {
		const downloadData = async () => {
			const pathReference = ref(storage, `${path}.json`)
			const blob = await getBlob(pathReference)
			const text = await blob.text()
			const data = JSON.parse(text) as T
			setData(data)
		}

		downloadData()
	}, [path])

	return data
}
