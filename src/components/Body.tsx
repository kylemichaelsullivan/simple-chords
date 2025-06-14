import Chord from '@/components/chords/Chord';
import Notes from '@/components/notes/Notes';
import DisplaysSelector from '@/components/displays/DisplaysSelector';
import Displays from '@/components/displays/Displays';

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
