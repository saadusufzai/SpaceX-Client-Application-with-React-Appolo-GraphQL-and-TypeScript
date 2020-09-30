import React from 'react';
import ReactDOM from 'react-dom';
// import ApolloClient, { InMemoryCache } from 'apollo-boost';
// import { ApolloProvider } from 'react-apollo';
// import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';

import { ApolloClient, InMemoryCache ,ApolloProvider} from '@apollo/client';

import './index.css';
import App from './App';

const client = new ApolloClient({
  uri: 'http://spacexdata.herokuapp.com/graphql',
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    
      <App />
    
  </ApolloProvider>,
  document.getElementById('root'),
);