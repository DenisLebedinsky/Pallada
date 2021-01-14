import { FormControl, Select } from '@material-ui/core'
import Accordion from '@material-ui/core/Accordion'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import Button from '@material-ui/core/Button'
import InputBase from '@material-ui/core/InputBase'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Slider from '@material-ui/core/Slider'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import SearchIcon from '@material-ui/icons/Search'
import React, { useEffect, useState, ChangeEvent } from 'react'
import api from 'src/utils/api'
import css from './Filter.module.scss'

interface FilterProps {
  location: string
  setLocation: (value: string) => void
  district: string
  setDistrict: (value: string) => void
  realtObject: string
  setRealtObject: (value: string) => void
  floor: string
  setFloor: (value: string) => void
  activeDeal: string
  setActiveDeal: (value: string) => void
  price: number[]
  setPrice: (value: number[]) => void
  search: string
  setSearch: (value: string) => void
  applyFilters: () => void
  clearFilters: () => void
}

const Filter = ({
  location,
  setLocation,
  district,
  setDistrict,
  realtObject,
  setRealtObject,
  floor,
  setFloor,
  activeDeal,
  setActiveDeal,
  price,
  setPrice,
  search,
  setSearch,
  applyFilters,
  clearFilters,
}: FilterProps) => {
  const [locationsList, setLocationsList] = useState([])
  const [districtList, setDistrictList] = useState([])
  const [realtObjectList, setRealtObjectList] = useState([])
  const [floorList, setFloorList] = useState([])

  const loadLocations = async () => {
    try {
      const res = await api.get('/locations')

      if (res?.data) {
        setLocationsList(res.data)
      }
    } catch (e) {
      console.log('error locations', e)
    }
  }

  const loadDistrict = async () => {
    try {
      const res = await api.get('/district')

      if (res?.data) {
        setDistrictList(res.data)
      }
    } catch (e) {
      console.log('error district', e)
    }
  }

  const loadRealtObject = async () => {
    try {
      const res = await api.get('/realtObject')

      if (res?.data) {
        setRealtObjectList(res.data)
      }
    } catch (e) {
      console.log('error realt object', e)
    }
  }

  const loadFloor = async () => {
    try {
      const res = await api.get('/category')

      if (res?.data) {
        setFloorList(res.data)
      }
    } catch (e) {
      console.log('error floor', e)
    }
  }

  const handleChangeLocation = (event: ChangeEvent<{ value: unknown }>) => {
    setLocation(event.target.value as string)
  }

  const handleChangeDistrict = (event: ChangeEvent<{ value: unknown }>) => {
    setDistrict(event.target.value as string)
  }

  const handleChangeRealtObject = (event: ChangeEvent<{ value: unknown }>) => {
    setRealtObject(event.target.value as string)
  }

  const handleChangeFloor = (event: ChangeEvent<{ value: unknown }>) => {
    setFloor(event.target.value as string)
  }

  const handleChangePrice = (event: any, newValue: number | number[]) => {
    setPrice(newValue as number[])
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

  //load realt object
  useEffect(() => {
    if (!districtList.length) {
      loadRealtObject()
    }
  }, [])

  //load floor
  useEffect(() => {
    if (!floorList.length) {
      loadFloor()
    }
  }, [])

  return (
    <div className={css.filter}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography>Фильтр</Typography>
        </AccordionSummary>
        <AccordionDetails className={css.details}>
          <div className={css.search}>
            <div className={css.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder='Поиск…'
              classes={{
                root: css.inputRoot,
                input: css.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              value={search}
              onChange={(event: any) => setSearch(event.target.value)}
            />
          </div>

          <div className={css.content}>
            <FormControl className={css.select}>
              <Typography id='range-slider' gutterBottom className={css.price}>
                Цена
              </Typography>
              <Slider
                value={price}
                onChange={handleChangePrice}
                valueLabelDisplay='auto'
                aria-labelledby='range-slider'
                max={20000000}
                ValueLabelComponent={ValueLabelComponent}
              />
            </FormControl>

            <FormControl className={css.select}>
              <InputLabel id='locations-label'>Населенный пункт</InputLabel>

              <Select
                labelId='locations-label'
                id='locations'
                value={location}
                onChange={handleChangeLocation}
              >
                <MenuItem value={''} key={-1}>
                  Все
                </MenuItem>
                {locationsList.map((loc: any, i) => (
                  <MenuItem value={loc.id} key={i}>
                    {loc.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl className={css.select}>
              <InputLabel id='district-label'>Район</InputLabel>

              <Select
                labelId='district-label'
                id='district'
                value={district}
                onChange={handleChangeDistrict}
              >
                <MenuItem value={''} key={-1}>
                  Все
                </MenuItem>
                {districtList.map((loc: any, i) => (
                  <MenuItem value={loc.id} key={i}>
                    {loc.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl className={css.select}>
              <InputLabel id='realt-object-label'>Объект недвижимости</InputLabel>

              <Select
                labelId='realt-object-label'
                id='realt-object'
                value={realtObject}
                onChange={handleChangeRealtObject}
              >
                <MenuItem value={''} key={-1}>
                  Все
                </MenuItem>
                {realtObjectList.map((loc: any, i) => (
                  <MenuItem value={loc.id} key={i}>
                    {loc.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl className={css.select}>
              <InputLabel id='realt-object-label'>Этаж</InputLabel>

              <Select
                labelId='floor-label'
                id='floor-object'
                value={floor}
                onChange={handleChangeFloor}
              >
                <MenuItem value={''} key={-1}>
                  Все
                </MenuItem>
                {floorList.map((loc: any, i) => (
                  <MenuItem value={loc.id} key={i}>
                    {loc.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl className={css.select}>
              <InputLabel id='deal-label'>Тип сделки</InputLabel>

              <Select
                labelId='deal-label'
                id='deal'
                value={activeDeal}
                onChange={(event: ChangeEvent<{ value: unknown }>) =>
                  setActiveDeal(event.target.value as string)
                }
              >
                <MenuItem value={'true'}>Продажа</MenuItem>
                <MenuItem value={'false'}>Аренда</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className={css.control}>
            <Button variant='outlined' onClick={clearFilters}>
              Очистить
            </Button>
            <Button variant='contained' className={css.button} onClick={applyFilters}>
              Применить
            </Button>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

function ValueLabelComponent(props) {
  const { children, open, value } = props

  let _value = value

  if (value > 999) {
    _value = `${(value / 1000).toFixed(0)} тыс`
  }

  if (value > 999999) {
    _value = `${(value / 1000000).toFixed(1)} млн`
  }

  return (
    <Tooltip open={open} enterTouchDelay={0} placement='top' title={_value}>
      {children}
    </Tooltip>
  )
}

export default Filter
