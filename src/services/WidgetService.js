const WIDGET_API_URL =
    'http://localhost:8080/api/course/CID/module/MID/lesson/LID/widget';
const WIDGET_LESSON_URL =
    'http://localhost:8080/api/lesson/LID/widget';
const WIDGET_DELETE_URL =
    'http://localhost:8080/api/widget';
let _singleton = Symbol();

export default class WidgetService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Singleton!!!');
    }

    findAllWidgetsForLesson(lessonId) {
        return fetch(
            WIDGET_LESSON_URL
                .replace('LID', lessonId))
            .then(function (response) {
                return response.json();
                // if (response != null) {
                //     return response.json();
                // } else {
                //     alert('no lessons for this module');
                // }
            });
    }

    createWidget(courseId, moduleId, lessonId, widget) {
        return fetch(WIDGET_API_URL.replace('CID', courseId).replace('MID', moduleId).replace('LID', lessonId),
            {
                body: JSON.stringify(widget),
                headers: { 'Content-Type': 'application/json' },
                method: 'POST'
            }).then(function (response)
        { return response.json(); })
    }

    deleteWidget(widgetId) {
        return fetch(WIDGET_DELETE_URL + '/' + widgetId,
            {
                method: 'delete'
            })
    }

    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new WidgetService(_singleton);
        return this[_singleton]
    }
}
