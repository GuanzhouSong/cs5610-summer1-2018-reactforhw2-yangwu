import React from 'react'
import LessonTabs from './LessonTabs'

export default class ModuleEditor
    extends React.Component {

    constructor(props) {
        super(props);
        this.state = {moduleId: this.props.match.params.moduleId};
        this.selectModule = this.selectModule.bind(this);
    }

    componentDidMount() {
        this.selectModule
        (this.props.match.params.moduleId);
    }

    componentWillReceiveNewProps(newProps) {
        this.selectModule
        (newProps.match.params.moduleId);
    }

    selectModule(moduleId) {
        this.setState({moduleId: moduleId});
    }

    render() { return(
        <div>
            {/*<h2>Editing module: {this.state.moduleId}</h2>*/}
                <div className="col-8">
                    <LessonTabs moduleId={this.props.match.params.moduleId}/>
                </div>
        </div>
    );}}

