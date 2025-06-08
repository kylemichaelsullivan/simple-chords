import type { Notes_Flats, Notes_Sharps, Chord_Variant } from '@/types';

export const Flats: Notes_Flats[] = [
	'C',
	'D♭',
	'D',
	'E♭',
	'E',
	'F',
	'G♭',
	'G',
	'A♭',
	'A',
	'B♭',
	'B',
];

export const Sharps: Notes_Sharps[] = [
	'C',
	'C♯',
	'D',
	'D♯',
	'E',
	'F',
	'F♯',
	'G',
	'G♯',
	'A',
	'A♯',
	'B',
];

export const Intervals: Record<Chord_Variant, number[]> = {
	major: [2, 1.5],
	minor: [1.5, 2],
	diminished: [1.5, 1.5],
	augmented: [2, 2],
	sus2: [1, 2.5],
	sus4: [2.5, 1],
	'power-chord': [3.5, 2.5],
	add9: [2, 1.5, 3.5],
	'minor-add9': [1.5, 2, 3.5],
	'major-6': [2, 1.5, 1],
	'minor-6': [1.5, 2, 1],
	'dominant-7': [2, 1.5, 1.5],
	'major-7': [2, 1.5, 2],
	'minor-7': [1.5, 2, 1.5],
	'minor-major-7': [1.5, 2, 2],
	'half-diminished-7': [1.5, 1.5, 2],
	'diminished-7': [1.5, 1.5, 1.5],
	'augmented-7': [2, 2, 1],
	'dominant-9': [2, 1.5, 1.5, 2],
	'major-9': [2, 1.5, 2, 1.5],
	'minor-9': [1.5, 2, 1.5, 2],
	'dominant-11': [2, 1.5, 1.5, 2, 1.5],
	'major-11': [2, 1.5, 2, 1.5, 2],
	'minor-11': [1.5, 2, 1.5, 2, 1.5],
	'dominant-13': [2, 1.5, 1.5, 2, 1.5, 2],
	'major-13': [2, 1.5, 2, 1.5, 2, 1.5],
	'minor-13': [1.5, 2, 1.5, 2, 1.5, 2],
	'dominant-7-flat-5': [2, 1, 2],
	'dominant-7-sharp-5': [2, 2, 1],
	'dominant-7-flat-9': [2, 1.5, 1.5, 1.5],
	'dominant-7-sharp-9': [2, 1.5, 1.5, 2.5],
	'dominant-7-sharp-11': [2, 1.5, 1.5, 2, 2],
	'dominant-7-flat-13': [2, 1.5, 1.5, 2, 1.5, 1.5],
	'major-7-flat-5': [2, 1, 2.5],
	'major-7-sharp-5': [2, 2, 1.5],
};

export const Frequencies: number[] = [
	261.63, 277.18, 293.66, 311.13, 329.63, 349.23, 369.99, 392.0, 415.3, 440.0, 466.16, 493.88,
];

/*
 *  0: C
 *  1: C♯/D♭
 *  2: D
 *  3: D♯/E♭
 *  4: E
 *  5: F
 *  6: F♯/G♭
 *  7: G
 *  8: G♯/A♭
 *  9: A
 * 10: A♯/B♭
 * 11: B
 */
