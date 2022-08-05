import { useState, useEffect } from 'react'
import {
  ReturnUseAxiosFn, RESPONSEAPI, ReturnErrUseAxiosFn, ReturnLoadUseAxiosFn, CtrlUseAxiosFn,
  AxiosFetchParams
} from './types.hooks'
import { useSelector } from 'react-redux'
import { RootState } from '../app/store'
import { AxiosInstance } from 'axios'

function useAxiosFunction <T=undefined, K=undefined> ():[RESPONSEAPI<T>, ReturnErrUseAxiosFn,
  ReturnLoadUseAxiosFn, ReturnUseAxiosFn<K>] {
  const [response, setResponse] =
    useState <RESPONSEAPI<T>>({} as RESPONSEAPI<T>)
  const [error, setError] = useState<ReturnErrUseAxiosFn>(false)
  const [loading, setLoading] = useState<ReturnLoadUseAxiosFn>(false)
  const [controller, setController] = useState<CtrlUseAxiosFn>()
  const accessToken = useSelector((state:RootState) => state.user.data?.accessToken)
  let axiosReference: AxiosInstance
  let requestInterceptor: number
  const axiosFetch = async (configObj:AxiosFetchParams<K>) => {
    const {
      axiosInstance,
      method,
      url,
      requestConfig = {}
    } = configObj
    axiosReference = axiosInstance
    requestInterceptor = axiosReference.interceptors.request.use(cfg => {
      cfg.headers = { ...cfg.headers, authorization: `Bearer ${accessToken}` }
      console.log('🚀 ~ file: useAXiosFn.tsx ~ line 30 ~ axiosFetch ~ accessToken', accessToken)
      return cfg
    }, err => Promise.reject(err))
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
      console.log('🚀 ~ file: useAXiosFn.tsx ~ line 32 ~ axiosFetch ~ res', res.headers)
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
    return () => {
      controller && controller.abort()
      if (axiosReference)
        axiosReference.interceptors.request.eject(requestInterceptor)
    }
  }, [controller])

  return [response, error, loading, axiosFetch]
}

export default useAxiosFunction
