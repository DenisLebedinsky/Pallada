import { Button } from '@material-ui/core'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import React, { useEffect, useState } from 'react'
import { useSnackBars } from 'src/hooks/useSnackBars'
import api from 'src/utils/api'
import Table from '../../Table'
import css from './Locations.module.scss'

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

  const edit = () => {
    console.log('edit')
  }

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

        <Button
          // onClick={() => push('/admin/addBuilding')
          className={css.create}
        >
          <AddCircleOutlineIcon className={css.createIcon} /> Создать
        </Button>
      </div>

      <Table data={locationsList} edit={edit} />
    </div>
  )
}

export default Locations
