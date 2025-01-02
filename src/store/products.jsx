import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { projects: [], projectsPerPage: 6, isLoading: true };

const productSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setProducts(prevState, { payload }) {
      prevState.projects = payload;
      prevState.isLoading = false;
    },
  },
});

export const store = configureStore({
  reducer: productSlice.reducer,
});

export const productsActions = productSlice.actions;
