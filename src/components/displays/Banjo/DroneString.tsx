import Fret from '@/components/displays/Fret';
import Nut from '@/components/displays/Nut';
import SkippedFret from './SkippedFret';

type DroneStringProps = {
	openNote: number;
};

function DroneString({ openNote }: DroneStringProps) {
	const frets = 6;

	return (
		<div className='DroneString ml-1 flex justify-evenly'>
			{Array.from({ length: 5 }, (_, i) => (
				<SkippedFret key={`skipped-fret-pos-${i}`} />
			))}

			<Nut note={openNote} />

			{Array.from({ length: frets }, (_, i) => {
				const note = (openNote + 1 + i) % 12;
				return <Fret note={note} key={`drone-fret-${openNote}-${note}-pos-${i}`} />;
			})}
		</div>
	);
}

export default DroneString;
