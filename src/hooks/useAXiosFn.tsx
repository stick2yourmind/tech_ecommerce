import { useState, useEffect } from 'react'
import {
  ReturnUseAxiosFn, RESPONSEAPI, ReturnErrUseAxiosFn, ReturnLoadUseAxiosFn, CtrlUseAxiosFn,
  AxiosFetchParams
} from './types.hooks'

function useAxiosFunction <T=undefined> ():[RESPONSEAPI<T>, ReturnErrUseAxiosFn,
  ReturnLoadUseAxiosFn, ReturnUseAxiosFn] {
  const [response, setResponse] =
    useState <RESPONSEAPI<T>>({} as RESPONSEAPI<T>)
  const [error, setError] = useState<ReturnErrUseAxiosFn>(false)
  const [loading, setLoading] = useState<ReturnLoadUseAxiosFn>(false)
  const [controller, setController] = useState<CtrlUseAxiosFn>()

  const axiosFetch = async (configObj:AxiosFetchParams) => {
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
      const res = await axiosInstance[method](url, {
        ...requestConfig,
        signal: ctrl.signal,
        timeout: 5000
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
