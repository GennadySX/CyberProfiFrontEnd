import React from 'react'
import { Button } from '@material-ui/core';
import {Link} from 'react-router-dom'
import Header from '../Header'

export default class Results extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <h3>Результаты теста</h3>
                <span>??? баллов</span><br/>
                <span>??? из ??? верных </span><br/>
                <Link to="/"><Button color="primary">Вернуться в личный кабинет</Button></Link>
            </div>
        )
    }
}