import React, { Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'
import About from './components/pages/About'
import Todos from './components/Todos'

class App extends Component {

  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
      },
      {
        id: 2,
        title: 'Dinner with wife',
      },
      {
        id: 3,
        title: 'Meeting with boss',
      }
    ]
  }

  markComplete = (id) => {
		this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    })
  }
  
  delTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  }

  addTodo = (title) => {
    this.setState({
      todos: [...this.state.todos, {
        title,
        id: Math.random() * 10
      } ]
    })
  }

  render (){
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header/>
            <Route exact path="/" render={props => (
              <React.Fragment>

                <AddTodo addTodo={this.addTodo}/>
                <Todos todos={this.state.todos} markComplete={this.markComplete}
                  delTodo={this.delTodo}
                />
              </React.Fragment>
              
            )} />
            <Route path="/about" Component={About} />
          </div>
        </div>
      </Router>
    );
  }
  
}

export default App;
