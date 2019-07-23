import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title';
import TodoList from '../components/TodoList';
import TodoForm from "../components/TodoForm";

//make container
class App extends React.Component {
    constructor(props){
        super(props);

        // initial set
        this.state = {
            data: [
                {
                    id: 1,
                    text: 'clean room'
                },
                {
                    id: 2,
                    text: 'wash the dishes'
                },
                {
                    id: 3,
                    text: 'feed my cat' 
                }
            ]
        };
    }

    // add new elemants
    addTodo(value){
        const todo = {
            text: value,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }
     // remove elements
    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }

    // render and show app
    render() {
        return (
            <div className={style.TodoApp}>
                <Title title="ToDo App" numberOfTasks={this.state.data.length}></Title>
                <TodoForm add = {this.addTodo.bind(this)}></TodoForm>
                <TodoList data = {this.state.data} remove={this.removeTodo.bind(this)} />
            </div>
        );
    }
}

export default App;