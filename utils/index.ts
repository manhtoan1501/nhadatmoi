import axios, {Method} from "axios";
import {apiBaseURL, apiGraphQLURL} from "../constants";
import "cross-fetch/polyfill";
import ApolloClient, {InMemoryCache} from "apollo-boost";

const client = axios.create({
  baseURL: apiBaseURL,
  timeout: 30000,
});

const api = (method: Method, url: string, data?: any) => client
  .request({
    data: JSON.stringify(data),
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    method,
    url,
    withCredentials: true,
  })
  .then((response: any) => response.data);

const apolloClient = new ApolloClient({
  uri: apiGraphQLURL,
  credentials: 'include',
  cache: new InMemoryCache({
    addTypename: false
  })});

export {api, apolloClient}
