import React, { useEffect } from 'react'
import axios from 'axios'
import Pokemon from './pokemon'

import { connect } from 'react-redux'
import { fetchSuccess } from '../actions/fetchPokeAction'

function PokeList(props) {

    useEffect(() => {
        for (let i=1; i <= 898; i++) { 
            axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
                .then((result) => {
                    props.fetchSuccess(result.data);
                }).catch((err) => alert(err))
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div id="pokeList">
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