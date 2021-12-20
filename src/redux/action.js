import * as types  from './actionTypes';
import { auth } from '../utils/firebase'


const registerStart = () => ({
    type: types.REGISTER_START,
});

const registerSuccess = ( user ) => ({
    type: types.REGISTER_SUCCESS,
    payload: user,
});

const registerError = (error) => ({
    type: types.REGISTER_FAIL,
    payload: error,
});

export const registerInitiate = (email, password) => {
    
    return function (dispatch) {
        dispatch(registerStart());
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(({ user }) => {
                dispatch(registerSuccess(user))
            })
            .catch(error => dispatch(registerError(error.message)))
    };  
  
};