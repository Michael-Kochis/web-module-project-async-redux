import React, { useEffect } from 'react'
import axios from 'axios'

import { connect } from 'react-redux'
import { fetchSuccess } from '../actions/fetchPokeAction'

function PokeList(props) {

    useEffect(() => {
        console.log("Entering useEffect");
        axios.get("https://pokeapi.co/api/v2/pokemon/1")
            .then((result) => {
                // below is not getting dispatched
                props.fetchSuccess(result.data);
            }).catch((err) => alert(err))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div id="pokeList">
            This is the PokeList.
            {props.name && <p>{props.name}</p> }
            {props.id && <p>{props.id}</p> }
            {props.img && <p>{props.img}</p> }
        </div>
    )
}

function mapStateToProps(state) {
    return {
        ...state
    }
}

// function mapActionsToProps() {
//     return {
//         fetchSuccess
//     }
// }

export default connect(mapStateToProps, { fetchSuccess })(PokeList)