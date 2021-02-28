import {
  InMemoryCache,
  ApolloClient,
  HttpLink,
  NormalizedCacheObject,
} from "@apollo/client";

let apolloClient: ApolloClient<NormalizedCacheObject>;

function createApolloClient() {
  return new ApolloClient({
    link: new HttpLink({
      uri: "/api/graphql",
    }),
    cache: new InMemoryCache(),
  });
}

function intitiallizeApollo() {
  apolloClient = apolloClient ?? createApolloClient();
  return apolloClient;
}

export function useApollo() {
  return intitiallizeApollo();
}
