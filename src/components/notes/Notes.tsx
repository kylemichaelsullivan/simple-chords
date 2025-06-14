import { memo } from 'react';

import { useIndex } from '@/hooks/useIndex';

import ChordName from './ChordName';
import ChordNotes from './ChordNotes';

const Notes = memo(function Notes() {
	const { notes, chordName } = useIndex();

	return (
		<div className='Notes grid grid-cols-8 gap-1 border border-slate-500 bg-slate-200 text-center shadow-md min-w-4 px-1 py-2'>
			<ChordName chordName={chordName} />
			<ChordNotes notes={notes} />
		</div>
	);
});

export default Notes;
