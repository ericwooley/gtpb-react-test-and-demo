import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Loader from 'react-loader'
const MyQuery = gql`query MyQuery {
	user {
		 username
	}
}`;

function GraphQLLoader (BaseComponent) {
	return (props) =>
		<Loader loaded={!props.data.loading}>
			<BaseComponent {...props} />
		</Loader>
}
class App extends Component {
  render() {
		console.log("got props", this.props)
    return (
				<div className="App">
					<div className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
						<h2>Welcome to React</h2>
					</div>
					<p className="App-intro">
						{this.props.data.user.username}
					</p>
				</div>
    );
  }
}

const GraphQLLoaderApp = GraphQLLoader(App)
export default graphql(MyQuery)(GraphQLLoaderApp);
