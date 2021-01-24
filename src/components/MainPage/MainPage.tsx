import React, { useEffect, useState } from 'react'
import Bar from 'src/components/Bar'
import Buildings from 'src/components/Buildings'
import { Building } from 'src/components/Buildings/types'
import Filter from 'src/components/Filter/Filter'
import { FiltersFields } from 'src/components/MainPage/types'
import api from 'src/utils/api'
import css from './MainPage.module.scss'

const MainPage = () => {
  const initialFilters: FiltersFields = {
    search: '',
    location: '',
    district: '',
    realtObject: '',
    floor: '',
    activeDeal: 'true',
    price: {
      min: 0,
      max: 20000000,
    },
  }

  const initialPrice = [0, 20000000]

  const [search, setSearch] = useState('')
  const [location, setLocation] = useState('')
  const [district, setDistrict] = useState('')
  const [realtObject, setRealtObject] = useState('')
  const [floor, setFloor] = useState('')
  const [activeDeal, setActiveDeal] = useState('true')
  const [filters, setFilters] = useState(initialFilters)
  const [price, setPrice] = useState<number[]>(initialPrice)

  const [buildings, setBuildings] = useState<Building[]>([])
  const [wasRequest, setWasRequest] = useState(false)

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [offset, setOffset] = useState(0)
  const [hasMore, setHasMore] = useState(true)

  const applyFilters = () => {
    setOffset(0)
    setWasRequest(false)
    setBuildings([])
    setHasMore(true)
    setFilters({
      search,
      location,
      district,
      realtObject,
      floor,
      activeDeal,
      price: {
        min: price[0],
        max: price[1],
      },
    })
  }

  const clearFilters = () => {
    setBuildings([])
    setHasMore(true)
    setWasRequest(false)
    setOffset(0)
    setFilters(initialFilters)
    setSearch('')
    setLocation('')
    setDistrict('')
    setRealtObject('')
    setFloor('')
    setActiveDeal('true')
    setPrice(initialPrice)
  }

  const loadBuildings = async () => {
    setLoading(true)
    try {
      const result = await api.post('/house/more', {
        offset,
        status: true,
        search: filters.search,
        categoryId: filters.floor,
        locationId: filters.location,
        districtId: filters.district,
        realtObjectId: filters.realtObject,
        deal: filters.activeDeal, //=== 'true',
        priceRange: filters.price,
      })

      if (result?.data?.house) {
        //concat with current data
        if (result?.data?.house.length) {
          const newBuildings = buildings.concat(result.data.house)
          setBuildings(newBuildings)
          setOffset(offset + 20)
        } else {
          setHasMore(false)
        }
      }

      setLoading(false)
    } catch (e) {
      setError(true)
      setLoading(false)
    }
  }

  const loadMore = () => {
    loadBuildings()
  }

  useEffect(() => {
    if (!loading && !error && !buildings.length && !wasRequest) {
      // load data
      loadBuildings()
      setWasRequest(true)
    }
  }, [buildings, loading, error, wasRequest])

  return (
    <div className={css.mainPage}>
      <Bar main={true} />
      <div className={css.labelBlock}>
        <div className={css.imageBlock}>
          <img src={require('public/pallada.png')} alt='pallada' className={css.label} />
          <h1 className={css.title}>Паллада</h1>
          <h2 className={css.desc}>АГЕНСТВО НЕДВИЖИМОСТИ</h2>
        </div>
      </div>
      <img src={require('public/images/background.jpeg')} alt='Ейск' className={css.image} />
      <Filter
        location={location}
        setLocation={setLocation}
        district={district}
        setDistrict={setDistrict}
        realtObject={realtObject}
        setRealtObject={setRealtObject}
        floor={floor}
        setFloor={setFloor}
        activeDeal={activeDeal}
        setActiveDeal={setActiveDeal}
        price={price}
        setPrice={setPrice}
        search={search}
        setSearch={setSearch}
        applyFilters={applyFilters}
        clearFilters={clearFilters}
      />

      <Buildings buildings={buildings} hasMore={hasMore} loadMore={loadMore} loading={loading} />
    </div>
  )
}

export default MainPage
