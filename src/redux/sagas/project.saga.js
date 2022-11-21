import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

//posts a project
function* postProject(action){
    yield axios.post('/api/projects', {name: action.payload})

    //gets the new projects, now with posted project
    yield put({type:'FETCH_PROJECTS'})
}
//gets a project, sends it to reducer
function* fetchProjects() {
        let response = yield axios.get('/api/projects');
        yield put ({
            type: 'SET_PROJECTS',
            payload: response.data
        });
}
//watcher function to catch all dispatches
function* projectSaga() {
    yield takeEvery('POST_PROJECT', postProject);
    yield takeEvery('FETCH_PROJECTS', fetchProjects);
}

export default projectSaga;