import React from 'react'
import ClassField from './classField';

export default class ClassesField extends React.Component{
    render(){
        return(
            <div>
                {this.props.class.map(item=>{
                    <ClassField class={item}/>
                })}
            </div>
        )
    }
}