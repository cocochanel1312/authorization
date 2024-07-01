import type { Action, ThunkAction } from "@reduxjs/toolkit"
import { configureStore } from "@reduxjs/toolkit"
import signUp from "./slices/signUpSlice"
import signIn from "./slices/signInSlice"
import table from "./slices/tableSlice"
import filter from "./slices/filterSlice"

export const store = configureStore({
  reducer: {
    signUp,
    signIn,
    table,
    filter,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>
