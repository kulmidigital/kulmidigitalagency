'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode, useState } from 'react';
import { ToastProvider } from "@/components/ui/toast"

export default function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5, // Data is fresh for 5 minutes
        gcTime: 1000 * 60 * 30,   // Cache is kept for 30 minutes
        refetchOnWindowFocus: false, // Disable refetching on window focus
      },
    },
  }));

  return (
    <ToastProvider>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </ToastProvider>
  );
} 