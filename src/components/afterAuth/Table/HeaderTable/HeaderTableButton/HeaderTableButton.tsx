import { Button, Input, Modal } from "antd"
import { useState } from "react"

import Styled from "./HeaderTableButton.styles"

export const HeaderTableButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
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
        />
        <Input style={{ marginBottom: 10 }} placeholder="Укажите цену" />
        <Input style={{ marginBottom: 10 }} placeholder="Укажите категорию" />
        <Input style={{ marginBottom: 10 }} placeholder="Кажите описание" />
        <Input
          style={{ marginBottom: 10 }}
          placeholder="Укажите ссылку на фото"
        />
      </Modal>
    </Styled.HeaderTableButtonWrapper>
  )
}
export default HeaderTableButton
