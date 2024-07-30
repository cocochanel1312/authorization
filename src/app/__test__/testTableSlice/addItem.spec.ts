import tableSliceReducer, {
  initialState,
  addItem,
} from "../../slices/tableSlice"

describe("reducer addItem", () => {
  it("check addItemReducer", () => {
    const addItemState = tableSliceReducer(initialState, addItem())

    expect(initialState.displayedItems).toEqual([])
    expect(addItemState.displayedItems).toEqual([undefined])
  })
})
