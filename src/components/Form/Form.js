import {useState} from "react";
import {useDispatch} from "react-redux";
import classes from './Form.module.css';
import {createPokemon} from "../../store/pocemons/pokemonsSlice";
import {useHistory} from "react-router";

const Form = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [pokemon, setPokemon] = useState({
        name: '',
        description: '',
        image: '',
        isFavorite: false,
    });

    const addPokemonHandler = (e) => {
        e.preventDefault();
        dispatch(createPokemon({pokemon, history}))
    };

    return (
        <div className={classes.Container}>
            <form className={classes.Form}>
                <div>
                    <label className={classes.Label} htmlFor="name">
                        Pockmon Name
                    </label>
                    <input
                        className={classes.Input}
                        type="text"
                        id="name"
                        placeholder="Name"
                        onChange={(e) => setPokemon({...pokemon, name: e.target.value})}
                    />
                </div>
                <div>
                    <label className={classes.Label} htmlFor="description">
                        Pokemon Description
                    </label>
                    <input
                        className={classes.Input}
                        type="text"
                        id="description"
                        placeholder="Description"
                        onChange={(e) => setPokemon({...pokemon, description: e.target.value})}
                    />
                </div>
                <div>
                    <label className={classes.Label} htmlFor="img">
                        Pokemon Image
                    </label>
                    <input
                        className={classes.Input}
                        type="text"
                        id="img"
                        placeholder="Image"
                        onChange={(e) => setPokemon({...pokemon, image: e.target.value})}
                    />
                </div>
                <button className={classes.Button} onClick={(e) => addPokemonHandler(e)}>
                    Add Pokemon
                </button>
            </form>
        </div>
    );
};

export default Form;
