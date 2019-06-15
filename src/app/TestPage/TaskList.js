import React from 'react'
import TaskItem from './TaskItem'

export default class TaskList extends React.Component{
    render(){
        let count = 1;
        return(
            <div>
                {this.props.tasks.map(item=>{
                    return(
                        <TaskItem key={item.key} count={count++} text={item.text} img={item.img}/>
                    )})}
            </div>
        )
    }
}