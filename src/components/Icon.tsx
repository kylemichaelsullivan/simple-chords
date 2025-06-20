import keyboardIcon from '/icons/keyboard.svg';
import guitarIcon from '/icons/guitar.svg';
import banjoIcon from '/icons/banjo.svg';
import ukeleleIcon from '/icons/ukelele.svg';
import mandolinIcon from '/icons/mandolin.svg';

const iconMap = {
	keyboard: keyboardIcon,
	guitar: guitarIcon,
	banjo: banjoIcon,
	ukelele: ukeleleIcon,
	mandolin: mandolinIcon,
} as const;

type IconName = keyof typeof iconMap;

type IconProps = {
	name: IconName;
	className?: string;
};

export default function Icon({ name, className = '' }: IconProps) {
	return <img src={iconMap[name]} alt={name} className={className} />;
}

export type { IconName };
