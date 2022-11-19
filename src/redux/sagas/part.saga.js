import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

//posts a part
function* postPart(action){
    yield axios.post('/api/parts', {name: action.payload})

    //gets the new parts, now with posted part
    yield put({type:'FETCH_PARTS'})
}
//gets a part, sends it to reducer
function* fetchParts(action) {
    console.log('part ACtion payload', action.payload);

        let response = yield axios.get(`/api/parts/${action.payload}`);
        yield put ({
            type: 'SET_PARTS',
            payload: response.data
        });
}
//watcher function to catch all dispatches
function* partSaga() {
    yield takeEvery('POST_PART', postPart);
    yield takeEvery('FETCH_PARTS', fetchParts);
}

export default partSaga;