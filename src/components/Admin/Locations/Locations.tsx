import { Button } from '@material-ui/core'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import React, { useEffect, useState } from 'react'
import DeleteModal from 'src/components/Modals/DeleteModal'
import EditModal from 'src/components/Modals/EditModal'
import { useItemEdit } from 'src/hooks/useItemEdit'
import { useSnackBars } from 'src/hooks/useSnackBars'
import api from 'src/utils/api'
import Table from '../../Table'
import css from './Locations.module.scss'

export interface LocationItem {
  name: string
  id?: string
}

const Locations = () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  const { addAlert } = useSnackBars()
  const [locationsList, setLocationsList] = useState([])

  const loadLocations = async () => {
    try {
      const res = await api.get('/locations')

      if (res?.data) {
        setLocationsList(res.data)
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
  } = useItemEdit('locations', loadLocations)

  //load locations
  useEffect(() => {
    if (!locationsList.length) {
      loadLocations()
    }
  }, [])

  return (
    <div className={css.locations}>
      <div className={css.header}>
        <h2>Населенные пункты</h2>

        <Button onClick={onCreate} className={css.create}>
          <AddCircleOutlineIcon className={css.createIcon} /> Создать
        </Button>
      </div>

      <Table data={locationsList} onEdit={onEdit} onDelete={onDelete} />

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

export default Locations
