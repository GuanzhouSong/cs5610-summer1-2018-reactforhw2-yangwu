import React, {Component} from 'react'
import CourseList from "./CourseList";
import {BrowserRouter as Router, Route } from 'react-router-dom'
import CourseEditor from "./CourseEditor"
import { Link } from 'react-router-dom'
import LessonEditor from "./LessonEditor"

export default class CourseManager
    extends Component {

    render() {
        return (
            <Router>
                <div className="container-fluid">

                    <table className="table">
                        <thead>
                    <tr>

                    <th>
                    <Link to={`/courses`}>
                        <i className="fa fa-home fa-2x" id="homeBtn"></i>
                    </Link>
                    </th>

                    <th>
                    <h1>Course Manager</h1>
                    </th>

                    </tr>
                        </thead>
                    </table>
                    <Route path="/courses"
                           component={CourseList}>
                    </Route>
                    <Route path="/course/:courseId"
                           component={CourseEditor}>
                    </Route>


                </div>
            </Router>
        )
    }
}







