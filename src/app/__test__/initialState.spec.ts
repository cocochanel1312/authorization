import tableSliceReducer, {initialState} from "../slices/tableSlice"

describe("initial state", () => {
    it("check initial state", () => {
       const state = tableSliceReducer(undefined, {type: "unknow"})

       expect(state).toEqual(initialState)
    })
})