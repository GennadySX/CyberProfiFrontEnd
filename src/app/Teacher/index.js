import React from 'react'
import { Helmet } from 'react-helmet'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '&/redux/actions'
import Header from '../Header';

const styles = {
}

const Students = [
]

const classes = [
    {
        number: '9',
        bukvi: ['A', 'B', 'C'],

    },
    {
        number: '10',
        bukvi: ['A','B','C']
    }
]

class Teacher extends React.Component{
  render(){
    return (
      <div>
        <Helmet>
          <title>Личный кабинет</title>
          <meta name="description" content="Личный кабинет" />
        </Helmet>
        <Header/>
        <h1>Личный кабинет учителя</h1>
        <div className="fieldOfClasses">
          <ClassField class={classes}/>
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