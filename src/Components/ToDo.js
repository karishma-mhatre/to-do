import React from 'react';

class ToDo extends React.Component{
    remove = () =>{
        console.log("in todo");
        this.props.removeTodo(this.props.index);
        var todoContent = document.getElementById(this.props.index);
        todoContent.style.textDecoration = 'none';
    }

    done = () =>{
        var todoContent = document.getElementById(this.props.index);
        todoContent.style.textDecoration = 'line-through';
    }
    render(){ 
        return(
            <div className="todo-div">
                    <span id={this.props.index}>
                        {this.props.index+1}. {this.props.children}   
                    </span>
                <button onClick={this.remove} className="btn-remove"><span className="glyphicon glyphicon-remove"></span></button>
            </div>
        );
    }
}

export default ToDo;