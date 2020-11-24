import { useCallback, useState } from 'react'
import { get_api } from '../services/api'

const useApi = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(null)

  const request = useCallback(async (url) => {
    try {
      setError(null)
      setLoading(true)
      const response = await get_api.get(url)
      setData(response.data)
      setLoading(false)
    } catch (err) {
      setError(err.message)
      setLoading(false)
    }
  }, [])
  return {
    data,
    error,
    loading,
    request
  }
}

export default useApi