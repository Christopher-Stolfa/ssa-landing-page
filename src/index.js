import 'react-app-polyfill/stable';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider, ApolloLink, HttpLink } from '@apollo/client';
import { RetryLink } from '@apollo/client/link/retry';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from './context/ThemeContext';
import ErrorBoundary from './components/error/error-boundary';
import App from './app';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([
    new RetryLink({
      attempts: (count, operation, error) => {
        return !!error && operation.operationName != 'specialCase';
      },
      delay: (count, operation, error) => {
        return count * 1000 * Math.random();
      },
    }),
    new HttpLink({ uri: 'https://dev-spitzer-arch.pantheonsite.io/graphql' }),
  ]),
  csrfPrevention: true,
  cors: {
    origin: ['https://dev-spitzer-arch.pantheonsite.io'],
  },
  credentials: 'same-origin',
});
console.log(process.env.PUBLIC_URL);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <link rel="icon" href={process.env.PUBLIC_URL + '/favicon.ico'} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta
        name="description"
        content="The Bernard and Anne Spitzer School of Architecture, New York City's flagship public school for architecture."
      />
      <link rel="apple-touch-icon" href={process.env.PUBLIC_URL + '/apple-touch-icon.png'} />
      <link rel="manifest" href={process.env.PUBLIC_URL + '/manifest.json'} />
      <title>The Bernard and Anne Spitzer School of Architecture</title>
      <meta property="og:title" content="The Bernard and Anne Spitzer School of Architecture" />
      <meta
        property="og:description"
        content="The Bernard and Anne Spitzer School of Architecture, New York City's flagship public school for architecture."
      />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Roboto+Condensed:400,700&display=swap"
        rel="stylesheet"
        type="text/css"
      />
    </Helmet>
    <StrictMode>
      <ErrorBoundary>
        <ApolloProvider client={client}>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </ApolloProvider>
      </ErrorBoundary>
    </StrictMode>
  </>,
);
