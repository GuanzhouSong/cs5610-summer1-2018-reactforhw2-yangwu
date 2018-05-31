import * as constants from "../constants/index"
const WIDGET_SAVE_URL =
    'http://localhost:8080/api/lesson/LID/widget/save';
const WIDGET_LESSON_URL =
    'http://localhost:8080/api/lesson/LID/widget';

export const widgetReducer = (state = {widgets: [], preview: false}, action) => {
    let newState
    switch (action.type) {

        case constants.PREVIEW:
            return {
                widgets: state.widgets,
                preview: !state.preview
            }

        case constants.HEADING_TEXT_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.text = action.text
                    }
                    return Object.assign({}, widget)
                })
            }

        case constants.HEADING_NAME_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if (widget.id === action.id) {
                        widget.name = action.name
                    }
                    return Object.assign({}, widget)
                })
            }

        case constants.PARAGRAPH_NAME_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if (widget.id === action.id) {
                        widget.name = action.name
                    }
                    return Object.assign({}, widget)
                })
            }


        case constants.LIST_NAME_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if (widget.id === action.id) {
                        widget.name = action.name
                    }
                    return Object.assign({}, widget)
                })
            }


        case constants.IMAGE_NAME_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if (widget.id === action.id) {
                        widget.name = action.name
                    }
                    return Object.assign({}, widget)
                })
            }

        case constants.LINK_NAME_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if (widget.id === action.id) {
                        widget.name = action.name
                    }
                    return Object.assign({}, widget)
                })
            }


        case constants.PARAGRAPH_TEXT_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.text = action.text
                    }
                    return Object.assign({}, widget)
                })
            }

        case constants.LIST_TEXT_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.text = action.text
                    }
                    return Object.assign({}, widget)
                })
            }

        case constants.IMAGE_TEXT_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.text = action.text
                    }
                    return Object.assign({}, widget)
                })
            }

        case constants.LINK_TEXT_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.text = action.text
                    }
                    return Object.assign({}, widget)
                })
            }

        case constants.HEADING_SIZE_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.size = action.size
                    }
                    return Object.assign({}, widget)
                })
            }

        case constants.SELECT_WIDGET_TYPE:
            console.log(action);
            let newState = {
                widgets: state.widgets.filter((widget) => {
                    if(widget.id === action.id) {
                        widget.widgetType = action.widgetType
                    }
                    return true;
                })
            }
            return JSON.parse(JSON.stringify(newState))

        // case constants.SAVE:
        //     console.log(state.widgets);
        //     fetch('http://localhost:8080/api/widget/save', { // how to populate LID based on different widget FIXME
        //         method: 'post',
        //         body: JSON.stringify(state.widgets),
        //         headers: {
        //             'content-type': 'application/json'}
        //     })
        //
        //     return state

        // case constants.SAVE:
        //     console.log(state.widgets);
        //
        //     for (var i = 0; i < state.widgets.length; i++) {
        //     fetch(WIDGET_SAVE_URL.replace('LID', state.widgets[i].lessonId), {
        //         method: 'post',
        //         body: JSON.stringify(state.widgets[i]),
        //         headers: {
        //             'content-type': 'application/json'
        //         }
        //     })
        // }
        //
        //     return state

        case constants.SAVE:
            fetch('http://localhost:8080/api/widget/save', {
                method: 'post',
                body: JSON.stringify(state.widgets),
                headers: {
                    'content-type': 'application/json'}
            })


            return state

        // case constants.SAVE_WIDGETS_BY_LESSON:
        //     fetch(WIDGET_SAVE_URL.replace('LID', action.lessonId), {
        //         method: 'post',
        //         body: JSON.stringify(state.widgets),
        //         headers: {
        //             'content-type': 'application/json'
        //         }
        //     }

        case constants.FIND_ALL_WIDGETS:
            newState = Object.assign({}, state)
            newState.widgets = action.widgets
            return newState

        // case constants.FIND_WIDGETS_BY_LESSON:
        //     console.log(state.widgets);
        //    return {
        //        widgets: state.widgets.filter(widget => (
        //            widget.lessonId === action.lessonId
        //            )
        //        )
        //    }

        case constants.FIND_WIDGETS_BY_LESSON:
            fetch(WIDGET_LESSON_URL.replace('LID', action.lessonId), {
                method: 'get',
                headers: {
                       'content-type': 'application/json'
            }
         })
        return state

        // case constants.FIND_WIDGETS_BY_LESSON:
        //     newState = Object.assign({}, state)
        //     newState.widgets = action.widgets
        //     return newState

        case constants.DELETE_WIDGET:
            return {
                widgets: state.widgets.filter(widget => (
                    widget.id !== action.id
                ))
            }


        case constants.ADD_WIDGET:
            return {
                widgets: [
                    ...state.widgets,
                    {
                        id: state.widgets.length + 1,
                        text: 'Widget text',
                        widgetType: 'Heading',
                        size: 1,
                        name: 'Widget name',
                        listType: 'Unordered list'
                    }
                ]
            }

        case constants.ADD_WIDGET_BY_LESSON:
            console.log(state);
            console.log(action);
            return {

                widgets: [
                    ...state.widgets,
                    {
                        id:state.widgets.length + 1,
                        text: 'Widget text',
                        title: 'default',
                        widgetType: 'Paragraph',
                        listType: 'ordered list',
                        size: 2,
                        // lessonId: action.lessonId,
                        lessonId:action.lessonId
                    }
                ]
            }

        default:
            return state
    }
}