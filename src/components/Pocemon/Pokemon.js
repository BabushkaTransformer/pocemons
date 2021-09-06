import React from 'react';
import trash from '../../assets/delete.png'
import heart from '../../assets/heart.png';
import classes from "./Pokemon.module.css";
import {deletePokemon, toggleFavorite} from "../../store/pocemons/pokemonsSlice";
import {useDispatch} from "react-redux";

const Pokemon = ({name, description, image, id, isFavorite}) => {
    const dispatch = useDispatch();

    return (
        <div className={classes.Card}>
            <div className={classes.Img}>
                <img src={image} alt=""/>
            </div>

            <div>{name}</div>

            <div>
                <p>{description}</p>
                <div className={classes.Actions}>
                    <span className={isFavorite ? classes.Active : ''} onClick={() => dispatch(toggleFavorite(id))}><img
                        src={heart} alt='add to fav'/></span>
                    <span onClick={() => dispatch(deletePokemon(id))}><img
                        src={trash} alt='delete'/></span>
                </div>
            </div>
        </div>
    );
};

export default Pokemon;
