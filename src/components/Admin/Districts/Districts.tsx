import { Button } from '@material-ui/core'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import React, { useEffect, useState } from 'react'
import DeleteModal from 'src/components/Modals/DeleteModal/DeleteModal'
import EditModal from 'src/components/Modals/EditModal/EditModal'
import Table from 'src/components/Table/Table'
import { useItemEdit } from 'src/hooks/useItemEdit'
import { useSnackBars } from 'src/hooks/useSnackBars'
import api from 'src/utils/api'
import css from './Districts.module.scss'

export interface DistrictItems {
  name: string
  id?: string
}

const Districts = () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  const { addAlert } = useSnackBars()
  const [districtList, setDistrictList] = useState([])

  const loadDistrict = async () => {
    try {
      const res = await api.get('/district')

      if (res?.data) {
        setDistrictList(res.data)
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
  } = useItemEdit('district', loadDistrict)

  //load district
  useEffect(() => {
    if (!districtList.length) {
      loadDistrict()
    }
  }, [])

  return (
    <div className={css.districts}>
      <div className={css.header}>
        <h2>Районы</h2>

        <Button onClick={onCreate} className={css.create}>
          <AddCircleOutlineIcon className={css.createIcon} /> Создать
        </Button>
      </div>

      <Table data={districtList} onEdit={onEdit} onDelete={onDelete} />

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

export default Districts
