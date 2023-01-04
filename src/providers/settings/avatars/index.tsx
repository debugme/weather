import { createContext, PropsWithChildren, useContext } from 'react'
import { useSettings } from '../../../hooks'

import { packs } from './avatars.json'

const getAvatarInfo = () => {
	type AvatarMap = Record<string, JSX.Element>
	type AvatarInfo = { name: string; data: string }
	const avatarMap: AvatarMap = {}
	const reducer = (map: AvatarMap, avatarInfo: AvatarInfo) => {
		const { name, data } = avatarInfo
		const className = 'w-10 h-10 border-none my-2'
		map[name] = <img src={data} alt={name} className={className} />
		return map
	}
	packs.hipster.reduce(reducer, avatarMap)
	const avatarList = Object.keys(avatarMap)
	const avatarInfo = { avatarMap, avatarList }
	return avatarInfo
}

export type AvatarSettingsValue = {
	avatar: string
	setAvatar: (_: string) => void
	avatarList: string[]
	avatarMap: Record<string, JSX.Element>
}

const { avatarMap, avatarList } = getAvatarInfo()

const initialValue: AvatarSettingsValue = {
	avatar: avatarList[0],
	setAvatar: (_: string) => {},
	avatarList,
	avatarMap,
}

const AvatarsContext = createContext(initialValue)

export const AvatarsProvider = (props: PropsWithChildren) => {
	const {
		settings: { avatar },
		setAvatar,
	} = useSettings()

	const { children } = props
	const { Provider } = AvatarsContext
	const value = { avatar, setAvatar, avatarList, avatarMap }

	return <Provider value={value}>{children}</Provider>
}

export const useAvatars = () => useContext(AvatarsContext)
