import tableSliceReducer, {
  initialState,
  removeItem,
} from "../../slices/tableSlice"

describe("reducer removeItem", () => {
  it("check removeItem reducer", () => {
    const removeItemState = tableSliceReducer(initialState, removeItem())

    expect(initialState.displayedItems).toEqual([])
    expect(removeItemState.displayedItems).toEqual([])
  })
})
