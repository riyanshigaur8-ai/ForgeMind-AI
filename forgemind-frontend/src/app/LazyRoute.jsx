import { lazy, Suspense } from 'react'

export function lazyRoute(importFn) {
  const Page = lazy(importFn)

  return (
    <Suspense fallback={null}>
      <Page />
    </Suspense>
  )
}
