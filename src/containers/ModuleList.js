import React, {Component} from 'react'
import ModuleListItem from '../components/ModuleListItem';
import ModuleService from '../services/ModuleService'

export default class ModuleList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courseId: '',
            module: { title: '' },
            modules: []
        };

        this.createModule = this.createModule.bind(this);
        this.titleChanged = this.titleChanged.bind(this);
        this.deleteModule = this.deleteModule.bind(this);
        this.setCourseId = this.setCourseId.bind(this);
        this.moduleService = ModuleService.instance;
    }

    setModules(modules) {
        this.setState({modules: modules});
        this.render();
    }

    findAllModulesForCourse(courseId) {
        this.moduleService
            .findAllModulesForCourse(courseId)
            .then((modules) => {this.setModules(modules)});
    }

    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }
    componentDidMount() {
        this.setCourseId(this.props.courseId);
    }
    componentWillReceiveProps(newProps){
        this.setCourseId(newProps.courseId);
        this.findAllModulesForCourse(newProps.courseId)
    }

    createModule() {
        console.log(this.state.module);
        this.moduleService
            .createModule(this.props.courseId, this.state.module)
            .then(() => { this.findAllModulesForCourse(this.props.courseId);});
        // document.getElementById('123').value = '';
        this.setState({module: {title: ''}});

    }
    titleChanged(event) {
        console.log(event.target.value);
        this.setState({module: {title: event.target.value}});
    }

    renderListOfModules() {
        let modules = null;

        if (this.state) {
            modules = this.state.modules.map(
                (module) => {
                    return <ModuleListItem courseId={this.state.courseId} module={module} key={module.id} deleteModule={this.deleteModule}/>
                });
        }
        return (
           modules
        )
    }

    deleteModule(moduleId) {
        console.log('delete');
        this.moduleService
            .deleteModule(moduleId)
            .then(() => { this.findAllModulesForCourse(this.props.courseId)});
    }

    render() {
        return (
            <div>
                <h3>Module List for Course - {this.state.courseId}</h3>
                <table className="table">
                    <thead>
                    <tr>
                        <th><input onChange={this.titleChanged}
                                   id="123"
                       value={this.state.module.title}
                       placeholder="title"
                       className="form-control"/>
                        </th>
               <th> <button onClick={this.createModule} className="btn btn-primary btn-block">
                    <i className="fa fa-plus"></i>
                </button>
               </th>
                    </tr>
                    </thead>
                <tbody>
                    {this.renderListOfModules()}
                </tbody>
                </table>
            </div>
        );
    }

}



