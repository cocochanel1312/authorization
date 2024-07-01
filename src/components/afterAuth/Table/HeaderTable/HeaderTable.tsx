
import HeaderTableButton from "./HeaderTableButton/HeaderTableButton"
import SearchTable from "./SearchTable/SearchTable"

export const HeaderTable = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <SearchTable />
      <HeaderTableButton />
    </div>
  )
}

export default HeaderTable
