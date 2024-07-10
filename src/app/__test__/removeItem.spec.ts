import tableSliceReducer, {initialState, removeItem } from "../slices/tableSlice"

describe("reducer removeItem", () => {
    it("check removeItem", () => {
       const removeItemState = tableSliceReducer(initialState, removeItem())

       expect(initialState.items).toEqual([])
    })
})