import React from 'react';

export default class LessonTab
    extends React.Component {
    constructor(props) {
        super(props);

    }




    render() { return(
            <tr>
            <td>{this.props.lesson.title}</td>

        <td>
        <button onClick=
        {() => {if(window.confirm('Delete?')) this.props.deleteLesson(this.props.lesson.id)}}
        className="btn btn-primary">Delete</button>
        </td>
            </tr>

    );}
}