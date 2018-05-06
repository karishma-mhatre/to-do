import React from 'react';
import './App.css';
import Form from './Components/Form';
import Title from './Components/Title';
import TodoList from './Components/TodoList';

 
class App extends React.Component {
  state = {
    list: []
  }
  addTodo = (e) => {
    e.preventDefault();
    const todo = e.target.elements.todo.value;
    if(todo===""){
      alert("Doing nothing cant be done Right?")
    }else{
    var todoArr = this.state.list;
    todoArr.unshift(todo);
    this.setState({list: todoArr});
    e.target.elements.todo.value = "";
    localStorage.setItem("To Do List",JSON.stringify(this.state.list));
  }
  }

  removeTodo = (index) => {
    var arr = this.state.list;
    arr.splice(index,1);
    this.setState({list: arr});
    localStorage.setItem("To Do List",JSON.stringify(this.state.list));
  }


  render() {
    return (
      <div>
      
      <header>
      <Title />
        </header>
        <div className="wrapper">
      <div className="main">
        <div className="container">
          <div className="row board">
            <div className="col-xs-5 form-container">
              <Form addTodo={this.addTodo}/>
            </div>
            <div className="col-xs-7 list-container">
              <TodoList list={JSON.parse(localStorage.getItem("To Do List"))} removeTodo={this.removeTodo}/>  
            </div>
          </div>        
        </div> 
        </div>
        </div>
      </div>
    );
  }
}

export default App;
