import React from 'react';
import { Link } from 'react-router-dom'

class CourseRow extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <tr>
            <td>
                <Link to={`/course/${this.props.course.id}`}>
                    {this.props.course.title}
                </Link>
            </td>
            <td>
                me
            </td>
            <td>
                May 23, 2018
            </td>
                <td>
                <i onClick=
                                {() => this.props.deleteCourse(this.props.course.id)}
                            className="fa fa-trash"></i>
				</td>
            </tr>
        )
    }
}

export default CourseRow;



