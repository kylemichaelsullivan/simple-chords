import type { ReactNode } from 'react';

import type {
	Chord_Tonic,
	Chord_Variant,
	Chord_UsingFlats,
	Displays_Icon,
	Chord_NoteCount,
	border,
} from '@/types';

export type IndexContextType = {
	tonic: Chord_Tonic;
	variant: Chord_Variant;
	usingFlats: Chord_UsingFlats;
	notes: number[];
	displays: Displays_Icon[];
	showNerdMode: boolean;
	chordName: string;
	noteCount: Chord_NoteCount;
	handleTonicChange: (tonic: Chord_Tonic) => void;
	handleVariantChange: (variant: Chord_Variant) => void;
	handleDisplaysClick: (icon: Displays_Icon) => void;
	capitalizeFirstLetter: (string: string) => string;
	toggleUsingFlats: () => void;
	toggleShowNerdMode: () => void;
	getNote: (note: number) => string;
	getBorderStyle: (note: number) => border;
	makeScale: (tonic: Chord_Tonic, variant: Chord_Variant) => void;
	playNote: (note: number) => void;
	reset: () => void;
};

export type IndexContextProviderProps = {
	children: ReactNode;
};
