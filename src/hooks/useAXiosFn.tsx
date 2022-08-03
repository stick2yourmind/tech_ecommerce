import { useState, useEffect } from 'react'
import {
  ReturnUseAxiosFn, RESPONSEAPI, ReturnErrUseAxiosFn, ReturnLoadUseAxiosFn, CtrlUseAxiosFn,
  AxiosFetchParams
} from './types.hooks'

function useAxiosFunction <T=undefined, K=undefined> ():[RESPONSEAPI<T>, ReturnErrUseAxiosFn,
  ReturnLoadUseAxiosFn, ReturnUseAxiosFn<K>] {
  const [response, setResponse] =
    useState <RESPONSEAPI<T>>({} as RESPONSEAPI<T>)
  const [error, setError] = useState<ReturnErrUseAxiosFn>(false)
  const [loading, setLoading] = useState<ReturnLoadUseAxiosFn>(false)
  const [controller, setController] = useState<CtrlUseAxiosFn>()

  const axiosFetch = async (configObj:AxiosFetchParams<K>) => {
    const {
      axiosInstance,
      method,
      url,
      requestConfig = {}
    } = configObj
    try {
      setLoading(true)
      const ctrl = new AbortController()
      setController(ctrl)
      const res = await axiosInstance(url, {
        ...requestConfig,
        method,
        signal: ctrl.signal,
        timeout: 10000
      })
      setResponse(res.data)
      setError(false)
    } catch (err) {
      setError((err as Error).message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    // useEffect cleanup function
    return () => controller && controller.abort()
  }, [controller])

  return [response, error, loading, axiosFetch]
}

export default useAxiosFunction
