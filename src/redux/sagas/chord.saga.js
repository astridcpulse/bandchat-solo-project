import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* deleteChord(action){
    yield axios.delete(`/api/chord/${action.payload.partId}`);

    yield put({type:'FETCH_PARTS', payload: action.payload.projectId})
}

function* chordSaga() {
    yield takeEvery('DELETE_CHORD', deleteChord)
}

export default chordSaga;