import { createContext, PropsWithChildren, useContext } from 'react'
import { useSettings, useStorage } from '../../../hooks'

type AvatarMap = Record<string, JSX.Element>

type AvatarInfo = { name: string; data: string }

type AvatarData = {
	packs: {
		[name: string]: AvatarInfo[]
	}
}

type AvatarSettingsValue = {
	avatar: string
	setAvatar: (_: string) => void
	avatarList: string[]
	avatarMap: Record<string, JSX.Element>
}

const getAvatarInfo = (avatars: AvatarData) => {
	const avatarMap: AvatarMap = {}
	const avatarList: string[] = []

	if (avatars) {
		const reducer = (map: AvatarMap, avatarInfo: AvatarInfo) => {
			const { name, data } = avatarInfo
			const className = 'w-10 h-10 my-2 border-none'
			map[name] = <img src={data} alt={name} className={className} />
			return map
		}
		avatars.packs.hipster.reduce(reducer, avatarMap)
		avatarList.push(...Object.keys(avatarMap))
	}

	return { avatarMap, avatarList }
}

const initialValue: AvatarSettingsValue = {
	avatar: '',
	setAvatar: (_: string) => {},
	avatarList: [],
	avatarMap: {},
}

const AvatarsContext = createContext(initialValue)

export const AvatarsProvider = (props: PropsWithChildren) => {
	const {
		settings: { avatar },
		setAvatar,
	} = useSettings()

	const avatars = useStorage<AvatarData>('avatars')!
	const { avatarList, avatarMap } = getAvatarInfo(avatars)

	const { children } = props
	const { Provider } = AvatarsContext
	const value = { avatar, setAvatar, avatarList, avatarMap }

	return <Provider value={value}>{children}</Provider>
}

export const useAvatars = () => useContext(AvatarsContext)
