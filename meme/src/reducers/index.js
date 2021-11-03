import { FETCH_ERROR, FETCH_START, FETCH_SUCCESS } from "../actions"
const initialState = {
    comic: {},
    isFetching: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case(FETCH_START):
            return({
                ...state,
                comic: {},
                isFetching: true,
                error:''
            })
        case(FETCH_SUCCESS):
            return({
                ...state,
                comic: action.payload,
                isFetching: false,
                error: ''
            })
        case(FETCH_ERROR):
            return({
                ...state,
                comic: {},
                isFetching: false,
                error: `Something went wrong: ${action.payload}`
            })
        default:
            return state
    }
}