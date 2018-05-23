const LESSON_API_URL =
    'http://localhost:8080/api/course/CID/module/MID/lesson';
const LESSON_DELETE_URL =
    'http://localhost:8080/api/lesson';
let _singleton = Symbol();

export default class LessonService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Singleton!!!');
    }

    findAllLessonsForModule(moduleId, courseId) {
        return fetch(
            LESSON_API_URL
                .replace('CID', courseId).replace('MID', moduleId))
            .then(function (response) {
                return response.json();
                // if (response != null) {
                //     return response.json();
                // } else {
                //     alert('no lessons for this module');
                // }
            });
    }

    createLesson(courseId, moduleId, lesson) {
        return fetch(LESSON_API_URL.replace('CID', courseId).replace('MID', moduleId),
            {
                body: JSON.stringify(lesson),
                headers: { 'Content-Type': 'application/json' },
                method: 'POST'
            }).then(function (response)
        { return response.json(); })
    }

    deleteLesson(lessonId) {
        return fetch(LESSON_DELETE_URL + '/' + lessonId,
            {
                method: 'delete'
            })
    }

    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new LessonService(_singleton);
        return this[_singleton]
    }
}
