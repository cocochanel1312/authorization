import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../store"

interface InitialStateFilterSlice {
  searchValue: string
}

const initialState: InitialStateFilterSlice = {
  searchValue: "",
}

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload
    },
  },
})

export const searchValueSelector = (state: RootState) =>
  state.filter.searchValue

export const { setSearchValue } = filterSlice.actions

export default filterSlice.reducer
