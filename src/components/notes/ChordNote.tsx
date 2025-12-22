import { memo } from 'react';

import { useIndex } from '@/hooks/useIndex';

type ChordNoteProps = {
	note: number;
};

const ChordNote = memo(function ChordNote({ note }: ChordNoteProps) {
	const { getNote } = useIndex();
	const noteText = getNote(note);
	const hasFlat = noteText.includes('♭');
	const hasSharp = noteText.includes('♯');

	return (
		<div
			className={`ChordNote text-lg font-medium text-center ${
				hasFlat ? 'useFlat' : hasSharp ? 'useSharp' : ''
			}`}
		>
			{noteText}
		</div>
	);
});

export default ChordNote;
