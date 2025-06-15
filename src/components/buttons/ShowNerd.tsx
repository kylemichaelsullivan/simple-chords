import { useIndex } from '@/hooks/useIndex';

function ShowNerd() {
	const { showNerdMode, toggleShowNerdMode } = useIndex();

	return (
		<button
			type='button'
			className='ShowNerd absolute left-0 top-0 h-12 w-12 border border-slate-500 bg-slate-200 text-xl hover:ring-1'
			title={showNerdMode ? 'Show Rad Notation' : 'Show Nerd Notation'}
			onClick={toggleShowNerdMode}
		>
			{showNerdMode ? '🤓' : '💃🏾'}
		</button>
	);
}

export default ShowNerd;
