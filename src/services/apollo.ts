import {ApolloClient, InMemoryCache, from, HttpLink} from '@apollo/client';

const GRAPHQL_ENDPOINT = 'https://countries.trevorblades.com/';

const link = new HttpLink({
  uri: GRAPHQL_ENDPOINT,
  headers: {
    access_token: '',
  },
});

const apolloClient = new ApolloClient({
  link: from([link]),
  cache: new InMemoryCache(),
  connectToDevTools: true,
  defaultOptions: {
    query: {
      errorPolicy: 'all',
    },
    mutate: {
      errorPolicy: 'all',
    },
  },
});

export default apolloClient;
