import React from 'react'
import {Button} from 'antd'
import { Link } from 'react-router-dom'

export default class SubjectItem extends React.Component{
    render(){
        return(
            <div className="list-item">
                <h3>{this.props.subName}</h3>
                <p>Верные ответы: {this.props.rightAnswers}</p>
                <p>Предпологаемый балл: {this.props.points}</p>
                <p>Пройдено тестов: {this.props.completedTestsCount}</p>
                <Link to="/test"><Button type="primary">Начать тест</Button></Link>
            </div>
        )
    }
}