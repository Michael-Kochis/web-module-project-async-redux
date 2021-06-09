import React, { useEffect } from 'react'
import axios from 'axios'
import Pokemon from './pokemon'

import { connect } from 'react-redux'
import { fetchSuccess } from '../actions/fetchPokeAction'

function PokeList(props) {

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon/1")
            .then((result) => {
                props.fetchSuccess(result.data);
            }).catch((err) => alert(err))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    console.log("Props.pokeList");
    console.log(props.pokeList);

    return (
        <div id="pokeList">
            This is the PokeList.
            {props.pokeList.map((item) => <Pokemon key={item.id} pokemon={item} />)}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        ...state
    }
}

export default connect(mapStateToProps, { fetchSuccess })(PokeList)