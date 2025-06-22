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

export type SimpleTriad = 'major' | 'minor' | 'power-chord';

export type OtherTriad = 'sus2' | 'sus4' | 'diminished' | 'augmented';

export type SixthChord = 'major-6' | 'minor-6';

export type SeventhChord =
	| 'dominant-7'
	| 'major-7'
	| 'minor-7'
	| 'minor-major-7'
	| 'half-diminished-7'
	| 'diminished-7'
	| 'augmented-7';

export type NinthChord =
	| 'dominant-9'
	| 'major-9'
	| 'minor-9'
	| 'add9'
	| 'minor-add9'
	| 'major-minor-9'
	| 'half-diminished-9'
	| 'diminished-9'
	| 'augmented-9';

export type EleventhChord =
	| 'dominant-11'
	| 'major-11'
	| 'minor-11'
	| 'add11'
	| 'minor-add11'
	| 'major-minor-11'
	| 'half-diminished-11'
	| 'diminished-11'
	| 'augmented-11';

export type ThirteenthChord =
	| 'dominant-13'
	| 'major-13'
	| 'minor-13'
	| 'add13'
	| 'minor-add13'
	| 'major-minor-13'
	| 'half-diminished-13'
	| 'diminished-13'
	| 'augmented-13';

export type AlteredChord =
	| 'dominant-7-flat-5'
	| 'dominant-7-sharp-5'
	| 'dominant-7-flat-9'
	| 'dominant-7-sharp-9'
	| 'dominant-7-flat-11'
	| 'dominant-7-sharp-11'
	| 'dominant-7-flat-13'
	| 'dominant-7-sharp-13'
	| 'major-7-flat-5'
	| 'major-7-sharp-5'
	| 'major-7-flat-9'
	| 'major-7-sharp-9'
	| 'major-7-flat-11'
	| 'major-7-sharp-11'
	| 'major-7-flat-13'
	| 'major-7-sharp-13';

export type Chord_Variant =
	| 'major'
	| 'minor'
	| 'power-chord'
	| 'sus2'
	| 'sus4'
	| 'diminished'
	| 'augmented'
	| 'major-6'
	| 'minor-6'
	| 'dominant-7'
	| 'major-7'
	| 'minor-7'
	| 'minor-major-7'
	| 'half-diminished-7'
	| 'diminished-7'
	| 'augmented-7'
	| 'dominant-9'
	| 'major-9'
	| 'minor-9'
	| 'add9'
	| 'minor-add9'
	| 'major-minor-9'
	| 'half-diminished-9'
	| 'diminished-9'
	| 'augmented-9'
	| 'dominant-11'
	| 'major-11'
	| 'minor-11'
	| 'add11'
	| 'minor-add11'
	| 'major-minor-11'
	| 'half-diminished-11'
	| 'diminished-11'
	| 'augmented-11'
	| 'dominant-13'
	| 'major-13'
	| 'minor-13'
	| 'add13'
	| 'minor-add13'
	| 'major-minor-13'
	| 'half-diminished-13'
	| 'diminished-13'
	| 'augmented-13'
	| 'dominant-7-flat-5'
	| 'dominant-7-sharp-5'
	| 'dominant-7-flat-9'
	| 'dominant-7-sharp-9'
	| 'dominant-7-flat-11'
	| 'dominant-7-sharp-11'
	| 'dominant-7-flat-13'
	| 'dominant-7-sharp-13'
	| 'major-7-flat-5'
	| 'major-7-sharp-5'
	| 'major-7-flat-9'
	| 'major-7-sharp-9'
	| 'major-7-flat-11'
	| 'major-7-sharp-11'
	| 'major-7-flat-13'
	| 'major-7-sharp-13';

export type ChordData = {
	symbol: string;
	display: string;
	intervals: number[];
};

export type ChordGroup = Record<string, ChordData>;

export type Displays_Text = 'Piano' | 'Guitar' | 'Banjo' | 'Ukelele' | 'Mandolin';
export type Displays_Icon = 'keyboard' | 'guitar' | 'banjo' | 'ukelele' | 'mandolin';
