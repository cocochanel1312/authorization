import tableSliceReducer, {
  initialState,
  searchItems,
} from "../../slices/tableSlice"

describe("reducer serachItems", () => {
  it("check searchItems reducer", () => {
    const serachItemsReducer = tableSliceReducer(initialState, searchItems())

    expect(initialState.displayedItems.length).toBe([])
    expect(serachItemsReducer.status).toBe("")
  })
})
