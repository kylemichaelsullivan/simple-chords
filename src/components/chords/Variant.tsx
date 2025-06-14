import { CHORDS } from '@/lookups/Chords';

import type { Chord_Variant } from '@/types';

type VariantProps = {
	variant: Chord_Variant;
	onChange: (variant: Chord_Variant) => void;
};

function Variant({ variant, onChange }: VariantProps) {
	return (
		<select
			className='w-full rounded-none border border-slate-500 px-1 hover:ring-1'
			value={variant}
			onChange={e => onChange(e.target.value as Chord_Variant)}
		>
			{Object.entries(CHORDS).map(([groupName, group]) => (
				<optgroup key={groupName} label={groupName}>
					{Object.entries(group).map(([variantKey, info]) => (
						<option key={variantKey} value={variantKey}>
							{info.display}
						</option>
					))}
				</optgroup>
			))}
		</select>
	);
}

export default Variant;
