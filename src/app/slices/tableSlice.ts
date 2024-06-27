import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import type { RootState } from "../store"

export interface ITableSliceItems {
  id: number
  title: string
  price: string
  category: string
  description: string
  image: string
}

export const fetchTable = createAsyncThunk(
  "table/fetchTableStatus",
  async () => {
    const response = await axios.get<ITableSliceItems[]>(
      "https://fakestoreapi.com/products",
    )
    return response.data
  },
)

export enum TableFetchStatusEnum {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

interface InitialStateTableSlice {
  items: ITableSliceItems[]
  status: TableFetchStatusEnum
}

const initialState: InitialStateTableSlice = {
  items: [],
  status: TableFetchStatusEnum.LOADING,
}

const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchTable.pending, state => {
        state.status = TableFetchStatusEnum.LOADING
        state.items = []
      })
      .addCase(
        fetchTable.fulfilled,
        (state, action: PayloadAction<ITableSliceItems[]>) => {
          state.status = TableFetchStatusEnum.SUCCESS
          state.items = action.payload
        },
      )
      .addCase(fetchTable.rejected, state => {
        state.status = TableFetchStatusEnum.ERROR
        state.items = []
      })
  },
})

export const tableItemsSelector = (state: RootState) => state.table.items
export const tableStatusSelector = (state: RootState) => state.table.status

export default tableSlice.reducer
