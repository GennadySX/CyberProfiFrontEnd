import React from 'react'
import ReactDom from 'react-dom'
import { Link } from '@material-ui/core';

export default class TestItem extends React.Component{
    render(){
        return(
            <div className="container">
                <h4>{this.props.teacherName}</h4>
                <p>{this.props.discipline}</p>
                <Link to='/testStatistic'>Проверенный тест по {this.props.discipline}</Link>
            </div>
        )
    }
}