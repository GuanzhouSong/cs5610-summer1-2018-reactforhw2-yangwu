import * as constants from "../constants/index"

const WIDGET_LESSON_URL =
    'http://localhost:8080/api/lesson/LID/widget';
export const addWidget = dispatch => (
    dispatch({type: constants.ADD_WIDGET})
)

export const addWidgetByLesson = (dispatch, lessonId) => (
    dispatch({
        type: constants.ADD_WIDGET_BY_LESSON,
        lessonId: lessonId})
)

// export const findWidgetsByLesson = (dispatch, lessonId) => {
//         console.log(lessonId);
//         dispatch({
//             type: constants.FIND_WIDGETS_BY_LESSON,
//             lessonId: lessonId})
// }

// export const findWidgetsByLesson = (dispatch, lessonId) => {
//     console.log(lessonId);
//     fetch(WIDGET_LESSON_URL.replace('LID', lessonId))
//         .then(response => (response.json))
//         .then(widgets => dispatch({
//         type: constants.FIND_WIDGETS_BY_LESSON,
//         widgets: widgets}))
// }

export const findWidgetsByLesson = (dispatch, lessonId) => {
    dispatch({type: constants.FIND_WIDGETS_BY_LESSON,
    lessonId:lessonId})
}

// export const save = (dispatch, lessonId) => (
//     dispatch({type: constants.SAVE,
//     lessonId: lessonId})
// )

export const save = dispatch => (
    dispatch({type: constants.SAVE})
)

export const saveWidgetsByLesson = (dispatch, lessonId) => {
    dispatch({type: constants.SAVE_WIDGETS_BY_LESSON,
    lessonId: lessonId})
}

export const preview = dispatch => (
    dispatch({type: constants.PREVIEW})
)

export const findAllWidgets = dispatch => {
    fetch('http://localhost:8080/api/widget')
        .then(response => (response.json()))
        .then(widgets => dispatch({
            type: constants.FIND_ALL_WIDGETS,
            widgets: widgets }))
}

// export const findWidgetsById = dispatch => {
//         fetch('http://localhost:8080/api/widget')
//             .then(response => (response.json()))
//             .then(widgets => dispatch({
//                 type: constants.FIND_WIDGETS_BY_ID,
//                 widgets: widgets}))
// }

export const headingTextChanged = (dispatch, widgetId, newText) => (
    dispatch({
        type: constants.HEADING_TEXT_CHANGED,
        id: widgetId,
        text: newText})
)

export const paragraphTextChanged = (dispatch, widgetId, newText) => (
    dispatch({
        type: constants.PARAGRAPH_TEXT_CHANGED,
        id: widgetId,
        text: newText})
)

export const headingSizeChanged = (dispatch, widgetId, newSize) => (
    dispatch({
        type: constants.HEADING_SIZE_CHANGED,
        id: widgetId,
        size: newSize})
)

export const headingNameChanged = (dispatch, widgetId, newName) => (
    dispatch({
        type: constants.HEADING_NAME_CHANGED,
        id: widgetId,
        name: newName})
)

//  listNameChanged, listTypeChanged, listTextChanged
// imageTextChanged, imageNameChanged

export const listTypeChanged = (dispatch, widgetId, newListType) => (
    dispatch({
        type:constants.LIST_TYPE_CHANGED,
        id: widgetId,
        listType: newListType})
)

export const listNameChanged = (dispatch, widgetId, newName) => (
    dispatch({
        type: constants.LIST_NAME_CHANGED,
        id: widgetId,
        name: newName})
)

export const listTextChanged = (dispatch, widgetId, newText) => (
    dispatch({
        type: constants.LIST_TEXT_CHANGED,
        id: widgetId,
        text: newText})
)


export const imageNameChanged = (dispatch, widgetId, newName) => (
    dispatch({
        type: constants.IMAGE_NAME_CHANGED,
        id: widgetId,
        name: newName})
)

export const paragraphNameChanged = (dispatch, widgetId, newName) => (
    dispatch({
        type: constants.PARAGRAPH_NAME_CHANGED,
        id: widgetId,
        name: newName})
)

export const imageTextChanged = (dispatch, widgetId, newText) => (
    dispatch({
        type: constants.IMAGE_TEXT_CHANGED,
        id: widgetId,
        text: newText})
)

export const linkNameChanged = (dispatch, widgetId, newName) => (
    dispatch({
        type: constants.LINK_NAME_CHANGED,
        id: widgetId,
        name: newName})
)

export const linkTextChanged = (dispatch, widgetId, newText) => (
    dispatch({
        type: constants.LINK_TEXT_CHANGED,
        id: widgetId,
        text: newText})
)