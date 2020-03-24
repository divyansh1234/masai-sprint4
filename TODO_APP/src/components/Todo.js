import React from 'react'
import './App.css';
class Todo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            item: "",
            todoItems: []
        }
    }
    addData = (e) => {
        e.preventDefault()
        var inputItem = this.state.item
        var itemInstance = this.state.todoItems;
        itemInstance.push(inputItem)
        this.setState({
            todoItems: itemInstance,
            item: ""
        })
    }
    del = (e) => {
        var id = e.target.id;
        var itemInstance = this.state.todoItems;
        itemInstance.splice(id, 1)
        this.setState({
            todoItems: itemInstance,
            item: ""
        })
    }
    handleInput = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        var itemList = this.state.todoItems.map((e, i) =>
            <li key={i}>{e}<span className="btn btn-danger m-1  px-2 p-0" onClick={this.del} id={i}>X</span></li>
        )
        return (
            <div>
                <div className="header">TODO APP</div>
                <div className="body">
                    <ul className="list-unstyled">
                        {itemList}
                    </ul>
                </div>
                <div className="footer">
                    <input type="text" name="item" value={this.state.item} onChange={this.handleInput} />
                    <button onClick={this.addData} className="btn">+</button>
                    {/* <p>{this.state.todoItems}</p> */}
                </div>
            </div>
        )
    }
}
export default Todo