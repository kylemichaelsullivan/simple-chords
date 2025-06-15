import type { Chord_Variant } from '@/types';

type ChordData = {
	symbol: string;
	display: string;
	intervals: number[];
};

type ChordGroup = Record<string, ChordData>;

export const CHORDS: Record<string, ChordGroup> = {
	'Simple Triads': {
		major: { symbol: '', display: 'Major', intervals: [2, 1.5] },
		minor: { symbol: 'm', display: 'Minor', intervals: [1.5, 2] },
		'power-chord': { symbol: '5', display: 'Power Chord (5)', intervals: [3.5, 2.5] },
	},
	'Other Triads': {
		sus2: { symbol: 'sus2', display: 'Suspended 2 (sus2)', intervals: [1, 2.5] },
		sus4: { symbol: 'sus4', display: 'Suspended 4 (sus4)', intervals: [2.5, 1] },
		diminished: { symbol: 'dim', display: 'Diminished', intervals: [1.5, 1.5] },
		augmented: { symbol: 'aug', display: 'Augmented', intervals: [2, 2] },
	},
	'Sixth Chords': {
		'major-6': { symbol: '6', display: 'Major 6 (6)', intervals: [2, 1.5, 1] },
		'minor-6': { symbol: 'm6', display: 'Minor 6', intervals: [1.5, 2, 1] },
	},
	'Seventh Chords': {
		'dominant-7': { symbol: '7', display: 'Dominant 7 (7)', intervals: [2, 1.5, 1.5] },
		'major-7': { symbol: 'maj7', display: 'Major 7', intervals: [2, 1.5, 2] },
		'minor-7': { symbol: 'm7', display: 'Minor 7', intervals: [1.5, 2, 1.5] },
		'minor-major-7': { symbol: 'm(maj7)', display: 'Minor Major 7', intervals: [1.5, 2, 2] },
		'half-diminished-7': {
			symbol: 'ø7',
			display: 'Half Diminished (ø)',
			intervals: [1.5, 1.5, 2],
		},
		'diminished-7': { symbol: 'dim7', display: 'Diminished 7 (dim7)', intervals: [1.5, 1.5, 1.5] },
		'augmented-7': { symbol: 'aug7', display: 'Augmented 7 (aug7)', intervals: [2, 2, 1] },
	},
	'Ninth Chords': {
		'dominant-9': { symbol: '9', display: 'Dominant 9 (9)', intervals: [2, 1.5, 1.5, 2] },
		'major-9': { symbol: 'maj9', display: 'Major 9', intervals: [2, 1.5, 2, 1.5] },
		'minor-9': { symbol: 'm9', display: 'Minor 9', intervals: [1.5, 2, 1.5, 2] },
		add9: { symbol: 'add9', display: 'Major Add 9 (add9)', intervals: [2, 1.5, 3.5] },
		'minor-add9': { symbol: 'madd9', display: 'Minor Add 9 (madd9)', intervals: [1.5, 2, 3.5] },
		'major-minor-9': { symbol: 'mM9', display: 'Major Minor 9', intervals: [2, 1.5, 2, 1] },
		'half-diminished-9': {
			symbol: 'ø9',
			display: 'Half Diminished 9',
			intervals: [1.5, 1.5, 2, 2],
		},
		'diminished-9': { symbol: 'dim9', display: 'Diminished 9', intervals: [1.5, 1.5, 1.5, 2.5] },
		'augmented-9': { symbol: 'aug9', display: 'Augmented 9', intervals: [2, 1.5, 1.5, 2.5] },
	},
	'Eleventh Chords': {
		'dominant-11': { symbol: '11', display: 'Dominant 11 (11)', intervals: [2, 1.5, 1.5, 2, 1.5] },
		'major-11': { symbol: 'maj11', display: 'Major 11', intervals: [2, 1.5, 2, 1.5, 1.5] },
		'minor-11': { symbol: 'm11', display: 'Minor 11', intervals: [1.5, 2, 1.5, 2, 1.5] },
		add11: { symbol: 'add11', display: 'Major Add 11 (add11)', intervals: [2, 1.5, 5] },
		'minor-add11': { symbol: 'madd11', display: 'Minor Add 11 (madd11)', intervals: [1.5, 2, 5] },
		'major-minor-11': { symbol: 'mM11', display: 'Major Minor 11', intervals: [2, 1.5, 2, 1.5, 1] },
		'half-diminished-11': {
			symbol: 'ø11',
			display: 'Half Diminished 11',
			intervals: [1.5, 1.5, 2, 2, 1.5],
		},
		'diminished-11': {
			symbol: 'dim11',
			display: 'Diminished 11',
			intervals: [1.5, 1.5, 1.5, 2.5, 1.5],
		},
		'augmented-11': { symbol: 'aug11', display: 'Augmented 11', intervals: [2, 1.5, 1.5, 2, 2] },
	},
	'Thirteenth Chords': {
		'dominant-13': {
			symbol: '13',
			display: 'Dominant 13 (13)',
			intervals: [2, 1.5, 1.5, 2, 1.5, 2],
		},
		'major-13': { symbol: 'maj13', display: 'Major 13', intervals: [2, 1.5, 2, 1.5, 1.5, 2] },
		'minor-13': { symbol: 'm13', display: 'Minor 13', intervals: [1.5, 2, 1.5, 2, 1.5, 2] },
		add13: { symbol: 'add13', display: 'Major Add 13 (add13)', intervals: [2, 1.5, 1] },
		'minor-add13': { symbol: 'madd13', display: 'Minor Add 13 (madd13)', intervals: [1.5, 2, 1] },
		'major-minor-13': {
			symbol: 'mM13',
			display: 'Major Minor 13',
			intervals: [2, 1.5, 2, 1.5, 1.5, 1.5],
		},
		'half-diminished-13': {
			symbol: 'ø13',
			display: 'Half Diminished 13',
			intervals: [1.5, 1.5, 2, 2, 1.5, 2],
		},
		'diminished-13': {
			symbol: 'dim13',
			display: 'Diminished 13',
			intervals: [1.5, 1.5, 1.5, 2.5, 1.5, 2],
		},
		'augmented-13': { symbol: 'aug13', display: 'Augmented 13', intervals: [2, 2, 1, 2, 1.5, 2] },
	},
	'Altered Chords': {
		'dominant-7-flat-5': {
			symbol: '7♭5',
			display: 'Dominant 7 Flat 5 (7♭5)',
			intervals: [2, 1, 2],
		},
		'dominant-7-sharp-5': {
			symbol: '7♯5',
			display: 'Dominant 7 Sharp 5 (7♯5)',
			intervals: [2, 2, 1],
		},
		'dominant-7-flat-9': {
			symbol: '7♭9',
			display: 'Dominant 7 Flat 9 (7♭9)',
			intervals: [2, 1.5, 1.5, 1.5],
		},
		'dominant-7-sharp-9': {
			symbol: '7♯9',
			display: 'Dominant 7 Sharp 9 (7♯9)',
			intervals: [2, 1.5, 1.5, 2.5],
		},
		'dominant-7-flat-11': {
			symbol: '7♭11',
			display: 'Dominant 7 Flat 11 (7♭11)',
			intervals: [2, 1.5, 1.5, 2, 1],
		},
		'dominant-7-sharp-11': {
			symbol: '7♯11',
			display: 'Dominant 7 Sharp 11 (7♯11)',
			intervals: [2, 1.5, 1.5, 2, 2],
		},
		'dominant-7-flat-13': {
			symbol: '7♭13',
			display: 'Dominant 7 Flat 13 (7♭13)',
			intervals: [2, 1.5, 1.5, 2, 1.5, 1.5],
		},
		'dominant-7-sharp-13': {
			symbol: '7♯13',
			display: 'Dominant 7 Sharp 13 (7♯13)',
			intervals: [2, 1.5, 1.5, 2, 1.5, 2.5],
		},
		'major-7-flat-5': {
			symbol: 'maj7♭5',
			display: 'Major 7 Flat 5 (maj7♭5)',
			intervals: [2, 1, 2.5],
		},
		'major-7-sharp-5': {
			symbol: 'maj7♯5',
			display: 'Major 7 Sharp 5 (maj7♯5)',
			intervals: [2, 2, 1.5],
		},
		'major-7-flat-9': {
			symbol: 'maj7♭9',
			display: 'Major 7 Flat 9 (maj7♭9)',
			intervals: [2, 1.5, 1.5, 1.5],
		},
		'major-7-sharp-9': {
			symbol: 'maj7♯9',
			display: 'Major 7 Sharp 9 (maj7♯9)',
			intervals: [2, 1.5, 1.5, 2.5],
		},
		'major-7-flat-11': {
			symbol: 'maj7♭11',
			display: 'Major 7 Flat 11 (maj7♭11)',
			intervals: [2, 1.5, 1.5, 2, 1],
		},
		'major-7-sharp-11': {
			symbol: 'maj7♯11',
			display: 'Major 7 Sharp 11 (maj7♯11)',
			intervals: [2, 1.5, 1.5, 2, 2],
		},
		'major-7-flat-13': {
			symbol: 'maj7♭13',
			display: 'Major 7 Flat 13 (maj7♭13)',
			intervals: [2, 1.5, 1.5, 2, 1.5, 1.5],
		},
		'major-7-sharp-13': {
			symbol: 'maj7♯13',
			display: 'Major 7 Sharp 13 (maj7♯13)',
			intervals: [2, 1.5, 1.5, 2, 1.5, 2.5],
		},
	},
} as const;

export const getChordInfo = (variant: Chord_Variant): ChordData => {
	for (const group of Object.values(CHORDS)) {
		if (variant in group) {
			return group[variant];
		}
	}

	const normalizedVariant = variant.toLowerCase().replace(/-/g, '');
	for (const group of Object.values(CHORDS)) {
		for (const [key, data] of Object.entries(group)) {
			const normalizedKey = key.toLowerCase().replace(/-/g, '');
			if (normalizedKey === normalizedVariant) {
				return data;
			}
		}
	}

	return CHORDS['Simple Triads'].major;
};

export const getChordGroups = () => Object.keys(CHORDS);

export const getChordVariants = (group: string) => Object.keys(CHORDS[group]);
