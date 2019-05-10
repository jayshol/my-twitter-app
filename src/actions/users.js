

import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const AUTH_ERROR = 'AUTH_ERROR';
export const authError = error => ({
    type: AUTH_ERROR,
    error
});

export const registerUser = user => dispatch => {
    return fetch(`${API_BASE_URL}/users/signup`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .catch(err => {
            
           dispatch(authError(err));            
            
        });
};
