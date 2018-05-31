import React, {Component} from 'react'

import WidgetService from '../services/WidgetService'
import {connect} from 'react-redux'
import * as actions from "../actions"
import WidgetContainer from '../components/Widget'


class WidgetList extends Component {
    constructor(props) {
        super(props);
        // console.log(props);
        this.state = {
            moduleId: '',
            courseId: '',
            lessonId: '',
            widget: {title: ''},
            widgets: []
        };

        this.createWidget = this.createWidget.bind(this);
        this.titleChanged = this.titleChanged.bind(this);
        this.deleteWidget = this.deleteWidget.bind(this);
        this.setModuleId = this.setModuleId.bind(this);
        this.setCourseId = this.setCourseId.bind(this);
        this.setLessonId = this.setLessonId.bind(this);
        this.widgetService = WidgetService.instance;

        // this.props.findWidgetsByLesson(this.props.lessonId)
        this.props.findAllWidgets()
    }


    setWidgets(widgets) {
        this.setState({widgets: widgets})
    }

    findAllWidgetsForLesson(lessonId) {
        this.widgetService
            .findAllWidgetsForLesson(lessonId, this.props.moduleId, this.props.courseId)
            .then((widgets) => {
                this.setWidgets(widgets)
                });
    }

    setLessonId(lessonId) {
        this.setState({lessonId: lessonId});
    }

    setModuleId(moduleId) {
        this.setState({moduleId: moduleId});
    }

    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }

    componentDidMount() {
        this.setCourseId(this.props.courseId);
        this.setLessonId(this.props.lessonId);
        this.setModuleId(this.props.moduleId);
    }

    componentWillReceiveProps(newProps) {
        console.log(newProps);
        this.setModuleId(newProps.moduleId);
        this.setCourseId(newProps.courseId);
        this.setLessonId(newProps.lessonId);
        this.findAllWidgetsForLesson(newProps.lessonId)
    }

    createWidget() {
        console.log(this.state.widget);
        this.widgetService
            .createWidget(this.props.courseId, this.props.moduleId, this.props.lessonId, this.state.widget)
            .then(() => {
                this.findAllWidgetsForLesson(this.props.lessonId);
                });
        this.setState({widget: {title: ''}});
    }

    titleChanged(event) {
        console.log(event.target.value);
        this.setState({widget: {title: event.target.value}});
    }

    deleteWidget(widgetId) {
        console.log('delete');
        this.widgetService
            .deleteWidget(widgetId)
            .then(() => {
                this.findAllWidgetsForLesson(this.props.lessonId);
            });
    }

    reorderWidget() {
        // FIXME
    }



    render() {
        return (
            <div>
                <h3>Widget List for Lesson- {this.props.lessonId}</h3>
                {/*<h2>Widget List {this.props.widgets.length}</h2>*/}

                <button hidden={this.props.previewMode} onClick={() =>this.props.save(this.props.lessonId)}>
                    Save
                </button>

                <button onClick={this.props.preview}>
                    Preview
                </button>


                <ul>
                    {/*{this.props.widgets.map(widget => (*/}
                        {/*<WidgetContainer widget={widget}*/}
                        {/*preview={this.props.previewMode}*/}
                        {/*key={widget.id}/>*/}
                        {/*))}*/}
                    {this.props.widgets.map(widget => (
                        <WidgetContainer widget={widget}
                                         preview={this.props.previewMode}
                                         key={widget.id}/>
                    ))}
                </ul>

                {/*<button onClick={() => this.props.addWidgetByLesson(this.props.lessonId)}>Add widget</button>*/}
                <button onClick={this.props.addWidget}>Add widget</button>
                {/*<button onClick={e => {*/}
                    {/*dispatch({type: 'ADD_WIDGET_BY_LESSON',*/}
                        {/*lessonId: this.props.lessonId})}}>*/}
                    {/*Add widget</button>*/}
            </div>
        );
    }
}

const stateToPropertiesMapper = (state) => ({
    widgets: state.widgets,
    previewMode: state.preview
})

const dispatcherToPropsMapper = dispatch => ({
    findAllWidgets: () => actions.findAllWidgets(dispatch),
    addWidget: () => actions.addWidget(dispatch),
    addWidgetByLesson: (lessonId) => actions.addWidgetByLesson(dispatch, lessonId), // fixme
    save: (lessonId) => actions.save(dispatch, lessonId),
    preview: () => actions.preview(dispatch),
    findWidgetsByLesson: (lessonId) => actions.findWidgetsByLesson(dispatch, lessonId)
})

const App = connect(
    stateToPropertiesMapper,
    dispatcherToPropsMapper
)(WidgetList)

export default App

