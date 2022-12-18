import { createContext, FC, PropsWithChildren, useContext, useState } from 'react';

import { AvatarSettingsValue, SelectorInfo } from '../../../types';

import { Avatar1Icon } from './avatar1Icon';
import { Avatar2Icon } from './avatar2Icon';
import { Avatar3Icon } from './avatar3Icon';
import { Avatar4Icon } from './avatar4Icon';
import { Avatar5Icon } from './avatar5Icon';

const avatarInfoList: SelectorInfo[] = [
  { id: "avatar1", data: <Avatar1Icon /> },
  { id: "avatar2", data: <Avatar2Icon /> },
  { id: "avatar3", data: <Avatar3Icon /> },
  { id: "avatar4", data: <Avatar4Icon /> },
  { id: "avatar5", data: <Avatar5Icon /> }
]

const initialValue = {
  avatarInfo: avatarInfoList[0],
  setAvatarInfo: (_: string) => { },
  avatarInfoList,
}

const AvatarsContext = createContext<AvatarSettingsValue>(initialValue)

export const AvatarsProvider: FC<PropsWithChildren> = (props) => {
  const { avatarInfo: initialAvatarInfo } = initialValue

  const [avatarInfo, _setAvatarInfo] = useState(initialAvatarInfo)

  const setAvatarInfo = (id: string) => {
    const info = avatarInfoList.find(info => info.id === id)!
    _setAvatarInfo(info)
  }  

  const { children } = props
  const { Provider } = AvatarsContext  
  const value = { avatarInfo, setAvatarInfo, avatarInfoList }  

  return (
    <Provider value={value}>{children}</Provider>
  )  
}

export const useAvatars = () => useContext(AvatarsContext);