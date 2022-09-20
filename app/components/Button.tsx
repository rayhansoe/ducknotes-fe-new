import classNames from 'classnames'
import type { ReactNode } from 'react'

type ButtonProps = {
	size?: 'btn-xs' | 'btn-sm' | 'btn-base' | 'btn-md' | 'btn-lg' | 'btn-xl'
	isCTA?: boolean
	isOutlined?: boolean
	isWide?: boolean
	isUppercase?: boolean
	isCapitalize?: boolean
	iconOnly?: boolean
	children?: ReactNode
	className?: string
}

export const Button = ({
	size = 'btn-base',
	isCTA = false,
	isOutlined = false,
	isWide = false,
	isUppercase = false,
	isCapitalize = false,
	className = '',
	children,
}: ButtonProps) => {
	return (
		<button
			className={classNames(
				size,
				{
					cta: isCTA,
					outlined: isOutlined,
					wide: isWide,
					uppercase: isUppercase,
					capitalize: isCapitalize,
				},
				className
			)}>
			{children}
		</button>
	)
}
