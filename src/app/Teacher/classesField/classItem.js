import React from 'react'
import { Link } from '@material-ui/core';

export default class ClassItem extends React.Component{
    render(){
        return(
            <div className="item-list">
                <h2>{this.props.class}</h2>
                <Link to='#'></Link>
            </div>
        )
    }
}