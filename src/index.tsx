import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Tasks from './containers/Tasks';
import Sidebar from './components/general/Sidebar';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client/react';
import { ApolloClient, InMemoryCache } from '@apollo/client/core';

import GlobalStyle from './helpers/globalStyles';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: "/test",
    element: <Tasks />,
    children: [
      {
        path: '/test',
        element: <Sidebar />
      }
    ]
  }
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://localhost:8080/graphql"
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <ApolloProvider client={client}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
