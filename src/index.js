import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import axios from 'axios'
axios.post('http://localhost:8090/login', {username: 'test', password: 'test'}, {withCredentials: true})
.then(() => {
	// Create the client as outlined above
	const client = new ApolloClient({
		networkInterface: createNetworkInterface({
			uri: 'http://localhost:8090/graphql',
			opts: {
				// Additional fetch options like `credentials` or `headers`
				 credentials: 'include'
			}

		 })
	});

	ReactDOM.render(
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>,

		document.getElementById('root')
	);
})
.catch(e => alert('Error: ' + e.message))

