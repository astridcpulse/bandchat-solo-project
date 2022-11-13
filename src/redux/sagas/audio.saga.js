import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* storeAudio(action){
    try {
        yield axios.post('/api/audio')
    } catch (err){
        console.error('error in storing audio to db', err);
    }

    yield put({type:'SET_AUDIO',   payload:})
}


function* audioSaga() {
    yield takeEvery('STORE_AUDIO', storeAudio);

}

export default audioSaga;