import React from 'react';
import ReactDOM from 'react-dom/client';

import { IndexContextProvider } from '@/context';

import App from '@/components/App';

import './index.css';

const rootElement = document.getElementById('root');
if (rootElement) {
	ReactDOM.createRoot(rootElement).render(
		<React.StrictMode>
			<IndexContextProvider>
				<App />
			</IndexContextProvider>
		</React.StrictMode>
	);
}
