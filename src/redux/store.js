import userReducer from "../redux/user/userSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Use AsyncStorage for React Native
// import searchSlice from "../redux/search/searchSlice";
// import saveListingSlice from "../redux/saveListing/saveListingSlice";
// import notificationSlice from "../redux/notifications/notificationSlice";

//===== Redux Persist Configuration =====//
const rootReducer = combineReducers({
  user: userReducer,
  // search: searchSlice,
  // notification: notificationSlice,
  // savedListing: saveListingSlice,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage, // Replace `storage` with `AsyncStorage` for React Native
  whitelist: ["user", "savedListing", "search"], // Persist only these slices
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

//===== Redux Store =====//
const store = configureStore({
  reducer: persistedReducer,

  //==== Middleware for serializable check =====//
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"], // Ignore these actions for serialization
      },
    }),
});

// Export the store and persistor
export const persistor = persistStore(store);
export default store;
