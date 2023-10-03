import {NextUIProvider} from '@nextui-org/react'

export function NextUIProviders({children}) {
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  )
}