import type { border } from '@/types';

type AllowedNoteProps = {
	note: string;
	isTonic: boolean;
	borderStyle: border;
	isPiano?: boolean;
};

function AllowedNote({ note, isTonic, borderStyle, isPiano = false }: AllowedNoteProps) {
	const bgColor = isTonic ? 'bg-green-800' : 'bg-green-600';
	const fontSize = isTonic ? 'text-xxs' : 'text-xxxs';
	const hasFlat = note.includes('♭');
	const hasSharp = note.includes('♯');
	const verticalPosition = isPiano ? 'bottom-1' : 'bottom-1/2 translate-y-1/2';

	const getBorderClass = (style: border) => {
		return style === 'none' ? '' : `border-2 border-${style}`;
	};

	return (
		<span
			className={`AllowedNote absolute flex items-center justify-center ${bgColor} rounded-full text-white ${fontSize} h-4 w-4 text-center font-bold leading-none ${verticalPosition} left-1/2 translate-x-[-50%] ${getBorderClass(borderStyle)}${hasFlat ? ' hasFlat' : ''} ${hasSharp ? ' hasSharp' : ''}`}
			title={note}
		>
			{note}
		</span>
	);
}

export default AllowedNote;
