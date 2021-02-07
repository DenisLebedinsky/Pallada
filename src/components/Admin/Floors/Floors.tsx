import { Button } from '@material-ui/core'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import React, { useEffect, useState } from 'react'
import DeleteModal from 'src/components/Modals/DeleteModal/DeleteModal'
import EditModal from 'src/components/Modals/EditModal/EditModal'
import Table from 'src/components/Table/Table'
import { useItemEdit } from 'src/hooks/useItemEdit'
import { useSnackBars } from 'src/hooks/useSnackBars'
import api from 'src/utils/api'
import css from './Floor.module.scss'

export interface FloorItem {
  name: string
  id?: string
}

const Floors = () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  const { addAlert } = useSnackBars()
  const [floorList, setFloorList] = useState([])

  const loadFloor = async () => {
    try {
      const res = await api.get('/category')

      if (res?.data) {
        setFloorList(res.data)
      }
    } catch (e) {
      addAlert(`ошибка загрузки ${e}`)
    }
  }

  const {
    editItem,
    editModal,
    deleteModal,
    onCreate,
    onEdit,
    onDelete,
    onClose,
    deleteItem,
    onSave,
  } = useItemEdit('category', loadFloor)

  //load floor
  useEffect(() => {
    if (!floorList.length) {
      loadFloor()
    }
  }, [])

  return (
    <div className={css.floor}>
      <div className={css.header}>
        <h2>Этажность</h2>

        <Button onClick={onCreate} className={css.create}>
          <AddCircleOutlineIcon className={css.createIcon} /> Создать
        </Button>
      </div>

      <Table data={floorList} onEdit={onEdit} onDelete={onDelete} />

      {editModal && (
        <EditModal open={editModal} handleClose={onClose} onSave={onSave} item={editItem} />
      )}

      {deleteModal && (
        <DeleteModal
          open={deleteModal}
          handleClose={onClose}
          item={editItem}
          onDelete={deleteItem}
        />
      )}
    </div>
  )
}

export default Floors
