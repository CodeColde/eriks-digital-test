import React from 'react';
import ReactDOM from 'react-dom';
import {
  QueryClient,
  QueryClientProvider
} from 'react-query';
import {
  ReactQueryDevtools
} from 'react-query/devtools'

import App from './App';

import './index.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);