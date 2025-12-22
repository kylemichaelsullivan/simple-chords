import { useIndex } from '@/hooks/useIndex';

function Tonic() {
	const { tonic, handleTonicChange, getNote } = useIndex();

	const note = getNote(tonic);
	const hasFlat = note.includes('♭');
	const hasSharp = note.includes('♯');

	return (
		<select
			className={`Tonic flex-1 min-w-14 rounded-none border border-slate-500 px-1 hover:ring-1${hasFlat ? ' hasFlat' : ''}${hasSharp ? ' hasSharp' : ''}`}
			value={tonic}
			onChange={(e) => handleTonicChange(+e.target.value)}
		>
			{Array.from({ length: 12 }, (_, index) => {
				const tonicOption = getNote(index);
				return (
					<option key={tonicOption} value={index}>
						{tonicOption}
					</option>
				);
			})}
		</select>
	);
}

export default Tonic;
