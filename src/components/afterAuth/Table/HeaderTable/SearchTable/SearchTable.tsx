import { useCallback, useRef, useState } from "react"
import type { ChangeEvent } from "react"
import { useAppDispatch } from "../../../../../app/hooks"
import Styled from "./SearchTable.styles"
import { Input } from "antd"
import debounce from "lodash.debounce"
import { CloseOutlined } from "@ant-design/icons"

import { setSearchValue } from "../../../../../app/slices/filterSlice"

export const SearchTable = () => {
  const dispatch = useAppDispatch()
  const [value, setValue] = useState<string>("")
  const inputRef = useRef<HTMLInputElement>(null)

  const onClickClear = (event: React.MouseEvent<SVGAElement>) => {
    dispatch(setSearchValue(""))
    setValue("")
    inputRef.current.focus()
    console.log(event)
  }

  const updateSearchValue = useCallback(
    debounce(str => {
      dispatch(setSearchValue(str))
      console.log(str)
    }, 1000),
    [],
  )

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
    updateSearchValue(event.target.value)
  }

  return (
    <Styled.InputFormWrapper>
      <Input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        placeholder="Поиск товара..."
      />
      {value && (
        <CloseOutlined
          style={{ position: "absolute", marginTop: 9, right: 10 }}
          onClick={onClickClear}
        />
      )}
    </Styled.InputFormWrapper>
  )
}
export default SearchTable
