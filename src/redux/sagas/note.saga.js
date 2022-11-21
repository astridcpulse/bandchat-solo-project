import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* postNote(action){
    
    yield axios.put(`/api/note/`, action.payload);
    
    // get the new part data?
    yield put({type:'FETCH_PARTS', payload: action.payload.projectId})
}

function* noteSaga() {
    yield takeEvery('POST_NOTE', postNote);
    // yield takeEvery('FETCH_NOTE', fetchNote)
}

export default noteSaga;