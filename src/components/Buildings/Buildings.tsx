import { LinearProgress } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import { Buildins } from 'src/components/Buildings/types'
import MediaCard from 'src/components/MediaCard/MediaCard'
import api from 'src/utils/api'
import css from './Buildings.module.scss'

const Buildings = () => {
  const [buildings, setBuildings] = useState<Buildins[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [offset, setOffset] = useState(0)
  const [hasMore, setHasMore] = useState(true)

  const loadBuildings = async () => {
    setLoading(true)
    try {
      const result = await api.post('/house/more', { offset })

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
    if (!loading && !error && !buildings.length) {
      // load data
      loadBuildings()
    }
  }, [buildings, loading, error])

  if (loading && !buildings.length) {
    return (
      <div className={css.buildings}>
        <LinearProgress color='secondary' />
      </div>
    )
  }

  return (
    <div className={css.buildings}>
      {!!buildings.length && (
        <InfiniteScroll className={css.grid} pageStart={0} loadMore={loadMore} hasMore={hasMore}>
          {buildings.map((building: Buildins, index) => (
            <MediaCard key={index} building={building} />
          ))}
        </InfiniteScroll>
      )}
    </div>
  )
}

export default Buildings
