import {configureStore} from '@reduxjs/toolkit';
import pokemonsSlice from "./pocemons/pokemonsSlice";

export const store = configureStore({
    reducer: {
        pokemonsSlice,
    },
});
