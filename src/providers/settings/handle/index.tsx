import { createContext, PropsWithChildren, useContext } from "react";
import { useSettings } from "../../../hooks";

type HandleValue = {
	handle: string;
	setHandle: (_: string) => void;
};

const initialValue: HandleValue = {
	handle: "",
	setHandle: (_: string) => {},
};

const HandleContext = createContext(initialValue);

export const HandleProvider = (props: PropsWithChildren) => {
	const {
		settings: { handle },
		setHandle,
	} = useSettings();

	const { children } = props;
	const { Provider } = HandleContext;
	const value = { handle, setHandle };

	return <Provider value={value}>{children}</Provider>;
};

export const useHandle = () => useContext(HandleContext);
