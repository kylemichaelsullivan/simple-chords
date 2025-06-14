import { useContext } from 'react';

import { IndexContext } from '@/context';

import type { IndexContextType } from '@/context/types';

export const useIndex = (): IndexContextType => {
	const context = useContext(IndexContext);
	if (context === undefined) {
		throw new Error('useIndex must be used within an IndexContextProvider');
	}
	return context;
};
