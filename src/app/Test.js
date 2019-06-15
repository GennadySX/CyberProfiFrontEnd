import React from 'react'
import Header from './Header'
import { Helmet } from 'react-helmet'
import TaskList from './TestPage/TaskList';
import { Button } from 'antd';
import { Link } from 'react-router-dom'

const styles = {
}

var task = {
  subName:'math',
  tasks:[
  {
    text: '{SDOJSKDJSJJDDS',
    img: ''
  },
  {
    text: 'SDKDKSODKOSDKDS',
    img: ''
  }
]}

export default class Test extends React.Component {
  render(){
    return (
      <div>
        <Helmet>
          <title>{task.subName}</title>
        </Helmet>
        <Header/>
        <div className="container">
          <h1>Тест по {task.subName}</h1>
          <TaskList tasks={task.tasks}/>
          <Link to='/results'><Button type="primary">Завершить тест</Button></Link>
        </div>
      </div>
    )
  }
  
}
