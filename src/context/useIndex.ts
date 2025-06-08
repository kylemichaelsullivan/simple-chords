import { useContext } from 'react';

import { IndexContext } from './index';
import type { IndexContextType } from './types';

export const useIndex = (): IndexContextType => {
	const context = useContext(IndexContext);
	if (!context) {
		throw new Error('useIndex must be used within an <IndexContextProvider />');
	}
	return context;
};
