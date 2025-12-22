import { useIndex } from '@/hooks/useIndex';
import { getChordInfo } from '@/utils';

import type { border } from '@/types';

type ChordFormulaProps = {
	className?: string;
};

type IntervalsRowProps = {
	intervals: string[];
};

function IntervalsRow({ intervals }: IntervalsRowProps) {
	return (
		<div className='grid' style={{ gridTemplateColumns: `repeat(${intervals.length}, 1fr)` }}>
			{intervals.map((interval, index) => (
				<div className='text-sm font-semibold' key={`interval-${interval}-pos-${index}`}>
					{interval}
				</div>
			))}
		</div>
	);
}

type NotesRowProps = {
	notes: string[];
	noteIndexes: number[];
};

function NotesRow({ notes, noteIndexes }: NotesRowProps) {
	const { getBorderStyle } = useIndex();

	const getBorderClass = (style: border) => {
		return style === 'none' ? '' : `border-b-3 border-${style}`;
	};

	return (
		<div className='grid' style={{ gridTemplateColumns: `repeat(${notes.length}, 1fr)` }}>
			{notes.map((note, index) => (
				<div
					className={`chordNote ${getBorderClass(getBorderStyle(noteIndexes[index]))} text-sm mx-auto`}
					key={`note-${note}-${noteIndexes[index]}-pos-${index}`}
				>
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
		const noteIndexes: number[] = [];

		// Start with tonic
		notes.push(getNote(tonic));
		intervalLabels.push('1');
		noteIndexes.push(tonic);

		// Calculate the other chord notes based on intervals
		let currentSemitones = 0;

		for (const [interval, label] of chordInfo.intervals) {
			currentSemitones += interval * 2; // Convert to semitones
			const noteIndex = (tonic + currentSemitones) % 12;
			notes.push(getNote(noteIndex));
			intervalLabels.push(label);
			noteIndexes.push(noteIndex);
		}

		return { notes, intervalLabels, noteIndexes };
	};

	const { notes, intervalLabels, noteIndexes } = getChordData();

	return (
		<div className={`ChordFormula grid col-span-6 flex-auto ${className || ''}`}>
			{!showNerdMode && <IntervalsRow intervals={intervalLabels} />}
			<NotesRow notes={notes} noteIndexes={noteIndexes} />
		</div>
	);
}

export default ChordFormula;
