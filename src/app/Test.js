import React from 'react'
import Header from './Header'
import { Helmet } from 'react-helmet'
import TaskList from './TestPage/TaskList';

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
      <div className="container">
        <Helmet>
          <title>{task.subName}</title>
        </Helmet>
        <div className="container">
          <h1>Тест по {task.subName}</h1>
          <TaskList tasks={task.tasks}/>
        </div>
      </div>
    )
  }
  
}
