import type { IconName } from './components/Icon';

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

export type TriadChord = 'major' | 'minor' | 'diminished' | 'augmented';
export type SuspendedChord = 'sus2' | 'sus4';
export type PowerChord = 'power-chord';
export type AddedToneChord = 'add9' | 'minor-add9';
export type SixthChord = 'major-6' | 'minor-6';
export type SeventhChord = 'dominant-7' | 'major-7' | 'minor-7' | 'minor-major-7';
export type OtherSeventhChord =
	| 'half-diminished-7' // m7b5
	| 'diminished-7' // dim7
	| 'augmented-7'; // aug7, 7#5
export type ExtendedChord =
	| 'dominant-9'
	| 'major-9'
	| 'minor-9'
	| 'dominant-11'
	| 'major-11'
	| 'minor-11'
	| 'dominant-13'
	| 'major-13'
	| 'minor-13';
export type AlteredDominant7thChord =
	| 'dominant-7-flat-5'
	| 'dominant-7-sharp-5'
	| 'dominant-7-flat-9'
	| 'dominant-7-sharp-9'
	| 'dominant-7-sharp-11'
	| 'dominant-7-flat-13';
export type OtherAlteredChord = 'major-7-flat-5' | 'major-7-sharp-5';

export type Chord_Variant =
	| TriadChord
	| SuspendedChord
	| PowerChord
	| AddedToneChord
	| SixthChord
	| SeventhChord
	| OtherSeventhChord
	| ExtendedChord
	| AlteredDominant7thChord
	| OtherAlteredChord;

export type Displays_Text = 'Piano' | 'Guitar' | 'Banjo' | 'Ukelele' | 'Mandolin';
export type Displays_Icon = IconName;
