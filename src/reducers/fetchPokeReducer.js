import { FETCH_FAIL, FETCH_START, FETCH_SUCCESS } from '../actions/fetchPokeAction'

const initialState = {
    pokeList: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_FAIL:
            return state;
        case FETCH_START:
            return state;
        case FETCH_SUCCESS:
            const data = action.payload;
            
            return {
                ...state,
                pokeList: [
                    ...state.pokeList,
                    data
                ]
            }
        default: 
            return state
    }
}

export {
    reducer
}