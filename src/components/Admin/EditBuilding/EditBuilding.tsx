import { Box } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import MenuItem from '@material-ui/core/MenuItem'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import MediaEditor from 'src/components/Admin/MediaEditor'
import { Building } from 'src/components/Buildings/types'
import DeleteModal from 'src/components/Modals/DeleteModal/DeleteModal'
import { useSnackBars } from 'src/hooks/useSnackBars'
import FormInput from 'src/ui/FormInput'
import ReactHookFormSelect from 'src/ui/ReactHookFormSelect'
import api from 'src/utils/api'
import { emailValidationRegExp, phoneValidationRegExp } from 'src/utils/validations'
import css from './EditBuilding.module.scss'

const EditBuilding = () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  const { addAlert } = useSnackBars()
  const [building, setBuilding] = useState<Building | null>(null)
  const [deleteModal, setDeleteModal] = useState(false)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { query, replace } = useRouter()
  const id = query.id
  const { push, back } = useRouter()

  const [locationsList, setLocationsList] = useState([])
  const [districtList, setDistrictList] = useState([])
  const [realtObjectList, setRealtObjectList] = useState([])
  const [floorList, setFloorList] = useState([])
  const [images, setImages] = useState<string[]>([])

  const { register, handleSubmit, control, setValue } = useForm({
    mode: 'onChange',
  })

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

  const loadRealtObject = async () => {
    try {
      const res = await api.get('/realtObject')

      if (res?.data) {
        setRealtObjectList(res.data)
      }
    } catch (e) {
      addAlert(`ошибка загрузки ${e}`)
    }
  }

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

  const loadData = async () => {
    if (!id) return
    try {
      const res = await api.get(`/house/${id}`)

      if (res.data) {
        const _building = res.data.house
        setBuilding(res.data.house)

        setValue('name', _building.name || '')
        setValue('description', _building.description || '')
        setValue('area', _building.area || '')
        setValue('price', _building.price || 0)
        setValue('email', _building.email || '')
        setValue('phone', _building.tel || '')
        setValue('location', _building?.locationId?.id || '')
        setValue('district', _building?.districtId?.id || '')
        setValue('realtObject', _building?.realtObjectId?.id || '')
        setValue('floor', _building?.categoryId.id || '')
        setValue('deal', _building?.sale === 'true' || 'true')
        setValue('priority', _building.priority === 'true' || 'false')
        if (_building.images) {
          setImages(_building.images)
        }
      }
    } catch (e) {
      addAlert(`не удалось получить информацию  ${e}`)
    }
  }

  const phoneRef = register({
    validate: (value) => {
      if (phoneValidationRegExp.test(value)) return true

      return 'Не валидное поле'
    },
    reValidateMode: 'onChange',
  })

  const emailRef = register({
    validate: (value) => {
      if (emailValidationRegExp.test(value)) return true

      return 'Не валидное поле'
    },
    reValidateMode: 'onChange',
  })

  const onSubmit = (data) => {
    const mapData = {
      images,
      area: data.area,
      categoryId: data.floor,
      description: data.description,
      districtId: data.district,
      email: data.email,
      floor: data.floor,
      id: building?.id || '',
      locationId: data.location,
      name: data.name,
      price: data.price,
      priority: data.priority,
      realtObjectId: data.realtObject,
      sale: data.deal == 'true',
      status: building?.status,
      tel: data.phone,
    }

    if (building?.id) {
      editBuildingRequest(mapData)
    } else {
      addNewBuilding(mapData)
    }
  }

  const handleDellete = () => {
    setDeleteModal(true)
  }

  const closeDelete = () => {
    setDeleteModal(false)
  }

  const onDelete = async () => {
    try {
      const res = api.delete(`/house/${building?.id}`)

      if (res) {
        addAlert(`объявление удалено`)
        replace('/admin')
      }
    } catch (e) {
      addAlert(`не удалось удалить`)
    }
  }

  const editBuildingRequest = async (mapData) => {
    try {
      const result = await api.patch('/house/update', mapData)

      if (result?.status == 200) {
        addAlert(`изменения сохранены`)
        push('/admin')
      }
    } catch (e) {
      addAlert(`не удалось сохранить изменения`)
    }
  }

  const addNewBuilding = async (mapData) => {
    try {
      await api.post('/house', { ...mapData, status: false })

      addAlert(`новые данные добавлены`)
      push('/admin')
    } catch (e) {
      addAlert(`не удалось добавить данные`)
    }
  }

  const addImage = (src: string) => {
    setImages([...images, src])
  }

  const deleteImage = (deleteImages: string[]) => {
    const newImages = images.slice().filter((img) => !deleteImages.includes(img))
    setImages(newImages)
  }

  //load locations
  useEffect(() => {
    if (!locationsList.length) {
      loadLocations()
    }
  }, [])

  //load district
  useEffect(() => {
    if (!districtList.length) {
      loadDistrict()
    }
  }, [])

  //load object
  useEffect(() => {
    if (!realtObjectList.length) {
      loadRealtObject()
    }
  }, [])

  //load floor
  useEffect(() => {
    if (!floorList.length) {
      loadFloor()
    }
  }, [])

  //load building data
  useEffect(() => {
    if (!building) {
      loadData()
    }
  }, [])

  // check auth
  useEffect(() => {
    if (!localStorage.getItem('ids')) {
      replace('/')
    }
  }, [])

  return (
    <div className={css.editBuilding}>
      <div className={css.header}>
        <Button className={css.back} onClick={back}>
          <KeyboardBackspaceIcon /> Назад
        </Button>
        <h1 className={css.title}>
          {id ? 'Редактирование:' : 'Создание объявления'} {building?.name}
        </h1>
      </div>

      <MediaEditor images={images} addImage={addImage} deleteImages={deleteImage} />

      <form className={css.editor} onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          ref={register}
          name='name'
          label='Название'
          variant='filled'
          className={css.input}
          control={control}
        />

        <FormInput
          ref={register}
          name='description'
          label='Описание'
          variant='filled'
          className={css.input}
          control={control}
          multiline
          rows={6}
        />

        <FormInput
          ref={register}
          name='price'
          label='Цена (руб)'
          variant='filled'
          className={css.input}
          control={control}
          type='number'
        />

        <FormInput
          ref={register}
          name='area'
          label='Площадь'
          variant='filled'
          className={css.input}
          control={control}
          type='number'
        />

        <FormInput
          ref={emailRef}
          name='email'
          label='Email'
          variant='filled'
          className={css.input}
          control={control}
        />

        <FormInput
          ref={phoneRef}
          name='phone'
          label='Телефон'
          variant='filled'
          className={css.input}
          control={control}
        />

        <ReactHookFormSelect
          id='location'
          name='location'
          label='Населенный пункт'
          control={control}
          defaultValue={''}
          className={css.select}
          variant='filled'
        >
          {locationsList.map((loc: any, i) => (
            <MenuItem value={loc.id} key={i}>
              {loc.name}
            </MenuItem>
          ))}
        </ReactHookFormSelect>

        <ReactHookFormSelect
          id='district'
          name='district'
          label='Район'
          control={control}
          defaultValue={''}
          className={css.select}
          variant='filled'
        >
          {districtList.map((loc: any, i) => (
            <MenuItem value={loc.id} key={i}>
              {loc.name}
            </MenuItem>
          ))}
        </ReactHookFormSelect>

        <ReactHookFormSelect
          id='realtObject'
          name='realtObject'
          label='Объект недвижимости'
          control={control}
          defaultValue={''}
          className={css.select}
          variant='filled'
        >
          {realtObjectList.map((loc: any, i) => (
            <MenuItem value={loc.id} key={i}>
              {loc.name}
            </MenuItem>
          ))}
        </ReactHookFormSelect>

        <ReactHookFormSelect
          id='floor'
          name='floor'
          label='Этаж'
          control={control}
          defaultValue={''}
          className={css.select}
          variant='filled'
        >
          {floorList.map((loc: any, i) => (
            <MenuItem value={loc.id} key={i}>
              {loc.name}
            </MenuItem>
          ))}
        </ReactHookFormSelect>

        <ReactHookFormSelect
          id='deal'
          name='deal'
          label='Тип сделки'
          control={control}
          defaultValue={''}
          className={css.select}
          variant='filled'
        >
          <MenuItem value={'true'}>Продажа</MenuItem>
          <MenuItem value={'false'}>Аренда</MenuItem>
        </ReactHookFormSelect>

        <ReactHookFormSelect
          id='priority'
          name='priority'
          label='Приоритет'
          control={control}
          defaultValue={''}
          className={css.select}
          variant='filled'
        >
          <MenuItem value={'true'}>Высокий</MenuItem>
          <MenuItem value={'false'}>Обычный</MenuItem>
        </ReactHookFormSelect>

        <Box display='flex'>
          {building?.id && (
            <Button type='button' className={css.delete} onClick={handleDellete}>
              Удалить
            </Button>
          )}
          <Button type='submit' className={css.save}>
            Сохранить
          </Button>
        </Box>
      </form>

      {deleteModal && (
        <DeleteModal
          open={deleteModal}
          handleClose={closeDelete}
          item={building}
          onDelete={onDelete}
        />
      )}
    </div>
  )
}

export default EditBuilding
