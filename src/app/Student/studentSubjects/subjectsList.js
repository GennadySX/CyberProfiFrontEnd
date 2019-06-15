import React from 'react'
import SubjectItem from './subjectItem'

export default class SubjectsList extends React.Component{
    render(){
        return(
            <div>
                {this.props.subject.map(item => {
                return <SubjectItem 
                        key={item.key}
                        subName={item.subName}
                        rightAnswers={item.rightAnswers}
                        points={item.points}
                        completedTestsCount={item.testCount}
                    />
            })}
            </div>
        )
    }
}