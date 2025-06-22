import keyboardIcon from '/icons/keyboard.svg';
import guitarIcon from '/icons/guitar.svg';
import banjoIcon from '/icons/banjo.svg';
import ukeleleIcon from '/icons/ukelele.svg';
import mandolinIcon from '/icons/mandolin.svg';

import type { Displays_Icon } from '@/types';

const iconMap = {
	keyboard: keyboardIcon,
	guitar: guitarIcon,
	banjo: banjoIcon,
	ukelele: ukeleleIcon,
	mandolin: mandolinIcon,
} as const;

type IconProps = {
	name: Displays_Icon;
	className?: string;
};

export default function Icon({ name, className = '' }: IconProps) {
	return <img src={iconMap[name]} alt={name} className={className} />;
}

export type { Displays_Icon as IconName };
