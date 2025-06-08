import Chord from './chords/Chord';
import Notes from './notes/Notes';
import DisplaysSelector from './displays/DisplaysSelector';
import Displays from './displays/Displays';

function Body() {
	return (
		<main className='Body flex flex-col gap-4 p-4'>
			<Chord />
			<Notes />
			<DisplaysSelector />
			<Displays />
		</main>
	);
}

export default Body;
