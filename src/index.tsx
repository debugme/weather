import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import {
	IconsProvider,
	SecurityProvider,
	SettingsProvider,
	WeatherProvider,
} from './providers'

import './index.css'
import { Application } from './application'

const container = document.getElementById('root')!
const root = createRoot(container)

root.render(
	<StrictMode>
		<BrowserRouter>
			<SecurityProvider>
				<SettingsProvider>
					<WeatherProvider>
						<IconsProvider>
							<Application />
						</IconsProvider>
					</WeatherProvider>
				</SettingsProvider>
			</SecurityProvider>
		</BrowserRouter>
	</StrictMode>,
)
