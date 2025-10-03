import { useIndex } from '@/hooks/useIndex';

import AllowedNote from '@/components/AllowedNote';

type NutProps = {
	note: number;
};

function Nut({ note }: NutProps) {
	const { notes, getNote, playNote, tonic, getBorderStyle } = useIndex();

	return (
		<div className='Nut w-8 bg-black' title={getNote(note)} onClick={() => playNote(note)}>
			{notes.includes(note) && (
				<AllowedNote
					note={getNote(note)}
					isTonic={note === tonic}
					borderStyle={getBorderStyle(note)}
				/>
			)}
		</div>
	);
}

export default Nut;
