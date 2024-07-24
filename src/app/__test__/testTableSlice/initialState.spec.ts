import tableSliceReducer, { initialState } from "../../slices/tableSlice"

describe("initial state", () => {
  it("check initial state", () => {
    const state = tableSliceReducer(undefined, { type: "unknown" })

    expect(state).toEqual(initialState)
  })
})
