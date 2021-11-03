import axios from "axios"
import { useEffect } from "react"

const Meme = ({}) => {
    
    useEffect(()=>{
        axios.get('https://api.imgflip.com/get_memes')
        .then(res => {
            console.log(res)
        })
    })
    
    return(
        <h3>Meme goes here</h3>

    )
}

export default Meme