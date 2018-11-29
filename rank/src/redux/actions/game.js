import axios from 'axios';

const url = process.env.NODE_ENV === 'production' ? "/api/v1/" : "http://localhost:8899/api/v1/"

export function getGames(){
    return(dispatch) => {
        axios.get(`${url}games`)
        .then((res)=> {
            let games = res.data
            dispatch({type: 'GET_GAMES', games})
        }).catch((err) => console.log(err))
    }
}

export function getGame(id) {
    return(dispatch) => {
        axios.get(`${url}games/${id}`)
        .then((res) => {
            let game = res.data
            dispatch({ type: 'GET_GAME', game})
        }).catch((err => console.log(err)))
    }
}