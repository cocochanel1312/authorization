import { Table } from "antd"
import type { TableProps } from "antd"
import { useEffect } from "react"

import {
  TableFetchStatusEnum,
  fetchTable,
  tableItemsSelector,
  tableStatusSelector,
} from "../../../app/slices/tableSlice"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import type { ITableSliceItems } from "../../../app/slices/tableSlice"

import NoDataPlug from "../../shared/components/NoDataPlug/NoDataPlug"

const columns: TableProps<ITableSliceItems>["columns"] = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    width: 250,
    ellipsis: true,
  },
  {
    title: "ImageUrl",
    dataIndex: "image",
    key: "image",
    ellipsis: true,
  },
]

const TableSettings: React.FC = () => {
  const data = useAppSelector(tableItemsSelector)
  const fetchStatus = useAppSelector(tableStatusSelector)
  console.log("Статус таблицы", fetchStatus)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchTable())
  }, [])

  if (fetchStatus === TableFetchStatusEnum.ERROR) {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        {" "}
        <NoDataPlug />{" "}
      </div>
    )
  }

  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        loading={fetchStatus === TableFetchStatusEnum.LOADING}
      />
    </>
  )
}

export default TableSettings
