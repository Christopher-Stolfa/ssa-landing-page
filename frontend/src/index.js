import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Helmet } from 'react-helmet';

const assetsPath = '/wp-content/themes/ssa/landing-page-assets/';
const isProduction = process.env.NODE_ENV === 'production';

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
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <link rel="icon" href={isProduction ? assetsPath + 'favicon.ico' : process.env.PUBLIC_URL + '/favicon.ico'} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta
        name="description"
        content="The Bernard and Anne Spitzer School of Architecture, New York City's flagship public school for architecture."
      />
      <link
        rel="apple-touch-icon"
        href={isProduction ? assetsPath + 'apple-touch-icon.png' : process.env.PUBLIC_URL + '/apple-touch-icon.png'}
      />
      <link
        rel="manifest"
        href={isProduction ? assetsPath + 'manifest.json' : process.env.PUBLIC_URL + '/manifest.json'}
      />
      <title>The Bernard and Anne Spitzer School of Architecture landing page</title>
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Roboto+Condensed:400,700"
        rel="stylesheet"
        type="text/css"
      />
    </Helmet>
    <React.StrictMode>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </React.StrictMode>
  </>,
);
