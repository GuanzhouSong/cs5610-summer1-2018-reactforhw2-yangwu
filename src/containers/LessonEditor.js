import React from 'react'
import App from './WidgetList'
import {widgetReducer} from "../reducers/widgetReducer";
import {Provider, connect} from 'react-redux'
import {createStore} from 'redux'
import {ADD_WIDGET, SAVE, PREVIEW} from "../constants/index"
import {addWidget, save} from "../actions/index"

const store = createStore(widgetReducer)
export default class LessonEditor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {moduleId: this.props.match.params.moduleId, courseId: this.props.match.params.courseId, lessonId: this.props.match.params.lessonId};
        this.selectModule = this.selectModule.bind(this);
        this.selectCourse = this.selectCourse.bind(this);
        this.selectLesson = this.selectLesson.bind(this);
    }

    componentDidMount() {
        this.selectModule
        (this.props.match.params.moduleId);
        this.selectCourse
        (this.props.match.params.courseId);
        this.selectLesson
        (this.props.match.params.lessonId);
    }

    componentWillReceiveNewProps(newProps) {
        this.selectModule
        (newProps.match.params.moduleId);
        this.selectCourse(newProps.match.params.courseId);
        this.selectLesson(newProps.match.params.lessonId);
    }

    selectModule(moduleId) {
        this.setState({moduleId: moduleId});
    }

    selectCourse(courseId) {
        this.setState({courseId: courseId});
    }

    selectLesson(lessonId) {
        this.setState({lessonId: lessonId});
    }


    render() {
        return(
        <div>

            <div className="row">
                <div className="col-8">
                    <Provider store={store}>
                    <App lessonId={this.props.match.params.lessonId}/>
                    </Provider>
                </div>

            </div>
        </div>
    );}}

    // provider fixme