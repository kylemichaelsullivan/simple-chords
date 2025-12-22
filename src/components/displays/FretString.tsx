import Fret from './Fret';
import Nut from './Nut';

type FretStringProps = {
	openNote: number;
};

function FretString({ openNote }: FretStringProps) {
	const frets = 11;

	return (
		<div className='String flex justify-evenly'>
			<Nut note={openNote} />
			{Array.from({ length: frets }, (_, i) => {
				const note = (openNote + 1 + i) % 12;
				return <Fret note={note} key={`fretstring-${openNote}-${note}-pos-${i}`} />;
			})}
		</div>
	);
}

export default FretString;
