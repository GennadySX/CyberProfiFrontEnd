import React from 'react'
import TestItem from './testItem'

export default class TestList extends React.Component{
    render(){
        return(
            <div className="testList">
                {this.props.student.map(item=>{
                    return <TestItem
                        key={item.key} 
                        className="list-item" 
                        teacherName={item.teacherName} 
                        discipline={item.discipline}
                        />
                })}
            </div>
        )
    }
}