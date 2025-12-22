import { useIndex } from '@/hooks/useIndex';

import AllowedNote from '@/components/AllowedNote';

type NutProps = {
	note: number;
};

function Nut({ note }: NutProps) {
	const { notes, getNote, playNote, tonic, getBorderStyle } = useIndex();

	const handleKeyDown = (event: React.KeyboardEvent) => {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			playNote(note);
		}
	};

	return (
		<button
			type='button'
			className='Nut w-8 bg-black'
			title={getNote(note)}
			onClick={() => playNote(note)}
			onKeyDown={handleKeyDown}
		>
			{notes.includes(note) && (
				<AllowedNote
					note={getNote(note)}
					isTonic={note === tonic}
					borderStyle={getBorderStyle(note)}
				/>
			)}
		</button>
	);
}

export default Nut;
