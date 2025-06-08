import type { ReactNode } from 'react';

import type {
	Chord_Tonic,
	Chord_Variant,
	Chord_UsingFlats,
	Displays_Icon,
	Chord_NoteCount,
} from '@/types';

export type IndexContextType = {
	tonic: Chord_Tonic;
	variant: Chord_Variant;
	usingFlats: Chord_UsingFlats;
	notes: number[];
	displays: Displays_Icon[];
	showNoteLabels: boolean;
	chordName: string;
	noteCount: Chord_NoteCount;
	handleTonicChange: (tonic: number) => void;
	handleVariantChange: (variant: Chord_Variant) => void;
	handleDisplaysClick: (icon: Displays_Icon) => void;
	capitalizeFirstLetter: (string: string) => string;
	toggleUsingFlats: () => void;
	toggleShowNoteLabels: () => void;
	getNote: (note: number) => string;
	makeScale: (tonic: Chord_Tonic, variant: Chord_Variant) => void;
	playNote: (note: number) => void;
	reset: () => void;
};

export type IndexContextProviderProps = {
	children: ReactNode;
};
