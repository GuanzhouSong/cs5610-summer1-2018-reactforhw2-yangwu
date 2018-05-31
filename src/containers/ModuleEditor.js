import React from 'react'
import LessonTabs from './LessonTabs'
import LessonEditor from "./LessonEditor";
import {BrowserRouter as Router, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default class ModuleEditor
    extends React.Component {

    constructor(props) {
        super(props);
        this.state = {moduleId: this.props.match.params.moduleId, courseId: this.props.match.params.courseId};
        this.selectModule = this.selectModule.bind(this);
        this.selectCourse = this.selectCourse.bind(this);
    }

    componentDidMount() {
        this.selectModule
        (this.props.match.params.moduleId);
        this.selectCourse
        (this.props.match.params.courseId);
    }

    componentWillReceiveNewProps(newProps) {
        this.selectModule
        (newProps.match.params.moduleId);
        this.selectCourse(newProps.match.params.courseId);
    }

    selectModule(moduleId) {
        this.setState({moduleId: moduleId});
    }

    selectCourse(courseId) {
        this.setState({courseId: courseId});
    }

    render() {
        console.log(this.state);
        return(
        <div>

                <div className="col-8">
                    <LessonTabs moduleId={this.props.match.params.moduleId} courseId={this.props.match.params.courseId}/>
                </div>
            <Route path="/course/:courseId/module/:moduleId/lesson/:lessonId"
                   component={LessonEditor}>
            </Route>
        </div>
    );}}

