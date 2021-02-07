import { useState } from 'react'
import { LocationItem } from 'src/components/Admin/Locations/Locations'
import { useSnackBars } from 'src/hooks/useSnackBars'
import api from 'src/utils/api'

type LoadData = () => void

export function useItemEdit(itemType: string, loadData: LoadData) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  const { addAlert } = useSnackBars()
  const [editItem, setEditItem] = useState<undefined | LocationItem>(undefined)
  const [editModal, setEditModal] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false)

  const onCreate = () => {
    setEditModal(true)
  }

  const onEdit = (item) => {
    setEditItem(item)
    setEditModal(true)
  }

  const onDelete = (item) => {
    setEditModal(true)
    setDeleteModal(true)
    setEditItem(item)
  }

  const onClose = () => {
    setEditItem(undefined)
    setDeleteModal(false)
    setEditModal(false)
  }

  const deleteItem = async () => {
    if (editItem) {
      try {
        await api.delete(`/${itemType}/${editItem.id}`)

        onClose()
        addAlert('запись удалена')
        loadData()
      } catch (e) {
        addAlert('Не удалось сохранить изменения')
      }
    } else {
      addAlert('Не удалось сохранить изменения')
    }
  }

  const onSave = async (newItem) => {
    if (editItem) {
      //update
      try {
        const res = await api.patch(`/${itemType}`, newItem)

        if (res) {
          addAlert('Данные изменены')
          onClose()
          loadData()
        }
      } catch (e) {
        addAlert('Не удалось сохранить изменения')
      }
    } else {
      //create
      try {
        const res = await api.post(`/${itemType}`, newItem)

        if (res) {
          addAlert('Данные изменены')
          onClose()
          loadData()
        }
      } catch (e) {
        addAlert('Не удалось создать такую запись')
      }
    }
  }

  return {
    editItem,
    editModal,
    deleteModal,
    onCreate,
    onEdit,
    onDelete,
    onClose,
    deleteItem,
    onSave,
  }
}
