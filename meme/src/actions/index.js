import axios from 'axios';

export const FETCH_START = 'FETCH_START'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_ERROR = 'FETCH_ERROR'


export const fetchStart = () => {
    return({type:FETCH_START})
}

export const fetchSuccess = (comic) => {
    return({type:FETCH_SUCCESS, payload: comic})
}

export const fetchError = (error) => {
    return({type:FETCH_ERROR, payload: error})
}

export const getComic = () => {
    return (dispatch) => {
        dispatch(fetchStart());
        
        axios.get('https://api.imgflip.com/get_memes')
        .then(res => {
            // console.log(res.data.data.memes)
            dispatch(fetchSuccess(res.data.data.memes[Math.floor(Math.random()*100)]))
        })
        .catch(err => {
            dispatch(fetchError)
        })
    }
}