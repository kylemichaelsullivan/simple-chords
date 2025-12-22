import { useIndex } from '@/hooks/useIndex';

import AllowedNote from '@/components/AllowedNote';

type KeyProps = {
	isBlack: boolean;
	note: number;
	isAllowed: boolean;
};

function Key({ isBlack, note, isAllowed }: KeyProps) {
	const { getNote, playNote, tonic, getBorderStyle } = useIndex();

	const handleKeyDown = (event: React.KeyboardEvent) => {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			playNote(note);
		}
	};

	return (
		<button
			type='button'
			className={`Key border border-black ${isBlack ? 'black' : 'white'}`}
			title={getNote(note)}
			onClick={() => playNote(note)}
			onKeyDown={handleKeyDown}
		>
			{isAllowed && (
				<AllowedNote
					note={getNote(note)}
					isTonic={note === tonic}
					borderStyle={getBorderStyle(note)}
					isPiano={true}
				/>
			)}
		</button>
	);
}

export default Key;
