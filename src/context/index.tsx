import { useState, useEffect, createContext, useCallback, useMemo } from 'react';

import { Flats, Sharps, Frequencies } from '@/lookups/Notes';
import { getChordInfo, getChordSymbol } from '@/lookups/Chords';

import type { Chord_Tonic, Chord_Variant, Chord_UsingFlats, Displays_Icon, border } from '@/types';
import type { IndexContextType, IndexContextProviderProps } from './types';

const IndexContext = createContext<IndexContextType | undefined>(undefined);

const initialTonic: Chord_Tonic = 0;
const initialVariant: Chord_Variant = 'major';
const initialUsingFlats: Chord_UsingFlats = true;
const initialDisplays: Displays_Icon[] = ['keyboard', 'guitar', 'ukelele', 'mandolin'];
const initialShowNerdMode = true;

function IndexContextProvider({ children }: IndexContextProviderProps) {
	const [tonic, setTonic] = useState<Chord_Tonic>(initialTonic);
	const [variant, setVariant] = useState<Chord_Variant>(initialVariant);
	const [usingFlats, setUsingFlats] = useState<Chord_UsingFlats>(() => {
		const savedUsingFlats = localStorage.getItem('usingFlats');
		return savedUsingFlats ? JSON.parse(savedUsingFlats) : initialUsingFlats;
	});
	const [notes, setNotes] = useState<Chord_Tonic[]>([tonic]);
	const [displays, setDisplays] = useState<Displays_Icon[]>(() => {
		const savedDisplays = localStorage.getItem('selectedDisplays');
		return savedDisplays ? JSON.parse(savedDisplays) : initialDisplays;
	});
	const [notePlaying, setNotePlaying] = useState<boolean>(false);
	const [showNerdMode, setShowNerdMode] = useState<boolean>(() => {
		const savedShowNerdMode = localStorage.getItem('showNerdMode');
		return savedShowNerdMode ? JSON.parse(savedShowNerdMode) : initialShowNerdMode;
	});
	const [audioContext, setAudioContext] = useState<AudioContext | null>(null);

	const handleTonicChange = useCallback((tonic: Chord_Tonic) => {
		setTonic(tonic);
	}, []);

	const handleVariantChange = useCallback((variant: Chord_Variant) => {
		setVariant(variant);
	}, []);

	const handleDisplaysClick = useCallback((icon: Displays_Icon) => {
		setDisplays(prev => {
			const newDisplays =
				prev.includes(icon) ? prev.filter(item => item !== icon) : [...prev, icon];
			localStorage.setItem('selectedDisplays', JSON.stringify(newDisplays));
			return newDisplays;
		});
	}, []);

	const toggleUsingFlats = useCallback(() => {
		setUsingFlats(prev => {
			const newValue = !prev;
			localStorage.setItem('usingFlats', JSON.stringify(newValue));
			return newValue;
		});
	}, []);

	const toggleShowNerdMode = useCallback(() => {
		setShowNerdMode(prev => {
			const newValue = !prev;
			localStorage.setItem('showNerdMode', JSON.stringify(newValue));
			return newValue;
		});
	}, []);

	const capitalizeFirstLetter = useCallback((string: string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}, []);

	const currentScale = useMemo(() => {
		return usingFlats ? Flats : Sharps;
	}, [usingFlats]);

	const getFrequency = useCallback((note: number) => {
		return Frequencies[note];
	}, []);

	const playNote = useCallback(
		(note: number) => {
			if (!audioContext || notePlaying) return;

			const oscillator = audioContext.createOscillator();
			oscillator.type = 'sine';
			oscillator.frequency.value = getFrequency(note);
			oscillator.connect(audioContext.destination);

			oscillator.start();
			setNotePlaying(true);

			setTimeout(() => {
				oscillator.stop();
				oscillator.disconnect();
				setNotePlaying(false);
			}, 1000);
		},
		[audioContext, getFrequency, notePlaying]
	);

	const reset = useCallback(() => {
		setTonic(initialTonic);
		setVariant(initialVariant);
	}, []);

	const getNote = useCallback(
		(note: number) => {
			return currentScale[note];
		},
		[currentScale]
	);

	const getBorderStyle = useCallback(
		(note: number): border => {
			if (showNerdMode || note === tonic) {
				return 'none';
			}

			const chordInfo = getChordInfo(variant);
			let currentSemitones = 0;

			for (let i = 0; i < chordInfo.intervals.length; i++) {
				const [interval, , style] = chordInfo.intervals[i];
				currentSemitones += interval * 2;
				const noteIndex = (tonic + currentSemitones) % 12;

				if (noteIndex === note) {
					return style;
				}
			}

			return 'solid';
		},
		[tonic, variant, showNerdMode]
	);

	const makeScale = useCallback((tonic: Chord_Tonic, variant: Chord_Variant) => {
		const scaleNotes: Chord_Tonic[] = [tonic];
		const chordInfo = getChordInfo(variant);
		let currentNote = tonic;

		chordInfo.intervals.forEach(([interval]) => {
			currentNote = (currentNote + interval * 2) % 12;
			scaleNotes.push(currentNote);
		});

		setNotes(scaleNotes);
	}, []);

	useEffect(() => {
		const context = new AudioContext();
		setAudioContext(context);
		return () => {
			context.close();
		};
	}, []);

	useEffect(() => {
		makeScale(tonic, variant);
	}, [tonic, variant, makeScale]);

	useEffect(() => {
		const handleKeyUp = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				reset();
			}
		};

		window.addEventListener('keyup', handleKeyUp);

		return () => {
			window.removeEventListener('keyup', handleKeyUp);
		};
	}, [reset]);

	const chordName = useMemo(() => {
		const note = getNote(tonic);
		if (variant === 'major') {
			return showNerdMode ? note : `${note}△`;
		}
		const symbol = getChordSymbol(variant, showNerdMode);
		return `${note}${symbol}`;
	}, [tonic, variant, getNote, showNerdMode]);

	const noteCount = useMemo(() => {
		const chordInfo = getChordInfo(variant);
		return chordInfo.intervals.length + 1;
	}, [variant]);

	const contextValue = useMemo(
		() => ({
			tonic,
			variant,
			usingFlats,
			notes,
			displays,
			showNerdMode,
			chordName,
			noteCount,
			handleTonicChange,
			handleVariantChange,
			handleDisplaysClick,
			toggleUsingFlats,
			toggleShowNerdMode,
			capitalizeFirstLetter,
			getNote,
			getBorderStyle,
			makeScale,
			playNote,
			reset,
		}),
		[
			tonic,
			variant,
			usingFlats,
			notes,
			displays,
			showNerdMode,
			chordName,
			noteCount,
			handleTonicChange,
			handleVariantChange,
			handleDisplaysClick,
			toggleUsingFlats,
			toggleShowNerdMode,
			capitalizeFirstLetter,
			getNote,
			getBorderStyle,
			makeScale,
			playNote,
			reset,
		]
	);

	return <IndexContext.Provider value={contextValue}>{children}</IndexContext.Provider>;
}

export { IndexContext, IndexContextProvider };
