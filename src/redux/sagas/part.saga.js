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
        let response = yield axios.get(`/api/part/${action.payload}`);
        yield put ({
            type: 'SET_PARTS',
            payload: response.data
        });
        console.log('fetch parts saga response', response.data)
}

//update a part based on category, value and partId
function* updatePart(action){
    console.log('update part', action.payload);
    yield axios.put('/api/part', action.payload);

    yield put({type:'FETCH_PARTS', payload: action.payload.projectId})

}
//watcher function to catch all dispatches
function* partSaga() {
    yield takeEvery('POST_PART', postPart);
    yield takeEvery('FETCH_PARTS', fetchParts);
}

export default partSaga;