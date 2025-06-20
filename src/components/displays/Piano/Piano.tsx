import { useIndex } from '@/hooks/useIndex';

import Key from './Key';

function Piano() {
	const keys = 12;
	const blackKeys = [1, 3, 6, 8, 10];

	const { notes } = useIndex();

	return (
		<div className={`Piano relative flex min-h-24 w-full justify-center`}>
			{Array.from({ length: keys }, (_, note) => (
				<Key
					isBlack={blackKeys.includes(note)}
					note={note}
					isAllowed={notes.includes(note)}
					key={note}
				/>
			))}
		</div>
	);
}

export default Piano;
