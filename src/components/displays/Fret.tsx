import { useIndex } from '@/hooks/useIndex';

import AllowedNote from '@/components/AllowedNote';

type FretProps = {
	note: number;
};

function Fret({ note }: FretProps) {
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
			className='Fret w-full border-r border-black'
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

export default Fret;
