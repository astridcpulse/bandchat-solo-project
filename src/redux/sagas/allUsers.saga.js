import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

//grabs ALL users, sends them to reducer
function* fetchAllUsers(){
    let response = yield axios.get('api/allUsers');
    yield put ({
        type: 'SET_ALL_USERS',
        payload: response.data
    });
}
//watcher function catches all dispatches
function* allUsersSaga(){
    yield takeEvery('FETCH_ALL_USERS', fetchAllUsers)
}

export default allUsersSaga;