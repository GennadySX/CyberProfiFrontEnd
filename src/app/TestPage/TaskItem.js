import React from 'react'

export default class TaskItem extends React.Component{
    render(){
        return(
            <div className="container">
                <h5>Задание {this.props.count}</h5>
                <p>{this.props.text}</p>
                <label htmlFor={this.props.count}>Ответ:</label>
                <input id={this.props.count} type='text'/>
            </div>
        )
    }
}