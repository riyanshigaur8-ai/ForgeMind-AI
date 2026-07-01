import { useCallback, useEffect, useRef, useState } from 'react'

export function useAsync(asyncFn, immediate = true) {
  const [state, setState] = useState({
    data: null,
    error: null,
    isLoading: immediate,
  })

  const asyncFnRef = useRef(asyncFn)
  asyncFnRef.current = asyncFn

  const execute = useCallback(async (...args) => {
    setState((current) => ({ ...current, isLoading: true, error: null }))

    try {
      const data = await asyncFnRef.current(...args)
      setState({ data, error: null, isLoading: false })
      return data
    } catch (error) {
      setState({ data: null, error, isLoading: false })
      throw error
    }
  }, [])

  useEffect(() => {
    if (immediate) {
      execute()
    }
  }, [execute, immediate])

  return { ...state, execute }
}
