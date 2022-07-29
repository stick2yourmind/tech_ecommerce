import { useState, useEffect } from 'react'
import {
  ReturnUseAxiosFunction, FailedAPIResponse, SuccessfulAPIResponse,
  RESDataGetAllProducts, ReturnErrUseAxiosFn, ReturnLoadUseAxiosFn, CtrlUseAxiosFn,
  AxiosFetchParams
} from './types.hooks'

type Response = FailedAPIResponse | SuccessfulAPIResponse <RESDataGetAllProducts>
const useAxiosFunction = ():ReturnUseAxiosFunction => {
  const [response, setResponse] =
    useState <Response>({} as FailedAPIResponse)
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
        signal: ctrl.signal
      })
      setResponse(res.data)
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
