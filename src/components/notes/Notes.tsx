import { memo } from 'react';

import { useIndex } from '@/hooks/useIndex';

import ChordName from './ChordName';
import ChordFormula from '../ChordFormula';

const Notes = memo(function Notes() {
	const { chordName } = useIndex();

	return (
		<div className='Notes grid grid-cols-8 gap-1 items-center border border-slate-500 bg-slate-200 text-center shadow-md min-w-4 px-1 py-2'>
			<ChordName chordName={chordName} />
			<ChordFormula />
		</div>
	);
});

export default Notes;
