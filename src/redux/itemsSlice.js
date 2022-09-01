import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addContacts: (state, { payload }) => [...state, payload],
    deleteContacts: (state, { payload }) =>
      state.filter(item => item.id !== payload),
  },
});

export const { addContacts, deleteContacts } = itemsSlice.actions;
export default itemsSlice.reducer;
