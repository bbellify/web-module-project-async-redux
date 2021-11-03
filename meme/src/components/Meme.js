import React, { useEffect } from "react"
import { connect } from 'react-redux'

import { getComic } from "../actions"

const Meme = ({meme, isFetching, error, dispatch}) => {    

    useEffect(()=> {
        dispatch(getComic());
    }, []);

    if (error) {
        return <h3>Hmm, something went wrong...</h3>
    }

    if (isFetching) {
        return <h3>Grabbin' you a template, one sec</h3>
    }

    const handleClick = () => {
        dispatch(getComic())
    }


    return(
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <button onClick={handleClick}>Grab a template</button>
            <h3>{meme.name}</h3>
            <img 
                alt='a meme'
                src={meme.url}
                width={meme.width > 600 ? (meme.width)/2 : meme.width} 
                />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        meme: state.meme,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps)(Meme)