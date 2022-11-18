import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

//grabs ALL collaborators on a project, sends them to reducer

//TODO: Finish the fetch collaborators GET when I answer the question below
function* fetchCollaborators(action){
    let response = yield axios.get(`api/collaborators/${action.payload}`);
    console.log(response.data)
//     //NOTE: I'm not sure that I need to place these in a store? If I do have a store then 
//     //its going to be doing this loop of GETs into one store....which could be tricky to pull out the right stuff?
//     //I might be able to do something with like ID of the particular project, but then Id need to have my junction
//     //table working maybe?

    yield put ({
        type: 'SET_COLLABORATORS',
        payload: response.data
    });
}

function* postCollaborators(action){
    console.log('action payload', action.payload);

    yield axios.post('api/collaborators');

    // yield put({ type: 'FETCH_COLLABORATORS'});
}
//watcher function catches all dispatches
function* collaboratorSaga(){
    yield takeEvery('POST_COLLABORATORS', postCollaborators);
    yield takeEvery('FETCH_COLLABORATORS', fetchCollaborators);

}

export default collaboratorSaga;