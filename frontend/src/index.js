import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://dev-spitzer-arch.pantheonsite.io/graphql',
  cache: new InMemoryCache(),
  csrfPrevention: true, // see below for more about this
  cors: {
    origin: ['*'],
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
);
