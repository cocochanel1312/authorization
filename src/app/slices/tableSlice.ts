import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import type { RootState } from "../store"
import type { GetProp, TableProps } from "antd"

type TablePaginationConfig = Exclude<GetProp<TableProps, "pagination">, boolean>

export interface ITableSliceItems {
  id: number
  title: string
  price: string
  category: string
  description: string
  image: string
}

interface IParamsType {
  search: string
}

export const fetchTable = createAsyncThunk(
  "table/fetchTableStatus",
  async (params: IParamsType) => {
    const search = params
    const { data } = await axios.get<ITableSliceItems[]>(
      `https://fakestoreapi.com/products?${search}`,
    )
    return data
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
  pagination: TablePaginationConfig
}

const initialState: InitialStateTableSlice = {
  items: [],
  status: TableFetchStatusEnum.LOADING,
  pagination: {
    defaultCurrent: 1,
    totalBoundaryShowSizeChanger: 1,
  },
}

const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    removeItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter(obj => obj.id !== action.payload)
    },
  },
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

export const { removeItem } = tableSlice.actions

export const tableItemsSelector = (state: RootState) => state.table.items
export const tableStatusSelector = (state: RootState) => state.table.status
export const tablePaginationSizeSelector = (state: RootState) =>
  state.table.pagination

export default tableSlice.reducer
