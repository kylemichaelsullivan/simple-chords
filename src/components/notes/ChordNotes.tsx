import { memo } from 'react';

import ChordNote from './ChordNote';

type ChordNotesProps = {
	notes: number[];
};

const ChordNotes = memo(function ChordNotes({ notes }: ChordNotesProps) {
	return (
		<div className='ChordNotes grid grid-cols-7 col-span-6 gap-1 flex-auto'>
			{notes.map((note: number, i: number) => (
				<ChordNote key={`chord-note-${note}-pos-${i}`} note={note} />
			))}
		</div>
	);
});

export default ChordNotes;
