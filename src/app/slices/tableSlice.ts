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
  async () => {
    const { data } = await axios.get<ITableSliceItems[]>(
      `https://fakestoreapi.com/products?`,
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
  displayedItems: ITableSliceItems[]
  status: TableFetchStatusEnum
  pagination: TablePaginationConfig
}

const initialState: InitialStateTableSlice = {
  items: [],
  displayedItems: [],
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
      state.displayedItems = state.displayedItems.filter(
        obj => obj.id !== action.payload,
      )
    },

    searchItems(state, action: PayloadAction<string>) {
      state.status = TableFetchStatusEnum.LOADING

      if (!action.payload.length) {
        state.displayedItems = state.items

        state.status = TableFetchStatusEnum.SUCCESS

        return
      }

      const formattedArray = state.items.filter((el: ITableSliceItems) => {
        return el.title
          .toLocaleLowerCase()
          .includes(action.payload.toLocaleLowerCase())
      })

      state.displayedItems = formattedArray

      state.status = TableFetchStatusEnum.SUCCESS
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
          state.displayedItems = state.items
        },
      )
      .addCase(fetchTable.rejected, state => {
        state.status = TableFetchStatusEnum.ERROR
        state.items = []
      })
  },
})

export const { removeItem, searchItems } = tableSlice.actions

export const tableItemsSelector = (state: RootState) =>
  state.table.displayedItems
export const tableStatusSelector = (state: RootState) => state.table.status
export const tablePaginationSizeSelector = (state: RootState) =>
  state.table.pagination

export default tableSlice.reducer
