import React from 'react';
import ToDo from './ToDo';

class TodoList extends React.Component{
    render(){
        return(
            <div>
                <div className="list-title">
                <p>Things to do today</p>
                </div>
                {
                    this.props.list.map((todo,index)=>{
                        return (
                        <div> 
                            {console.log(index)}
                        <ToDo key={index} index={index} removeTodo={this.props.removeTodo} doneTodo={this.props.doneTodo}>{todo}</ToDo> 
                        </div>
                        )
                    })
                }
                
            </div>
        );
    }
}

export default TodoList;