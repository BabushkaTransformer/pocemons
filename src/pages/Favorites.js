import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Pokemon from "../components/Pocemon/Pokemon";
import {fetchPokemons} from "../store/pocemons/pokemonsSlice";

const Favorites = () => {
    const dispatch = useDispatch();
    const pokemons = useSelector(state => state.pokemonsSlice.pokemons);
    const favorites = pokemons.filter(pokemon => pokemon.isFavorite === true);

    useEffect(() => {
        dispatch(fetchPokemons());
    }, [dispatch]);

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
            {favorites.length ? favorites.map((el, i) => <Pokemon key={i} {...el}/>) : <h2>Нет фаворитов</h2>}
        </div>
    );
};

export default Favorites;
