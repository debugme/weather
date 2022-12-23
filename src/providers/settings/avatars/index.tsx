import { createContext, FC, PropsWithChildren, useContext, useEffect, useState } from 'react';

import { useStorage } from '../../storage';

import { Avatar1Icon } from './avatar1Icon';
import { Avatar2Icon } from './avatar2Icon';
import { Avatar3Icon } from './avatar3Icon';
import { Avatar4Icon } from './avatar4Icon';
import { Avatar5Icon } from './avatar5Icon';

const avatarMap = {
  "avatar1": <Avatar1Icon />,
  "avatar2": <Avatar2Icon />,
  "avatar3": <Avatar3Icon />,
  "avatar4": <Avatar4Icon />,
  "avatar5": <Avatar5Icon />,
}

export type AvatarSettingsValue = {
  avatar: string
  setAvatar: (_: string) => void
  avatarList: string[]
  avatarMap: Record<string, JSX.Element>
}

const initialValue: AvatarSettingsValue = {
  avatar: "avatar1",
  setAvatar: (_: string) => { },
  avatarList: Object.keys(avatarMap).sort(),
  avatarMap
}

const AvatarsContext = createContext(initialValue)

export const AvatarsProvider: FC<PropsWithChildren> = (props) => {
  const { getItem, setItem } = useStorage()
  const savedAvatar = getItem("avatar") as string
  const { avatar: _avatar, avatarList, avatarMap } = initialValue
  const initialAvatar = savedAvatar || _avatar
  const [avatar, setAvatar] = useState(initialAvatar)

  useEffect(() => setItem("avatar", avatar), [avatar])

  const { children } = props
  const { Provider } = AvatarsContext
  const value = { avatar, setAvatar, avatarList, avatarMap }

  return (
    <Provider value={value}>{children}</Provider>
  )
}

export const useAvatars = () => useContext(AvatarsContext);