import { useIndex } from '@/context/index';

import { CHORD_INFO } from '@/lookups/Chords';

import { Chord_Variant } from '@/types';

function Variant() {
	const { variant, handleVariantChange } = useIndex();

	return (
		<select
			className='Variant flex-auto min-w-16 rounded-none border border-slate-500 px-1 hover:ring-1'
			value={variant}
			onChange={e => handleVariantChange(e.target.value as Chord_Variant)}
		>
			{Object.keys(CHORD_INFO).map(variantOption => (
				<option key={variantOption} value={variantOption}>
					{CHORD_INFO[variantOption as Chord_Variant].display}
				</option>
			))}
		</select>
	);
}

export default Variant;
