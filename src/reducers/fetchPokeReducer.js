import { FETCH_FAIL, FETCH_START, FETCH_SUCCESS } from '../actions/fetchPokeAction'

const initialState = {
    name: "",
    id: 0,
    img: ""
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_FAIL:
            return state;
        case FETCH_START:
            return state;
        case FETCH_SUCCESS:
            console.log("In Fetch");
            const data = action.payload;
            console.log(data);
            
            return {
                ...state,
                name: data.name,
                id: data.id,
                //img: data.spirtes.front_default
            }
        default: 
            return state
    }
}

export {
    reducer
}