import Tonic from './Tonic';
import Variant from './Variant';

function Chord() {
	return (
		<div className='Chord flex justify-start gap-1'>
			<Tonic />
			<Variant />
		</div>
	);
}

export default Chord;
