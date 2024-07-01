import { Popconfirm, Space, Table } from "antd"
import type { TableProps } from "antd"
import { useEffect, useRef } from "react"
import { DeleteOutlined, EditOutlined } from "@ant-design/icons"

import {
  TableFetchStatusEnum,
  fetchTable,
  tableItemsSelector,
  tableStatusSelector,
  removeItem,
  tablePaginationSizeSelector,
} from "../../../app/slices/tableSlice"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import type { ITableSliceItems } from "../../../app/slices/tableSlice"

import NoDataPlug from "../../shared/components/NoDataPlug/NoDataPlug"
import HeaderTable from "../Table/HeaderTable/HeaderTable"
import { searchValueSelector } from "../../../app/slices/filterSlice"

const TableSettings: React.FC<ITableSliceItems> = () => {
  const data = useAppSelector(tableItemsSelector)
  const fetchStatus = useAppSelector(tableStatusSelector)
  const tablePaginationSize = useAppSelector(tablePaginationSizeSelector)
  const searchValue = useAppSelector(searchValueSelector)
  const isSearch = useRef(false)

  const dispatch = useAppDispatch()

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
    {
      title: "Action",
      key: "action",
      width: 130,
      render: (_, record) => (
        <Space size="middle">
          <Popconfirm title="Sure to edit?">
            <EditOutlined />
          </Popconfirm>
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => onClickRemove(record.id)}
          >
            <DeleteOutlined />
          </Popconfirm>
        </Space>
      ),
    },
  ]

  const onClickRemove = (id: number) => {
    dispatch(removeItem(id))
  }

  const fetchTableItems = async () => {
    const search = searchValue ? `title=${searchValue}` : " ";
    dispatch(fetchTable({ search }))
  }

  useEffect(() => {
    if (!isSearch.current) {
      fetchTableItems()
    }
    isSearch.current = false
  }, [searchValue])

  if (fetchStatus === TableFetchStatusEnum.ERROR) {
    return <NoDataPlug />
  }

  return (
    <>
      <HeaderTable />
      <Table
        columns={columns}
        dataSource={data}
        loading={fetchStatus === TableFetchStatusEnum.LOADING}
        pagination={tablePaginationSize}
      />
    </>
  )
}

export default TableSettings
