import Icon from '@/components/Icon';

import type { Displays_Icon } from '@/types';

type LabelProps = {
	icon: Displays_Icon;
	title: string;
};

export default function Label({ icon, title }: LabelProps) {
	return (
		<div className='Label flex flex-col items-center justify-center gap-2' title={title}>
			<Icon name={icon} className='h-6 w-6' />
			<span className='hidden text-xs font-bold sm:block'>{title}</span>
		</div>
	);
}
