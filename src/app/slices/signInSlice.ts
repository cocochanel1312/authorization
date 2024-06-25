import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../store"

interface InitialStateSignInSlice {
  email: string
  password: string
  error: string
  authorized: boolean
}

const initialState: InitialStateSignInSlice = {
  email: "",
  password: "",
  error: "",
  authorized: false,
}

export const signInSlice = createSlice({
  name: "signIn",
  initialState,
  reducers: {
    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload
    },
    setPassword(state, action: PayloadAction<string>) {
      state.password = action.payload
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload
    },
    setAuthorized(state, action: PayloadAction<boolean>) {
      state.authorized = action.payload
    },
  },
})

export const { setEmail, setPassword, setError, setAuthorized } =
  signInSlice.actions

export default signInSlice.reducer
