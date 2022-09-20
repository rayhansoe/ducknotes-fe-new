import classNames from 'classnames'
import type { ReactNode } from 'react'

type ButtonProps = {
	iconOnly?: boolean
	className?: string
	children?: ReactNode
}

export const ButtonIcon = ({ iconOnly = false, className = '', children }: ButtonProps) => {
	return (
		<button
			className={classNames(
				{
					'icon-only': iconOnly,
					'btn-icon': !iconOnly,
				},
				className
			)}>
			{children}
		</button>
	)
}
