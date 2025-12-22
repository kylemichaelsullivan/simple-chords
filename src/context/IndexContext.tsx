import { createContext } from 'react';

import type { IndexContextType } from './types';

export const IndexContext = createContext<IndexContextType | undefined>(undefined);

