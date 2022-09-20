import { Link } from '@remix-run/react'
import { ArrowLongRightIcon, PlusIcon } from '@heroicons/react/24/solid'
import { Button } from '~/components/Button'
import { ButtonIcon } from '~/components/ButtonIcon'
import { Popover } from '~/components/Popover'

export default function Index() {
	return (
		<div>
			<ul className='flex justify-between items-center p-5'>
				<Link to='/' className='text-2xl font-bold'>
					Ducknotes
				</Link>
				<li>
					{/* <button className='btn-xs cta '>Get Started</button> */}
					<Link to={'/posts'}>
						<Button size='btn-xs' isCTA>
							Get Started
						</Button>
					</Link>
				</li>
			</ul>
			<ul className='flex flex-col gap-3 p-5'>
				<li>
					<Button size='btn-base' isOutlined>
						Create Note
					</Button>
				</li>
				<li>
					<Button isWide isCTA isOutlined isUppercase>
						Create Note
					</Button>
				</li>
				<Button size='btn-md' isWide isCTA isUppercase>
					Create Note
				</Button>
				<button className='btn-base outlined wide'>Create Note</button>
				<Button size='btn-xl' isCTA isUppercase className=''>
					<p>Button</p>
					<ArrowLongRightIcon className='w-7 h-6' />
				</Button>
				<Button size='btn-lg' isUppercase isCTA className=''>
					Button
					<PlusIcon width='20' height='20' strokeWidth={'2'} />
				</Button>
				<ButtonIcon>
					<PlusIcon className='h-6 w-6' />
				</ButtonIcon>
				<ButtonIcon iconOnly>
					<PlusIcon className='h-6 w-6' />
				</ButtonIcon>
				<Popover />
			</ul>
		</div>
	)
}
