import { Button, Input, Modal } from "antd"
import { useState } from "react"

import Styled from "./HeaderTableButton.styles"
import { useAppDispatch, useAppSelector } from "../../../../../app/hooks"

import {
  setTitle,
  setPrice,
  setCategory,
  setDescription,
  setImage,
} from "../../../../../app/slices/tableModalSlice"

export const HeaderTableButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const dispatch = useAppDispatch()
  const { title, price, category, description, image } = useAppSelector(
    state => state.tableModal,
  )

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  return (
    <Styled.HeaderTableButtonWrapper>
      <Button type="primary" onClick={showModal}>
        Adding Item
      </Button>
      <Modal
        title="Заполните данные для добаления товара"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
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
