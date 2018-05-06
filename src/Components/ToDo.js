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
            <div>
                <button onClick={this.done}><span className="glyphicon glyphicon-ok"></span></button>
                    <span id={this.props.index}>
                        {this.props.children}   
                    </span>
                <button onClick={this.remove}>Remove</button>
            </div>
        );
    }
}

export default ToDo;