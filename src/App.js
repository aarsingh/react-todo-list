import React, { Component } from 'react';

// import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import uuid from 'uuid';
import axios from 'axios';

import './App.css';

// class App extends React.Component {	/** If we extends class like this than we do not need to import { Component } from 'react' which are showen in line no 3 */

class App extends Component {
	state = {
		todos: []
	};

	componentDidMount() {
		axios
			// .get('https://jsonplaceholder.typicode.com/todos?_limit=10')
			 .get('https://jsonplaceholder.typicode.com/todos?_limit=0')
			//.get('https://my-json-server.typicode.com/aarsingh/ReactToDoList?_limit=10')
			.then((res) => this.setState({ todos: res.data }));
	}

	// Toggle Complete
	markComplete = (id) => {
		this.setState({
			todos: this.state.todos.map((todo) => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
				}
				return todo;
			})
		});
	};

	// Delete Todo
	delTodo = (id) => {
		axios
			.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
			.then((res) =>
				this.setState({
					todos: [...this.state.todos.filter((todo) => todo.id !== id)]
				})
			);
	};

	// Add Todo
	addTodo = (title) => {
		axios
			.post('https://jsonplaceholder.typicode.com/todos', {
				title,
				completed: false
			})
			.then((res) => {
				res.data.id = uuid.v4();
				this.setState({ todos: [...this.state.todos, res.data] });
			});
	};


// render() method is also called lifecycle method and this need to reneder the component  in the browser.

	render() {
		// Inside this return is jsx (JavaScript XML), this is a siplest way to write JavaScript. And to write JavaScript we need {}, means inside the {} is all JavaScript. 
		// Also we can not use class attribute for a class inside jsx so we need to define class attribute as className.
		return ( 
			<Router>
				<div className='App'>
					<div className='container'>
						<Header />
						<Route
							exact
							path='/'
							render={(props) => (
								<React.Fragment>
									<AddTodo addTodo={this.addTodo} />
									<Todos
										todos={this.state.todos}
										markComplete={this.markComplete}
										delTodo={this.delTodo}
									/>
								</React.Fragment>
							)}
						/>
						<Route path='/about' component={About} />
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
