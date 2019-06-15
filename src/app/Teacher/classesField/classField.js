import React from 'react'
import ClassItem from './classItem';

export default class classField extends React.Component{
    render(){
        return(
            <div>
                <h2>{this.props.number}</h2>
                {this.props.bukvi.map(item=>{
                    <ClassItem class={this.props.number + item}/>
                })}
            </div>
            
        )
    }
}