import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* postProject(action){
    console.log('action payload', action.payload);
    
        yield axios.post('/api/projects', {name: action.payload})

    yield put({type:'FETCH_PROJECTS'})
}

function* fetchProjects() {
        let response = yield axios.get('/api/projects');
        yield put ({
            type: 'SET_PROJECTS',
            payload: response.data
        })
    
}

function* projectSaga() {
    yield takeEvery('POST_PROJECT', postProject);
    yield takeEvery('FETCH_PROJECTS', fetchProjects);
}

export default projectSaga;