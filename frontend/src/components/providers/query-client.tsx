// app/providers.tsx
'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState, ReactNode } from 'react'
import { jsx as _jsx } from 'react/jsx-runtime'

export default function ReactQueryProvider({ children }: { children: ReactNode }) {
  // Tạo client một lần khi component mount
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}