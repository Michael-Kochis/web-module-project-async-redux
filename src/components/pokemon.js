import React from 'react'
import { connect } from 'react-redux'

function Pokemon(props) {
    return (
        <div className="poke-card">
            {props.pokemon && <div className="poke-content" ><img src={props.pokemon.sprites.front_default} 
                alt="Pokemon Front" />
                <p>{props.pokemon.id}: {props.pokemon.name}</p></div>}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        ...state
    }
}

export default connect(mapStateToProps)(Pokemon);