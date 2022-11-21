import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* postChord(action){
    
    yield axios.put(`/api/chord/`, action.payload);
    
    // get the new part data?
    yield put({type:'FETCH_PARTS', payload: action.payload.projectId})
}

function* chordSaga() {
    yield takeEvery('POST_CHORD', postChord);
    // yield takeEvery('FETCH_chord', fetchchord)
}

export default chordSaga;