import { useIndex } from '@/context/index';

import Piano from './Piano/Piano';
import Guitar from './Guitar/Guitar';
import Banjo from './Banjo/Banjo';
import Ukelele from './Ukelele/Ukelele';
import Mandolin from './Mandolin/Mandolin';

function Displays() {
	const { displays } = useIndex();

	return (
		<div className='Displays mx-auto flex w-full max-w-screen-2xl flex-col gap-8'>
			{displays.includes('keyboard') && <Piano />}
			{displays.includes('guitar') && <Guitar />}
			{displays.includes('banjo') && <Banjo />}
			{displays.includes('ukelele') && <Ukelele />}
			{displays.includes('mandolin') && <Mandolin />}
		</div>
	);
}

export default Displays;
