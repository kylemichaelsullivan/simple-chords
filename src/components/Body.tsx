import Chord from '@/components/chords/Chord';
import Displays from '@/components/displays/Displays';
import DisplaysSelector from '@/components/displays/DisplaysSelector';
import Notes from '@/components/notes/Notes';

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
