import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Pokemon from "../components/Pocemon/Pokemon";
import {fetchPokemons} from "../store/pocemons/pokemonsSlice";

const Main = () => {
    const dispatch = useDispatch();
    const {pokemons, loading, error} = useSelector(state => state.pokemonsSlice);

    useEffect(() => {
        dispatch(fetchPokemons())
    }, [dispatch])

    const styles = {
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        boxSizing: 'border-box',
        padding: '0 15px',
    }
    return (
        <div style={styles}>
            {!loading ? pokemons.map((pokemon, i) => <Pokemon key={pokemon.id} {...pokemon}/>) :
                <h3 style={{marginTop: '30px'}}>Loading...</h3>}
            <h3 style={{color: 'red', marginTop: '30px'}}>{error}</h3>
        </div>
    );
};

export default Main;
