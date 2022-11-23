import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import FormData from 'form-data';

function* uploadAudio(action){

    console.log(' inside upload Audio saga', action.payload)
    let formData = new FormData();

    // formData.append('uploaded_audio', action.payload[0]);
}

function* fetchAudio() {
        let response = yield axios.get('/api/audio');
        yield put ({
            type: 'SAVE_AUDIO',
            payload: response.data
        })
    
}


function* audioSaga() {
    yield takeEvery('UPLOAD_AUDIO', uploadAudio);
    // yield takeEvery('', fetchAudio)
}

export default audioSaga;