import { ChangeEventHandler, FormEventHandler, useState } from 'react'
import { Navigate } from 'react-router-dom'

import { useIcons, useLocales, useSecurity } from '../providers'
import { isValidEmail, titlecase } from '../utilities'

export const GithubIcon = () => {
	const { icons } = useIcons()
	return <img className="w-5 h-6" src={icons.github} alt="" />
}

export const Security = () => {
	const { t } = useLocales()
	const { isSignedIn, signIn } = useSecurity()
	const [email, setEmail] = useState('')
	const [isValid, setIsValid] = useState(false)

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
			<h2 className="text-3xl text-secondary-400">{titlecase(t('signIn'))}</h2>
			<form className="flex flex-col py-4 text-sm w-72" onSubmit={onSubmit}>
				<label htmlFor="email" className="pt-2 pb-4 text-sm text-secondary-400">
					{titlecase(t('typeEmail'))}
				</label>
				<input
					className="px-4 py-3 rounded-lg"
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
					<GithubIcon />
					{titlecase(t('signInWithGithub'))}
				</button>
			</form>
		</section>
	)
}
