import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import FormData from 'form-data';

function* uploadAudio(action){

    console.log(' inside upload Audio saga', action.payload)
    let formData = new FormData();

    formData.append('uploaded_audio', action.payload.blob);

    yield axios.put(`api/audio/${action.payload.partId}`, formData)

    yield put ({
        type: 'FETCH_PARTS', payload: action.payload.projectId
    })
}

function* deleteAudio(action){
    yield axios.delete(`api/audio/${action.payload.partId}`);

    yield put ({
        type: 'FETCH_PARTS', payload: action.payload.projectId
    })
}

function* audioSaga() {
    yield takeEvery('UPLOAD_AUDIO', uploadAudio);
    yield takeEvery('DELETE_AUDIO', deleteAudio);
}

export default audioSaga;