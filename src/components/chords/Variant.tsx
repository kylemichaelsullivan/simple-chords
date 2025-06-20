import { CHORDS, getChordSymbol } from '@/lookups/Chords';

import { useIndex } from '@/hooks/useIndex';

import type { Chord_Variant } from '@/types';
import type { ChordData, ChordGroup } from '@/lookups/Chords';

type VariantProps = {
	variant: Chord_Variant;
	onChange: (variant: Chord_Variant) => void;
};

function Variant({ variant, onChange }: VariantProps) {
	const { showNerdMode } = useIndex();

	return (
		<select
			className='w-full rounded-none border border-slate-500 px-1 hover:ring-1'
			value={variant}
			onChange={e => onChange(e.target.value as Chord_Variant)}
		>
			{Object.entries(CHORDS).map(([groupName, group]: [string, ChordGroup]) => (
				<optgroup key={groupName} label={groupName}>
					{Object.entries(group).map(([variantKey, info]: [string, ChordData]) => (
						<option key={variantKey} value={variantKey}>
							{showNerdMode ?
								`${getChordSymbol(info.symbol, false)} | ${info.display}`
							:	`${getChordSymbol(info.symbol, true)} | ${info.display}`}
						</option>
					))}
				</optgroup>
			))}
		</select>
	);
}

export default Variant;
