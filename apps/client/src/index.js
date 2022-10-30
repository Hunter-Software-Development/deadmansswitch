import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const apolloUri =
  window.location.origin.toString() === 'http://localhost:3000'
    ? 'http://localhost:3030/graphql'
    : `${window.location.origin.toString()}/server/graphql`;

const client = new ApolloClient({
  uri: apolloUri,
  cache: new InMemoryCache(),
});

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
