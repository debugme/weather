import { createContext, PropsWithChildren, useContext } from "react";
import { useSettings } from "../../../hooks";

import { Avatar1Icon } from "./avatar1Icon";
import { Avatar2Icon } from "./avatar2Icon";
import { Avatar3Icon } from "./avatar3Icon";
import { Avatar4Icon } from "./avatar4Icon";
import { Avatar5Icon } from "./avatar5Icon";

const avatarMap = {
	avatar1: <Avatar1Icon />,
	avatar2: <Avatar2Icon />,
	avatar3: <Avatar3Icon />,
	avatar4: <Avatar4Icon />,
	avatar5: <Avatar5Icon />,
};

const avatarList = Object.keys(avatarMap);

export type AvatarSettingsValue = {
	avatar: string;
	setAvatar: (_: string) => void;
	avatarList: string[];
	avatarMap: Record<string, JSX.Element>;
};

const initialValue: AvatarSettingsValue = {
	avatar: avatarList[0],
	setAvatar: (_: string) => {},
	avatarList,
	avatarMap,
};

const AvatarsContext = createContext(initialValue);

export const AvatarsProvider = (props: PropsWithChildren) => {
	const {
		settings: { avatar },
		setAvatar,
	} = useSettings();

	const { children } = props;
	const { Provider } = AvatarsContext;
	const value = { avatar, setAvatar, avatarList, avatarMap };

	return <Provider value={value}>{children}</Provider>;
};

export const useAvatars = () => useContext(AvatarsContext);
