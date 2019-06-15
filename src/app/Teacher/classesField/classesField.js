import React from 'react'
import classField from './classField';

export default class classesField extends React.Component{
    render(){
        return(
            <div>
                {this.props.class.map(item=>{
                    <classField class={item}/>
                })}
            </div>
        )
    }
}