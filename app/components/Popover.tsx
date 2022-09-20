import { ArrowRightOnRectangleIcon, Cog6ToothIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { Link } from '@remix-run/react'
import { ButtonIcon } from './ButtonIcon'

export const Popover = () => {
	return (
		<ul className='popover-items'>
			<li className='popover-item'>
				<Link to='/'>
					<UserCircleIcon className='w-4 h-4' />
					<p>Profile</p>
				</Link>
			</li>
			<li className='popover-item'>
				<Link to='/'>
					<Cog6ToothIcon className='w-4 h-4' />
					<p>Setting</p>
				</Link>
			</li>
			<li className='popover-item'>
				<Link to={'/'}>
					<ArrowRightOnRectangleIcon className='w-4 h-4' />
					<p>Logout</p>
				</Link>
			</li>
		</ul>
	)
}
