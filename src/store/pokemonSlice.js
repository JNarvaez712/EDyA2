import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPokemon = createAsyncThunk(
    'pokemon.fetchPokemon',
    async (id) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        return response.json();
    }
);

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        data: null,
        isLoading: false,
        hasError: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPokemon.pending, (state) => {
                state.isLoading = true;
                state.hasError = null;
            })
            .addCase(fetchPokemon.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchPokemon.rejected, (state, action) => {
                state.isLoading = false;
                state.hasError = action.error;
            });
    },
});

export default pokemonSlice.reducer;