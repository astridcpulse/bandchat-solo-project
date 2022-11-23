import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* deleteNote(action){
    yield axios.delete(`/api/note/${action.payload.partId}`);
    yield put({type:'FETCH_PARTS', payload: action.payload.projectId})

}
function* noteSaga() {
    yield takeEvery('DELETE_NOTE', deleteNote);
}

export default noteSaga;