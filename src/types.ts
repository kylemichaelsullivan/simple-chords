export type Chord_UsingFlats = boolean;
export type Chord_NoteCount = number;

export type Chord_Tonic = number;

// Re-export commonly used types for convenience (no circular dependencies)
export type { Chord_Variant, ChordData, ChordGroup, ChordInfo, border } from '@/utils/chords';

export type { Displays_Icon, Displays_Text } from '@/utils/displays';

export type { Notes_Flats, Notes_Sharps } from '@/utils/notes';
