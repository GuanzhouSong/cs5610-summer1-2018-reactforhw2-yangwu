import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import CourseManager from './containers/CourseManager';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

import {Provider, connect} from 'react-redux'
import {createStore} from 'redux'
import {ADD_COURSE} from "./constants/index"
import {widgetReducer} from "./reducers/widgetReducer"

import {addCourse} from "./actions/index"
import App from './containers/WidgetList'

ReactDOM.render(
    <CourseManager/>,
    document.getElementById('root')
);


// let store = createStore(widgetReducer)
// ReactDOM.render(
//     <Provider store={store}>
//         <CourseManager/>
//     </Provider>,
//     document.getElementById('root')
// )


