import { Button, Input, message, Modal, Spin } from "antd"
import { useState } from "react"

import Styled from "./HeaderTableButton.styles"
import { useAppDispatch, useAppSelector } from "../../../../../app/hooks"

import {
  setTitle,
  setPrice,
  setCategory,
  setDescription,
  setImage,
  fetchAddModalItem,
  setFetchingStatus,
  tableModalStatusSelector,
  modalResponseItemSelector,
  // tableModalStatusSelector,
  // TableModalFetchStatusEnum,
} from "../../../../../app/slices/tableModalSlice"
import { addItem } from "../../../../../app/slices/tableSlice"

export const HeaderTableButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [messageApi, contextHolder] = message.useMessage()
  const dispatch = useAppDispatch()

  // const fetchModalStatus = useAppSelector(tableModalStatusSelector)
  const { title, price, category, description, image } = useAppSelector(
    state => state.tableModal,
  )

  const isFetchingModal = useAppSelector(tableModalStatusSelector)
  const modalResponseItem = useAppSelector(modalResponseItemSelector)

  const showModal = () => {
    setIsModalOpen(true)
  }

  const info = () => {
    messageApi.info("Товар успешно добавлен")
  }

  const handleOk = () => {
    dispatch(setFetchingStatus(true))

    setTimeout(() => {
      dispatch(
        fetchAddModalItem({ title, price, category, description, image }),
      )
      dispatch(addItem(modalResponseItem))

      dispatch(setFetchingStatus(false))

      dispatch(setTitle(""))
      dispatch(setPrice(""))
      dispatch(setCategory(""))
      dispatch(setDescription(""))
      dispatch(setImage(""))
    }, 800)

    setTimeout(() => {
      info()
      setIsModalOpen(false)
    }, 1000)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  return (
    <Styled.HeaderTableButtonWrapper>
      {contextHolder}
      <Button type="primary" onClick={showModal}>
        Adding Item
      </Button>
      <Modal
        title="Заполните данные для добаления товара"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        loading={isFetchingModal ? <Spin /> : null}
      >
        <Input
          style={{ marginBottom: 10 }}
          placeholder="Укажите название предмета"
          value={title}
          onChange={e => dispatch(setTitle(e.target.value))}
        />
        <Input
          style={{ marginBottom: 10 }}
          placeholder="Укажите цену"
          value={price}
          onChange={e => dispatch(setPrice(e.target.value))}
        />
        <Input
          style={{ marginBottom: 10 }}
          placeholder="Укажите категорию"
          value={category}
          onChange={e => dispatch(setCategory(e.target.value))}
        />
        <Input
          style={{ marginBottom: 10 }}
          placeholder="Укажите описание"
          value={description}
          onChange={e => dispatch(setDescription(e.target.value))}
        />
        <Input
          style={{ marginBottom: 10 }}
          placeholder="Укажите ссылку на фото"
          value={image}
          onChange={e => dispatch(setImage(e.target.value))}
        />
      </Modal>
    </Styled.HeaderTableButtonWrapper>
  )
}
export default HeaderTableButton
