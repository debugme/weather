## Introduction
Cloudz™️ is a web application that allows a user to get weather forecasts for different cities.

<img width="963" alt="cloudz" src="https://user-images.githubusercontent.com/2932374/205350652-7329d333-5f5c-4c9e-b793-147b2c20b51f.png">

This information includes the following for each day for which a forecast is retrieved
- date - the forecast day
- time - the forecast time
- temperature - the temperature
- wind - the wind speed
- sunrise - the sunrise time
- sunset -  the sunset time


## How to Run

Add your [Open Weather Map](https://openweathermap.org/) API key in a file called `.env.local` in your project root folder

```
VITE_WEATHER_APP_ID=aa0a0a0a0a0a0a00a0a0a0a0a0a0aaa0
```

Before you can run the application you need to install its dependencies

```
% npm install
```

Now you can run the application in development mode

```
% npm run dev
```

To see the application visit the following URL in your browser

```
http://localhost:5173/
```

## Technologies
This application was written using an intentionally minimal set of libraries

- [React](https://reactjs.org/) - the industry standard for building modern web applications 
- [TypeScript](https://www.typescriptlang.org/) - used to provide type safety over plain JavaScript
- [Tailwind](https://tailwindcss.com/) - a lightweight utility-first CSS framework for styling
- [React Router DOM](https://reactrouter.com/) - used to provide client-side routing
- [Vite](https://vitejs.dev/) - a bundler used to provide a better development experience

## Architecture
This application follows a standard approach to building a single page application.
- Pages - contains the home page (In the future, additional pages would be added here)
- Components - houses the components used by the pages
- Providers - hold application state and exposes it via hooks
- Hooks - custom hooks for fetching location and weather information
- Types - a set of common types used across the application

## Responsive
I like to use a mobile-first approach that scales to tablet, laptop and desktop. 

You can resize the browser width to see how the application adjusts accordingly.

## User Experience
I like to build applications that provide feedback on actions and clarity of context
- Search - a spinner in the search field reassures the user that something is happening
- Spacing - elements are spaced out and and easy to differentiate from each other 
- Typography - the font used allows for easy reading on both small and large screens
- Theming - you can toggle between warm and cool themes via the settings menu

## Developer Experience
Each breakpoint required potentially different styles.

But it was not always clear what the active breakpoint was.

To make this easier for myself, I added visual cues in the footer.

That way I could resize the browser and know what breakpoint was active.

You can see them in action by resizing the browser window width and looking at the changing footer icons and label.

If you do not want to see them, you can click them to toggle their display.

## Future Improvements
Given more time, there are several changes I would like to make
- I18N - Use a language/localisation library instead of hard-coded strings
- A11Y - Add support for accessibility for users with specific impairments
- PWA - Add support for allowing the application to behave better when offline
- Performance - Cache responses in session storage to save on repeated network calls
- Testing - Add E2E and Unit Tests for increased confidence in correctness
- Compatability - Test across different browsers, browser versions and operating systems
- Usability - Test application against actual users to improve UI/UX
