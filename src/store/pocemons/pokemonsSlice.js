import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from '../../axiosConfig/axios.config';

const initialState = {
    pokemons: [],
    loading: false,
    error: '',
}

//async actions---------------------------------------------------------------------
export const fetchPokemons = createAsyncThunk(
    'pokemonsSlice/fetchPocemons',
    async (_, {rejectWithValue}) => {
        try {
            const response = await axios.get("/pocemons.json");
            let pokemonsArr = Object.keys(response.data || []).map((el) => {
                return {
                    id: el,
                    ...response.data[el]
                }
            })
            return pokemonsArr;
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)
export const createPokemon = createAsyncThunk(
    'pokemonsSlice/createPocemon',
    async ({pokemon, history}, {rejectWithValue}) => {
        try {
            const response = await axios.post("/pocemons.json", pokemon);
            history.push('/');
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)
export const deletePokemon = createAsyncThunk(
    'pokemonsSlice/deletePocemon',
    async (id, {dispatch, rejectWithValue}) => {
        try {
            const response = await axios.delete(`/pocemons/${id}.json/`);
            dispatch(removePokemon(id));
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)
export const toggleFavorite = createAsyncThunk(
    'pokemonsSlice/toggleFavorite',
    async (id, {getState, dispatch, rejectWithValue}) => {
        const pokemon = getState().pokemonsSlice.pokemons.find(pokemon => pokemon.id === id);
        try {
            const response = await axios.patch(`/pocemons/${id}.json`, {isFavorite: !pokemon.isFavorite});
            dispatch(togglePokemon(id));
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)


const setError = (state, action) => {
    state.loading = false;
    state.error = action.payload;
};

//reducers-----------------------------------------------------------
const pokemonsSlice = createSlice({
    name: 'pokemonsSlice',
    initialState,

    reducers: {
        removePokemon(state, action) {
            state.pokemons = state.pokemons.filter(pokemon => pokemon.id !== action.payload)
        },
        togglePokemon(state, action) {
            const togglePokemon = state.pokemons.find(pokemon => pokemon.id === action.payload);
            togglePokemon.isFavorite = !togglePokemon.isFavorite;
        }
    },
    extraReducers: {
        [fetchPokemons.pending]: (state) => {
            state.loading = true;
        },
        [fetchPokemons.fulfilled]: (state, action) => {
            state.loading = false;
            state.pokemons = action.payload;
        },
        [fetchPokemons.rejected]: setError,
        [createPokemon.rejected]: setError,
        [deletePokemon.rejected]: setError,
        [toggleFavorite.rejected]: setError
    }
})

export default pokemonsSlice.reducer;
export const {removePokemon, togglePokemon} = pokemonsSlice.actions;