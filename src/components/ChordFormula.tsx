import { useIndex } from '@/hooks/useIndex';
import { getChordInfo } from '@/lookups/Chords';

type ChordFormulaProps = {
	className?: string;
};

type IntervalsRowProps = {
	intervals: string[];
	borderStyles: string[];
};

type NotesRowProps = {
	notes: string[];
	borderStyles: string[];
};

function IntervalsRow({ intervals }: IntervalsRowProps) {
	return (
		<div className='grid' style={{ gridTemplateColumns: `repeat(${intervals.length}, 1fr)` }}>
			{intervals.map((interval, index) => (
				<div className={`text-sm font-semibold`} key={`interval-${index}`}>
					{interval}
				</div>
			))}
		</div>
	);
}

function NotesRow({ notes }: NotesRowProps) {
	return (
		<div className='grid' style={{ gridTemplateColumns: `repeat(${notes.length}, 1fr)` }}>
			{notes.map((note, index) => (
				<div className={`text-sm`} key={`note-${index}`}>
					{note}
				</div>
			))}
		</div>
	);
}

function ChordFormula({ className }: ChordFormulaProps) {
	const { tonic, getNote, variant, showNerdMode } = useIndex();

	const chordInfo = getChordInfo(variant);

	const getChordData = () => {
		const notes: string[] = [];
		const intervalLabels: string[] = [];
		const borderStyles: string[] = [];

		// Start with tonic
		notes.push(getNote(tonic));
		intervalLabels.push('1');
		borderStyles.push('double');

		// Calculate the other chord notes based on intervals
		let currentSemitones = 0;

		chordInfo.intervals.forEach(([interval, label, style]) => {
			currentSemitones += interval * 2; // Convert to semitones
			const noteIndex = (tonic + currentSemitones) % 12;
			notes.push(getNote(noteIndex));
			intervalLabels.push(label);
			borderStyles.push(style);
		});

		return { notes, intervalLabels, borderStyles };
	};

	const { notes, intervalLabels, borderStyles } = getChordData();

	return (
		<div className={`ChordFormula grid col-span-6 flex-auto ${className || ''}`}>
			{!showNerdMode && <IntervalsRow intervals={intervalLabels} borderStyles={borderStyles} />}
			<NotesRow notes={notes} borderStyles={borderStyles} />
		</div>
	);
}

export default ChordFormula;
