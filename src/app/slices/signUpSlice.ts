import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../store"


interface InitialStateSignUpSlice {
  email: string
  password: string
  repeatPassword: string
  error: string
  isFetching: boolean
}

const initialState: InitialStateSignUpSlice = {
  email: "",
  password: "",
  repeatPassword: "",
  error: "",
  isFetching: true,
}

export const signUpSlice = createSlice({
  name: "signUp",
  initialState,
  reducers: {
    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload
    },
    setPassword(state, action: PayloadAction<string>) {
      state.password = action.payload
    },
    setRepeatPassword(state, action: PayloadAction<string>) {
      state.repeatPassword = action.payload
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload
    },
    setIsFetching(state, action: PayloadAction<boolean>) {
      state.isFetching = action.payload
    },
  },
})

export const {
  setEmail,
  setPassword,
  setRepeatPassword,
  setError,
  setIsFetching,
} = signUpSlice.actions

export default signUpSlice.reducer
