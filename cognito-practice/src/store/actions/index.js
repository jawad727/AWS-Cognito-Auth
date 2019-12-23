import axios from 'axios'

export const FETCH_USERS = "FETCH_USERS"
export const POST_USER = "POST_USER"
export const FETCH_POSTS = "FETCH_POSTS"
export const MAKE_POST = "MAKE_POST"
export const DELETE_POST = "DELETE_POST"
export const FETCH_POST_BY_USER = "FETCH_POST_BY_USER"
export const FETCH_COMMENTS = "FETCH_COMMENTS"
export const POST_COMMENT = "POST_COMMENT"
export const UPDATE_USER = "UPDATE_USER"
export const FETCH_LIKES = "FETCH_LIKES"
export const POST_LIKE = "POST_LIKE"
export const FETCH_SINGLE_USER = "FETCH_SINGLE_USER"

const baseURL = "https://u242fne979.execute-api.us-east-1.amazonaws.com/dev"
const baseURL2 = "https://jb6y0o91j7.execute-api.us-east-1.amazonaws.com/dev"

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

export const fetchSingleUser = (id) => dispatch => {
    return axios.get(`${baseURL}/singleuser/${id}`)
    .then(res => {
        dispatch({
            type: FETCH_SINGLE_USER,
            payload: res.data
        })
    }).catch(err => {
        console.log(err)
    })
}

export const fetchComments = (id) => dispatch => {  
    return axios.get(`${baseURL2}/comments/${id}`)
    .then(res => {
        dispatch({
            type: FETCH_COMMENTS,
            payload: res.data
        })
    }).catch(err => {
        console.log(err)
    })
}

export const fetchLikes = (id) => dispatch => { 
    return axios.get(`${baseURL}/liked/${id}`)
    .then(res => {
        dispatch({
            type: FETCH_LIKES,
            payload: res.data
        })
    }).catch(err => {
        console.log(err)
    })
}

export const postLike = (params) => dispatch => {
    return axios.post(`${baseURL}/like`, params)
    .then(res => {
        dispatch({
            type: POST_LIKE,
            payload: res.data
        })
    })
    .catch(err => {
        console.log(err)
    })
}


export const postComment = (comment) => dispatch => {
    return axios.post(`${baseURL2}/post`, comment)
    .then(res => {
        dispatch({
            type: POST_COMMENT,
            payload: res.data
        })
    })
    .catch(err => {
        console.log(err)
    })
}


export const postUser = (user) => dispatch => {
    return axios.post(`${baseURL}/user`, user)
    .then(res => {
        dispatch({
            type: POST_USER,
            payload: res.data
        })
    })
    .catch(err => {
        console.log(err)
    })
}

export const fetchPosts = () => dispatch => {
    return axios.get(`${baseURL}/posts`)
    .then(res => {
        dispatch({
            type: FETCH_POSTS,
            payload: res.data
        })
    }).catch(err => {
        console.log(err)
    })
}

export const fetchPostsByUser = (id) => dispatch => {
    return axios.get(`${baseURL}/poste/${id}`)
    .then(res => {
        dispatch({
            type: FETCH_POST_BY_USER,
            payload: res.data
        })
    }).catch(err => {
        console.log(err)
    })
}

export const makePost = (post) => dispatch => {
    return axios.post(`${baseURL}/post`, post)
    .then(res => {
        dispatch({
            type: MAKE_POST,
            payload: res.data
        })
    })
    .catch(err => {
        console.log(err)
    })
}

export const deletePost = (id) => dispatch => {
    return axios.delete(`${baseURL}/post/${id}`)
    .then(res => {
        dispatch({
            type: DELETE_POST,
            payload: res.data
        })
    })
    .catch(err => {
        console.log(err)
    })
}


export const updateUser = (id, params) => dispatch => {
    return axios.put(`${baseURL}/singleuser/${id}`, params)
    .then(res => {
        dispatch({
            type: UPDATE_USER,
            payload: res.data
        })
    })
    .catch(err => {
        console.log(err)
    })
}