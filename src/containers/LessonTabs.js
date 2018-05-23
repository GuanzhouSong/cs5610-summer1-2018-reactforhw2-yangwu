
import React, {Component} from 'react'
import LessonTab from '../components/LessonTab';
import LessonService from '../services/LessonService'

export default class LessonTabs extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            moduleId: '',
            lesson: { title: '' },
            lessons: []
        };
        this.createLesson = this.createLesson.bind(this);
        this.titleChanged = this.titleChanged.bind(this);
        this.deleteLesson = this.deleteLesson.bind(this);
        this.setModuleId = this.setModuleId.bind(this);
        this.lessonService = LessonService.instance;
    }

    setLessons(lessons) {
        this.setState({lessons: lessons})
    }

    findAllLessonsForModule(moduleId) {
        this.lessonService
            .findAllLessonsForModule(moduleId, this.props.courseId)
            .then((lessons) => {
                this.setLessons(lessons)
            });
    }

    setModuleId(moduleId) {
        this.setState({moduleId: moduleId});
    }

    componentDidMount() {
        this.setModuleId(this.props.moduleId);
    }

    componentWillReceiveProps(newProps) {
        console.log(newProps);
        this.setModuleId(newProps.moduleId);
        this.findAllLessonsForModule(newProps.moduleId)
    }

    createLesson() {
        console.log(this.state.lesson);
        this.lessonService
            .createLesson(this.props.courseId, this.props.moduleId, this.state.lesson)
            .then(() => {
                this.findAllLessonsForModule(this.props.moduleId);
            });
    }

    titleChanged(event) {
        console.log(event.target.value);
        this.setState({lesson: {title: event.target.value}});
    }

    deleteLesson(lessonId) {
        console.log('delete');
        this.lessonService
            .deleteLesson(lessonId)
            .then(() => {
                this.findAllLessonsForModule(this.props.moduleId);
            });
    }

    renderListOfLessons() {
        let lessons = null;

        if (this.state) {
            lessons = this.state.lessons.map(
                (lesson) => {
                    return <LessonTab moduleId={this.props.moduleId} lesson={lesson} key={lesson.id} deleteLesson={this.deleteLesson}/>
                });
        }
        return (
            lessons
        )
    }



    render() {
        console.log(this.state);

        return (
            <div>
                <h3>Lesson List for module: {this.props.moduleId}</h3>
                {/*<h3>Lesson List for module: {this.props.module.title}</h3>*/}
                <table className="table">
                    <thead>
                    <tr>
               <th> <input onChange={this.titleChanged}
                       value={this.state.lesson.title}
                       placeholder="title"
                           className="form-control"/> </th>
                <th><button onClick={this.createLesson} className="btn btn-primary btn-block">
                        <i className="fa fa-plus"></i>
                    </button></th>
                    </tr>
                    </thead>
                <tbody>
                    {this.renderListOfLessons()}
                </tbody>
                    </table>
            </div>
        );
    }
}
