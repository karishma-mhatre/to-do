import React from 'react';

class Form extends React.Component{
    render() {
        return(
            <div>
                <p>Add your things to do from here</p>
                        <form onSubmit={this.props.addTodo}>
                            <input type="text" name="todo" placeolder="To Do" />
                            <p><button className="btn-add">Add</button></p>
                        </form>
             </div>
        );
    }
}

export default Form;