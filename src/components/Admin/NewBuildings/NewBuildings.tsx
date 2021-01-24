import React, { useEffect, useState } from 'react'
import Buildings from 'src/components/Buildings'
import { Building } from 'src/components/Buildings/types'
import api from 'src/utils/api'
import css from './NewBuildings.module.scss'

const NewBuildings = () => {
  const [buildings, setBuildings] = useState<Building[]>([])
  const [wasRequest, setWasRequest] = useState(false)

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [offset, setOffset] = useState(0)
  const [hasMore, setHasMore] = useState(true)

  const loadBuildings = async () => {
    setLoading(true)
    try {
      const result = await api.post('/house/more', {
        offset,
        status: false,
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
    <div className={css.newBuildings}>
      <h2>Новые объявления</h2>
      <Buildings
        buildings={buildings}
        hasMore={hasMore}
        loadMore={loadMore}
        loading={loading}
        adminMode={true}
      />
    </div>
  )
}

export default NewBuildings
