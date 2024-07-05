import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"

interface InitialTableModalSlice {
  title: string
  price: string
  category: string
  description: string
  image: string
}

const initialState: InitialTableModalSlice = {
  title: "",
  price: "",
  category: "",
  description: "",
  image: "",
}

export const tableModalSlice = createSlice({
  name: "tableModal",
  initialState,
  reducers: {
    setTitle(state, action: PayloadAction<string>) {
      state.title = action.payload
      console.log("title", state.title)
    },
    setPrice(state, action: PayloadAction<string>) {
      state.price = action.payload
      console.log("price", state.price)
    },
    setCategory(state, action: PayloadAction<string>) {
      state.category = action.payload
      console.log("category", state.category)
    },
    setDescription(state, action: PayloadAction<string>) {
      state.description = action.payload
      console.log("description", state.description)
    },
    setImage(state, action: PayloadAction<string>) {
      state.image = action.payload
      console.log("image", state.image)
    },
  },
})

export const { setTitle, setPrice, setCategory, setDescription, setImage } =
  tableModalSlice.actions

export default tableModalSlice.reducer
