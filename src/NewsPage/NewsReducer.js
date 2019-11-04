import * as axios from "axios";

export const SET_POSTS = 'SET_POSTS';

const initState = {
    posts: [],
    pageSize: 10,
    currentPage: 1
};


const NewsReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_POSTS: {
            return {
                ...state,
                posts:[...state.posts, ...action.posts]
            }
        }
        default:
            return {...state}
    }
};
export const setUsers = (posts) => {
    return {type: SET_POSTS, posts}
};
export const getPosts = (currentPage, pageSize) => (dispatch) => {
    axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=${pageSize}`)
        .then((res) => {
            dispatch(setUsers(res.data));
            // dispatch(setTotalUsersCount(res.totalCount));
        })
}

export default NewsReducer