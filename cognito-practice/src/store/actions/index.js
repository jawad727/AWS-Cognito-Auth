import axios from 'axios'

export const FETCH_USERS = "FETCH_USERS"

const baseURL = "https://u242fne979.execute-api.us-east-1.amazonaws.com/dev"

export const fetchUsers = () => dispatch => {
    return axios.get(`${baseURL}/users`)
    .then(res => {
        dispatch({
            type: FETCH_USERS,
            payload: res.data
        })
    }).catch(err => {
        console.log(err)
    })
}