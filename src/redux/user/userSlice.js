import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  loading: false,
  signinError: null,
  error: null,
  savedListing: [], // Ensure this is initialized properly
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loadingStart: (state) => {
      state.loading = true;
    },
    signinSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.signinError = null;
    },
    signinFailed: (state, action) => {
      state.signinError = action.payload;
      state.loading = false;
    },
    userUpdateSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    userUpdateFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Handle User Delete State
    userDeleteSuccess: (state) => {
      state.loading = false;
      state.currentUser = null;
      state.error = null;
    },
    userDeleteFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Handle Sign Out
    signoutSuccess: (state) => {
      state.loading = false;
      state.currentUser = null;
      state.error = null;
    },
    signoutFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Handle Saved Listings
    handleSave: (state, action) => {
      state.savedListing.push(action.payload);
    },
    handleListingRemove: (state, action) => {
      state.savedListing = state.savedListing.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

// Exporting actions
export const {
  loadingStart,
  signinSuccess,
  signinFailed,
  userUpdateFailed,
  userUpdateSuccess,
  userDeleteSuccess,
  userDeleteFail,
  signoutSuccess,
  signoutFailed,
  handleSave,
  handleListingRemove,
} = userSlice.actions;

// Export reducer
export default userSlice.reducer;
