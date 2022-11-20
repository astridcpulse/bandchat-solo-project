import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* postAudio(action){
    console.log('action payload audio', action.payload);
    
        yield axios.post('/api/audio', action.payload)
    //  catch (err){
    //     console.error('error in storing audio to db', err);
    // }

    yield put({type:'FETCH_AUDIO'})
}

function* fetchAudio() {
        let response = yield axios.get('/api/audio');
        yield put ({
            type: 'SAVE_AUDIO',
            payload: response.data
        })
    
}


function* audioSaga() {
    yield takeEvery('POST_AUDIO', postAudio);
    yield takeEvery('FETCH_AUDIO', fetchAudio)
}

export default audioSaga;