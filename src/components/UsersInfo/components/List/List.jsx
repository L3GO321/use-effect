import { useState, useEffect } from 'react'

import { getList } from '../../../../utils/api/api'

export const List = ({ activeId, setActiveId }) => {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const get = async () => {
      setLoading(true)

      const data = await getList()

      if (data) {
        setList(data)
      }

      setLoading(false)
    }

    get()
  }, [])
  return (
    <div className='wrapper'>
      {loading ?
        <div className={'loader'}>Loading...</div> :
        list.map(item => (
          <div
            key={item.id}
            className={`item ${activeId === item.id ? 'listItemActive' : ''}`}
            onClick={() => setActiveId(item.id)}
          >
            {item.name}
          </div>
        ))}
    </div>
  )
}