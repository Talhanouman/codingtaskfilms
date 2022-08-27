import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 110,
    favourite: [],
    favouritedIds: [],
    showBar: false,
    selectedItem: {},
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: state => {
            state.value += 1;
        },
        decrement: state => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
        setSnackBar: (state, { payload }) => {
            state.showBar = payload;
        },
        addToFav: (state, { payload }) => {
            if (state?.favouritedIds?.length > 0) {
                console.log("if")
                const index = state?.favouritedIds?.findIndex(
                    todo => todo == payload?.id,
                );
                if (index >= 0) {
                    console.log("here")
                    state.favourite = state.favourite?.filter(item => item?.id !== payload?.id)
                    state.favouritedIds = state.favouritedIds?.filter(item => item !== payload?.id)

                }
                else {

                    state.favourite = [...state?.favourite, payload];
                    state.favouritedIds = [...state?.favouritedIds, payload.id];
                }
            } else {

                state.favourite = [...state?.favourite, payload];
                state.favouritedIds = [...state?.favouritedIds, payload.id];
            }

        },
        UpdateIDsArray: (state, { payload }) => {
            state.favouritedIds = payload;
        },
        setCurrentSelectedItem: (state, { payload }) => {
            state.selectedItem = payload
        }
    }

})

export const { increment, decrement, incrementByAmount, addToFav } = counterSlice.actions
export const counterValue = (state: any) => state.CounterReducer.value;
export const FAV_LIST = (state: any) => state.CounterReducer.favourite;
export const FAV_LIST_IDS = (state: any) => state.CounterReducer.favouritedIds;
export default counterSlice.reducer;