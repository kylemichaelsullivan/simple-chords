import Title from './Title';
import ShowNerd from './buttons/ShowNerd';
import UsingFlats from './buttons/UsingFlats';

function Header() {
	return (
		<header className='Header relative flex h-12 items-center justify-center'>
			<ShowNerd />
			<UsingFlats />
			<Title title='Simple Chords' />
		</header>
	);
}

export default Header;
