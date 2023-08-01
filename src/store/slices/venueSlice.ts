import { createSlice } from "@reduxjs/toolkit";

type State = {
  allVenues: any[];
  venue: any;
};

const intialState: State = {
  allVenues: [],
  venue: null,
};

const venueSlice = createSlice({
  name: "venue",
  initialState: intialState,
  reducers: {
    setAllVenues: (state, action) => {
      state.allVenues = action.payload;
    },
    setVenue: (state, action) => {
      state.venue = action.payload;
    },
  },
});

export const { setAllVenues, setVenue } = venueSlice.actions;

export default venueSlice.reducer;
