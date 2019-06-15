import React from 'react'
import { Helmet } from 'react-helmet'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '&/redux/actions'
import TestList from './studentTest/testList'
import SubjectsList from './studentSubjects/subjectsList'
import Header from '../Header';

const styles = {
}

const Students = [
  {
      key: 5,
      teacherName: "Светлана Унусова",
      discipline: "математика",
  },
  {
      key: 3,
      teacherName: "sldkad",
      discipline: "русский язык"
  }
]

var Subjects = [
  {
    key: 2,
    subName: 'Math',
    rightAnswers: 12,
    points: 99,
    completedTestsCount: 20
  },
  {
    key: 1,
    subName: 'Matsadah',
    rightAnswers: 123232,
    points: 9923,
    completedTestsCount: 202313
  }
]

class Student extends React.Component{
  render(){
    return (
      <div>
        <Helmet>
          <title>Личный кабинет</title>
          <meta name="description" content="Личный кабинет" />
        </Helmet>
        <Header/>
        <h1>Личный кабинет ученика</h1>
        <div className="completedTests">
          <h2>Пройденные тесты</h2>
          <TestList student={Students}/>
        </div>
        <div className="subjects">
          <h2>Предметы</h2>
          <SubjectsList subject={Subjects}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
})
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Student)
