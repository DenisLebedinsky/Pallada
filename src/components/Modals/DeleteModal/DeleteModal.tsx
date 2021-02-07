import { Button } from '@material-ui/core'
import Modal from '@material-ui/core/Modal'
import CloseIcon from '@material-ui/icons/Close'
import * as React from 'react'
import { ModalItem } from 'src/components/Modals/EditModal/types'
import css from './DeleteModal.module.scss'

type Props = {
  open: true
  handleClose: () => void
  onDelete: () => void
  item?: ModalItem
}

export default function ({ open, handleClose, onDelete, item }: Props) {
  return (
    <Modal open={open} onClose={handleClose}>
      <div className={css.modal}>
        <div className={css.header}>
          <h3>Вы точно хотите удалить?</h3>
          <CloseIcon className={css.close} onClick={handleClose} />
        </div>

        <div className={css.title}>{item?.name}</div>

        <div className={css.controls}>
          <Button onClick={handleClose}>Отмена</Button>
          <Button className={css.delete} onClick={onDelete}>
            Удалить
          </Button>
        </div>
      </div>
    </Modal>
  )
}
