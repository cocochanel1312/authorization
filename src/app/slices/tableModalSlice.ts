import type { PayloadAction } from "@reduxjs/toolkit"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import type { RootState } from "../store"

interface InitialTableModalSlice {
  title: string
  price: string
  category: string
  description: string
  image: string
  fetchingStatus: boolean
}

interface IParamasTableFetchModal {
  title: string
  price: string
  category: string
  description: string
  image: string
}

export const fetchAddModalItem = createAsyncThunk(
  "tableModal/fetchTabelModalStatus",
  async (params: IParamasTableFetchModal) => {
    const { title, price, category, description, image } = params
    const res = await axios
      .post<InitialTableModalSlice[]>("https://fakestoreapi.com/products", {
        title: title,
        price: price,
        description: description,
        image: image,
        category: category,
      })
      .then(res => res.data)
    console.log(res)
  },
)
// export enum TableModalFetchStatusEnum {
//   LOADING = "loading",
//   SUCCESS = "success",
//   ERROR = "error",
// }

const initialState: InitialTableModalSlice = {
  title: "",
  price: "",
  category: "",
  description: "",
  image: "",
  fetchingStatus: false,
}

export const tableModalSlice = createSlice({
  name: "tableModal",
  initialState,
  reducers: {
    setTitle(state, action: PayloadAction<string>) {
      state.title = action.payload
    },
    setPrice(state, action: PayloadAction<string>) {
      state.price = action.payload
    },
    setCategory(state, action: PayloadAction<string>) {
      state.category = action.payload
    },
    setDescription(state, action: PayloadAction<string>) {
      state.description = action.payload
    },
    setImage(state, action: PayloadAction<string>) {
      state.image = action.payload
    },
    setFetchingStatus(state, action: PayloadAction<boolean>) {
      state.fetchingStatus = action.payload
    },
  },
  // extraReducers: builder => {
  //   builder
  //     .addCase(fetchAddModalItem.pending, state => {
  //       state.status = TableModalFetchStatusEnum.LOADING
  //     })
  //     .addCase(fetchAddModalItem.fulfilled, state => {
  //       state.status = TableModalFetchStatusEnum.SUCCESS
  //     })
  //     .addCase(fetchAddModalItem.rejected, state => {
  //       state.status = TableModalFetchStatusEnum.ERROR
  //     })
  // },
})

export const {
  setTitle,
  setPrice,
  setCategory,
  setDescription,
  setImage,
  setFetchingStatus,
} = tableModalSlice.actions

export const tableModalStatusSelector = (state: RootState) =>
  state.tableModal.fetchingStatus

export default tableModalSlice.reducer
