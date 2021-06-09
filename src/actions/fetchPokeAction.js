import axios from 'axios'

const FETCH_FAIL = "FETCH_FAIL";
const FETCH_START = "FETCH_START";
const FETCH_SUCCESS = "FETCH_SUCCESS";

const getPokemon = () => {

    return dispatch => {
        for (let i=1; i <= 898; i++) { 
            axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
                .then((result) => {
                    dispatch(fetchSuccess(result.data) );
                }).catch((err) => {
                    dispatch(fetchFail(err) ); 
                })
        }
    }
}

const fetchFail = (err) => {
    return {type: FETCH_FAIL, payload: err }
}

const fetchStart = () => {
    return {type: FETCH_START}
}

const fetchSuccess = (item) => {
    return {type: FETCH_SUCCESS, payload: item }
}

export {
    FETCH_FAIL,
    FETCH_START,
    FETCH_SUCCESS,
    fetchFail,
    fetchStart,
    fetchSuccess,
    getPokemon
}