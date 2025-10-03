export type Notes_Flats =
	| 'C'
	| 'D♭'
	| 'D'
	| 'E♭'
	| 'E'
	| 'F'
	| 'G♭'
	| 'G'
	| 'A♭'
	| 'A'
	| 'B♭'
	| 'B';

export type Notes_Sharps =
	| 'C'
	| 'C♯'
	| 'D'
	| 'D♯'
	| 'E'
	| 'F'
	| 'F♯'
	| 'G'
	| 'G♯'
	| 'A'
	| 'A♯'
	| 'B';

export type Chord_UsingFlats = boolean;
export type Chord_NoteCount = number;

export type Chord_Tonic = number;

export type ChordInfo = {
	symbol: string;
	display: string;
};

const SIMPLE_TRIADS = ['major', 'minor', 'power-chord'] as const;

const OTHER_TRIADS = ['sus2', 'sus4', 'diminished', 'augmented'] as const;

const SIXTH_CHORDS = ['major-6', 'minor-6'] as const;

const SIXTH_NINTH_CHORDS = ['major-6-9', 'minor-6-9'] as const;

const SEVENTH_CHORDS = [
	'major-7',
	'dominant-7',
	'minor-7',
	'minor-major-7',
	'augmented-major-7',
	'augmented-dominant-7',
	'half-diminished-7',
	'diminished-7',
] as const;

const NINTH_CHORDS = [
	'major-9',
	'dominant-9',
	'minor-9',
	'minor-major-9',
	'add9',
	'minor-add9',
	'augmented-dominant-9',
	'dominant-7-flat-9',
	'dominant-7-sharp-9',
	'half-diminished-9',
	'diminished-9',
] as const;

const ELEVENTH_CHORDS = [
	'major-11',
	'dominant-11',
	'minor-11',
	'add11',
	'minor-add11',
	'augmented-dominant-11',
	'dominant-7-sharp-11',
	'half-diminished-11',
	'diminished-11',
] as const;

const THIRTEENTH_CHORDS = [
	'major-13',
	'dominant-13',
	'minor-13',
	'add13',
	'minor-add13',
	'augmented-dominant-13',
	'dominant-7-flat-13',
	'half-diminished-13',
	'diminished-13',
] as const;

const ALTERED_CHORDS = [
	'major-7-sharp-5',
	'major-7-flat-5',
	'dominant-7-sharp-5',
	'dominant-7-flat-5',
	'dominant-7-sharp-9',
	'dominant-7-flat-9',
	'major-7-sharp-9',
	'major-7-flat-9',
	'dominant-7-sharp-11',
	'dominant-7-flat-11',
	'major-7-sharp-11',
	'major-7-flat-11',
	'dominant-7-sharp-13',
	'dominant-7-flat-13',
	'major-7-sharp-13',
	'major-7-flat-13',
	'dominant-7-alt',
] as const;

const SUSPENDED_CHORDS = [
	'sus2',
	'sus4',
	'dominant-7-sus4',
	'dominant-9-sus4',
	'dominant-13-sus4',
] as const;

export type SimpleTriad = (typeof SIMPLE_TRIADS)[number];
export type OtherTriad = (typeof OTHER_TRIADS)[number];
export type SixthChord = (typeof SIXTH_CHORDS)[number];
export type SixthNinthChord = (typeof SIXTH_NINTH_CHORDS)[number];
export type SeventhChord = (typeof SEVENTH_CHORDS)[number];
export type NinthChord = (typeof NINTH_CHORDS)[number];
export type EleventhChord = (typeof ELEVENTH_CHORDS)[number];
export type ThirteenthChord = (typeof THIRTEENTH_CHORDS)[number];
export type AlteredChord = (typeof ALTERED_CHORDS)[number];
export type SuspendedChord = (typeof SUSPENDED_CHORDS)[number];

export type Chord_Variant =
	| SimpleTriad
	| OtherTriad
	| SixthChord
	| SixthNinthChord
	| SeventhChord
	| NinthChord
	| EleventhChord
	| ThirteenthChord
	| AlteredChord
	| SuspendedChord;

type interval = number;
type label = string;
type nerdSymbol = string;
type jazzSymbol = string;
export type border = 'double' | 'solid' | 'dashed' | 'dotted' | 'none';

export type ChordData = {
	display: string;
	intervals: [interval, label, border][];
	symbols: [nerdSymbol, jazzSymbol];
};

export type ChordGroup = Record<string, ChordData>;

export type Displays_Text = 'Piano' | 'Guitar' | 'Banjo' | 'Ukelele' | 'Mandolin';
export type Displays_Icon = 'keyboard' | 'guitar' | 'banjo' | 'ukelele' | 'mandolin';

export {
	SIMPLE_TRIADS,
	OTHER_TRIADS,
	SIXTH_CHORDS,
	SIXTH_NINTH_CHORDS,
	SEVENTH_CHORDS,
	NINTH_CHORDS,
	ELEVENTH_CHORDS,
	THIRTEENTH_CHORDS,
	ALTERED_CHORDS,
	SUSPENDED_CHORDS,
};
