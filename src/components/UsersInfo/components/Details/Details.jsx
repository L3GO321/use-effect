import { useEffect, useState } from 'react'
import { getDetails } from '../../../../utils/api/api'

export const Details = ({ activeId }) => {
  const [details, setDetails] = useState(null)
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    if (activeId) {
      const get = async () => {
        setLoading(true)

        const data = await getDetails(activeId)

        console.log(data)

        if (data) {
          setDetails(data)
        }

        setLoading(false)
      }

      get()
    }
  }, [activeId])

  return (
    <div>
      {loading ?
        <div>Loading...</div> :
        <div className='wrapper'>
          {activeId && details ?
            <>
              <img src={details.avatar} />
              <div className='item header'>{details.name}</div>
              <div className='item'>City: {details.details.city}</div>
              <div className='item'>Company: {details.details.company}</div>
              <div className='item'>Position: {details.details.position}</div>
            </> : null
          }
        </div>
      }
    </div>
  )
}