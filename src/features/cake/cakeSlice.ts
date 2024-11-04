import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  numOfCakes: number
}

const initialState: InitialState = {
  numOfCakes: 10,
};

const cakeSlice = createSlice({
  name: "cake", // it will take name and then key as second part e.g cake/ordered
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfCakes--;
    },
    restocked: (state, action: PayloadAction<number>) => {
      state.numOfCakes += action.payload;
    },
  },
});

export default cakeSlice.reducer;
export const { ordered, restocked } = cakeSlice.actions;
