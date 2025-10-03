import { useIndex } from '@/hooks/useIndex';
import { getChordInfo, getChordFormula } from '@/lookups/Chords';

type ChordFormulaProps = {
	className?: string;
};

function ChordFormula({ className }: ChordFormulaProps) {
	const { tonic, getNote } = useIndex();

	// Get chord info from existing data structure
	const chordInfo = getChordInfo(useIndex().variant);

	// Convert semitone intervals to chord formula
	const intervals = getChordFormula(chordInfo.intervals);

	// Generate chord notes based on the intervals
	const getChordNotes = () => {
		const notes: string[] = [];

		// Start with tonic
		notes.push(getNote(tonic));

		// Calculate the other chord notes based on intervals
		let currentSemitones = 0;

		chordInfo.intervals.forEach(interval => {
			currentSemitones += interval * 2; // Convert to semitones
			const noteIndex = (tonic + currentSemitones) % 12;
			notes.push(getNote(noteIndex));
		});

		return notes;
	};

	const notes = getChordNotes();

	return (
		<div className={`grid gap-1 col-span-6 flex-auto ${className || ''}`}>
			{/* Intervals row */}
			<div
				className='grid gap-1'
				style={{ gridTemplateColumns: `repeat(${intervals.length}, 1fr)` }}
			>
				{intervals.map((interval, index) => (
					<div key={`interval-${index}`} className='p-1 font-semibold text-sm'>
						{interval}
					</div>
				))}
			</div>

			{/* Notes row */}
			<div className='grid gap-1' style={{ gridTemplateColumns: `repeat(${notes.length}, 1fr)` }}>
				{notes.map((note, index) => (
					<div key={`note-${index}`} className='p-1 text-sm'>
						{note}
					</div>
				))}
			</div>
		</div>
	);
}

export default ChordFormula;
