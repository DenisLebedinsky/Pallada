import { Button } from '@material-ui/core'
import Modal from '@material-ui/core/Modal'
import TextField from '@material-ui/core/TextField'
import CloseIcon from '@material-ui/icons/Close'
import * as React from 'react'
import { useEffect, useState } from 'react'
import { ModalItem } from 'src/components/Modals/EditModal/types'
import css from './EditModal.module.scss'

type Props = {
  open: true
  handleClose: () => void
  onSave: (value: ModalItem) => void
  item?: ModalItem
}

export default function ({ open, handleClose, onSave, item }: Props) {
  const [name, setName] = useState('')

  useEffect(() => {
    if (item) {
      setName(item.name || '')
    }
  }, [])

  const onSubmit = (event) => {
    event.preventDefault()

    if (item) {
      onSave({ id: item.id, name })
    } else {
      onSave({ name })
    }
  }

  // const onDelete = () => {}

  return (
    <Modal open={open} onClose={handleClose}>
      <div className={css.modal}>
        <div className={css.header}>
          <h3>{item ? `Редактирование: ${item.name}` : 'Создание'}</h3>
          <CloseIcon className={css.close} onClick={handleClose} />
        </div>

        <form className={css.editor} onSubmit={onSubmit}>
          <TextField
            label='Название'
            autoFocus
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <div className={css.controls}>
            {/*{item && (*/}
            {/*  <Button className={css.delete} type='button' onClick={onDelete}>*/}
            {/*    Удалить*/}
            {/*  </Button>*/}
            {/*)}*/}
            <Button className={css.button} type='submit'>
              {item ? 'Сохранить' : 'Создать'}
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  )
}
