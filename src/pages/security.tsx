import { ChangeEventHandler, FormEventHandler, useState } from 'react'
import { Navigate } from 'react-router-dom'

import { useLocales, useSecurity /*, useThemes*/ } from '../providers'
import { isValidEmail } from '../utilities'

const GithubIcon = () => (
	<svg
		width="inherit"
		height="inherit"
		viewBox="0 0 98 96"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
			fill="--secondary-200"
		/>
	</svg>
)

export const Security = () => {
	const { t } = useLocales()
	const { isSignedIn, signIn } = useSecurity()
	const [email, setEmail] = useState('')
	const [isValid, setIsValid] = useState(false)
	// const { colorSwapper } = useThemes()

	const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
		const email = event.target.value.trim()
		setIsValid(isValidEmail(email))
		setEmail(email)
	}

	const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
		event.preventDefault()
		signIn()
	}

	if (isSignedIn) return <Navigate to="/" replace />

	return (
		<section className="flex flex-col w-3/4 mx-auto">
			<h2 className="text-3xl text-secondary-400 capitalize">{t('signIn')}</h2>
			<form className="flex flex-col py-4 w-72 text-sm" onSubmit={onSubmit}>
				<label htmlFor="email" className="text-secondary-400 pt-2 pb-4 text-sm">
					{t('typeEmail')}
				</label>
				<input
					className="py-3 px-4 rounded-lg"
					id="email"
					type="email"
					value={email}
					onChange={onChange}
				/>
				<button
					disabled={!isValid}
					className={`flex justify-center items-center gap-3 mt-4 py-3 px-4 rounded-lg text-sm text-white ${
						isValid
							? 'bg-primary-600 cursor-pointer'
							: 'bg-secondary-600 cursor-not-allowed'
					} `}
					type="submit"
				>
					<span className="h-6 w-5 text-secondary-200">
						<GithubIcon />
					</span>
					{/* <img
						className="h-6 w-5"
						src={colorSwapper(
							"data:image/svg+xml,	%3Csvg width='inherit' height='inherit' viewBox='0 0 98 96' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fillRule='evenodd' clipRule='evenodd' d='M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z' fill='--secondary-200' /%3E%3C/svg%3E",
						)}
						alt=""
					/> */}
					{t('signInWithGithub')}
				</button>
			</form>
		</section>
	)
}
