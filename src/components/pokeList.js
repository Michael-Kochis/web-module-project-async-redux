import React, { useEffect } from 'react'
import Pokemon from './pokemon'

import { connect } from 'react-redux'
import { getPokemon } from '../actions/fetchPokeAction'

function PokeList(props) {

    useEffect(() => {
        props.getPokemon();
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

export default connect(mapStateToProps, { getPokemon })(PokeList)