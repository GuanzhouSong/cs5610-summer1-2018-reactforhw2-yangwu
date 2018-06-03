import React from 'react';
import CourseRow from "../components/CourseRow";
import CourseService from "../services/CourseService"

class CourseList extends React.Component {
    constructor() {
        super();
        this.state = {
            course: { title: '' },
            courses: [{title: '', id: 123}]
        };

        this.courseService = CourseService.instance;
        this.titleChanged = this.titleChanged.bind(this);
        this.createCourse = this.createCourse.bind(this);
        this.deleteCourse = this.deleteCourse.bind(this);
    }

    componentDidMount() {
        this.findAllCourses();
    }

    findAllCourses() {
        this.courseService.findAllCourses()
            .then((courses) => {
                console.log(courses);
                this.setState({courses: courses});
                this.render();
            });
    }

    renderCourseRows() {
      let courses = null;

      if (this.state) {
          courses = this.state.courses.map(
              (course) => {return <CourseRow key={course.id} course={course} deleteCourse={this.deleteCourse}/>}
          )
      }

      return (
          courses
      )
    }

    deleteCourse(courseId) {
        console.log('delete');
        this.courseService
            .deleteCourse(courseId)
            .then(() => { this.findAllCourses();});
    }

    titleChanged(event) {
        console.log(event.target.value);
        this.setState({
            course: { title: event.target.value }
        });
    }

    createCourse() {
        console.log("create course");
        this.courseService
            .createCourse(this.state.course)
            .then(() => { this.findAllCourses();});
        document.getElementById('titleFld').value = '';
        this.setState({course: {title: ''}});
    }

    render() {
        return (
            <div>

                <table className="table">
                    <thead>
                    <tr>

                        <th><input onChange={this.titleChanged}
                                   className="form-control" id="titleFld"
                                   placeholder="New Course Title"/></th>
                        <th><button onClick={this.createCourse}
                                    className="btn btn-primary">Add</button></th>


                    </tr>
                    </thead>
                </table>
                {/*<table className="table">*/}
                    {/*<thead>*/}
                    {/*<tr>*/}
                        {/*<th>Title</th>*/}
                        {/*<th>Owned by</th>*/}
                        {/*<th>Last modified by me</th>*/}
                    {/*</tr>*/}
                    {/*</thead>*/}
                    {/*<tbody>*/}
                    {/*{this.renderCourseRows()}*/}
                    {/*</tbody>*/}

                {/*</table>*/}

                <table className="table">
                    <thead>
                    <tr>
                        <th scope='col'>Title</th>
                        <th scope='col'>Owned by</th>
                        <th scope='col'>Last modified by me</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderCourseRows()}
                    </tbody>

                </table>

            </div>
        )
    }
}

export default CourseList;

