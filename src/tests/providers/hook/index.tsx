import type { ReactNode } from 'react'

import { type RenderHookResult, renderHook } from '@testing-library/react'

import { MainProvider } from 'presentation/components/providers/MainProvider'

import type { RenderHooksProviderProps, WrapperProps } from './types'

const wrapper = ({ children }: WrapperProps): ReactNode => (
  <MainProvider>{children}</MainProvider>
)

export const renderHooksProvider = (
  children: RenderHooksProviderProps
): RenderHookResult<any, any> => {
  return renderHook(children, { wrapper })
}
