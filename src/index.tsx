import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import {
	SecurityProvider,
	SettingsProvider,
	WeatherProvider,
} from "./providers";

import "./index.css";
import { Application } from "./application";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
	<StrictMode>
		<BrowserRouter>
			<SecurityProvider>
				<SettingsProvider>
					<WeatherProvider>
						<Application />
					</WeatherProvider>
				</SettingsProvider>
			</SecurityProvider>
		</BrowserRouter>
	</StrictMode>,
);
