import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

//posts a project to db, runs a get to get all curreent projects
function* postProject(action){
    yield axios.post('/api/projects', {name: action.payload});

    //gets the new projects, now with posted project
    yield put({type:'FETCH_PROJECTS'});
}
//gets a project, sends it to reducer
function* fetchProjects() {
        let response = yield axios.get('/api/projects');
        yield put ({
            type: 'SET_PROJECTS',
            payload: response.data
        });
}
//deletes a project from db, runs a get to get all current projects
function* deleteProject(action){
    yield axios.delete(`/api/projects/${action.payload}`);

    yield put({type:'FETCH_PROJECTS'});
}
//watcher function to catch all dispatches
function* projectSaga() {
    yield takeEvery('POST_PROJECT', postProject);
    yield takeEvery('FETCH_PROJECTS', fetchProjects);
    yield takeEvery('DELETE_PROJECT', deleteProject);
}

export default projectSaga;