import { useIndex } from '@/hooks/useIndex';

import Tonic from './Tonic';
import Variant from './Variant';

function Chord() {
	const { variant, handleVariantChange } = useIndex();

	return (
		<div className='Chord flex justify-start gap-1'>
			<Tonic />
			<Variant variant={variant} onChange={handleVariantChange} />
		</div>
	);
}

export default Chord;
