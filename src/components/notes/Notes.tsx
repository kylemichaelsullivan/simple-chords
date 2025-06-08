import { useIndex } from '@/context/useIndex';

function Notes() {
	const { notes, getNote, chordName, noteCount } = useIndex();

	return (
		<div className='Notes flex gap-1 border border-slate-500 bg-slate-200 text-center shadow-md px-1'>
			<div className='font-bold'>{chordName}</div>
			<div className={`grid grid-cols-${noteCount}`}>
				{notes.map((note: number, i: number) => (
					<div key={`${note}-${i}`}>{getNote(note)}</div>
				))}
			</div>
		</div>
	);
}

export default Notes;
