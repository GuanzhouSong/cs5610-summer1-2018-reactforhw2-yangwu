import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from "../actions"
import WidgetContainer from '../components/Widget'

class WidgetList extends Component {
    constructor(props) {
        super(props);
        // this.props.findAllWidgets()
        this.props.findWidgetsByLesson(this.props.lessonId);
    }

    componentDidMount() {
        this.props.findWidgetsByLesson(this.props.lessonId)
    }

    componentWillReceiveProps(newProps) {
        if (newProps.lessonId !== this.props.lessonId) {
            this.props.findWidgetsByLesson(newProps.lessonId)
        }
    }

    render() {
        console.log(this.props.lessonId)
        return (

            <div>

                <form className="form-inline float-right">
                {/*<h2>Widget List </h2>*/}

                <button type="button" className="btn btn-info" hidden={this.props.previewMode}
                        onClick={() => this.props.saveWidgetByLesson(this.props.lessonId)}>
                    Save
                </button>

                    {/*<button type="button" className="btn btn-info" hidden={this.props.previewMode}*/}
                            {/*onClick={() => this.props.saveWidgetByLesson(this.props.lessonId)}>*/}
                        {/*Save*/}
                    {/*</button>*/}

                <button type="button" className="btn btn-info" onClick={this.props.preview}>
                    Preview
                </button>


                </form>
                <br/>
                <br/>
                <br/>

                <ul>

                    {this.props.widgets.map(widget => (
                        <WidgetContainer widget={widget}
                                         preview={this.props.previewMode}
                                         key={widget.id}/>
                    ))}
                </ul>


                <button className="btn btn-primary float-right" onClick={this.props.addWidget}><i className="fa fa-plus"></i></button>


                {/*<button className="btn btn-primary" onClick={this.props.addWidgetByLesson(this.props.lessonId)}>Add widget</button>*/}

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
    addWidgetByLesson: (lessonId) => actions.addWidgetByLesson(dispatch, lessonId),
    save: () => actions.save(dispatch),
    saveWidgetByLesson: (lessonId) => actions.saveWidgetByLesson(dispatch, lessonId),
    preview: () => actions.preview(dispatch),
    findWidgetsByLesson: (lessonId) => actions.findWidgetsByLesson(dispatch, lessonId)
})

const App = connect(
    stateToPropertiesMapper,
    dispatcherToPropsMapper
)(WidgetList)

export default App

