import { FETCH_ERROR, FETCH_START, FETCH_SUCCESS } from "../actions"
const initialState = {
    meme: {},
    isFetching: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case(FETCH_START):
            return({
                ...state,
                meme: {},
                isFetching: true,
                error:''
            })
        case(FETCH_SUCCESS):
            // console.log(action.payload)
            return({
                ...state,
                meme: action.payload,
                isFetching: false,
                error: ''
            })
        case(FETCH_ERROR):
            return({
                ...state,
                meme: {},
                isFetching: false,
                error: `Something went wrong: ${action.payload}`
            })
        default:
            return state
    }
}