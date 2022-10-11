import { configureStore } from "@reduxjs/toolkit";
import reducer from "../Reducers/reducer";

export const store = configureStore({
  reducer: {
    data: reducer.state,
  },
});
