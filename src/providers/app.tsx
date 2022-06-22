import ErrorFallback from "@/components/Templates/ErrorFallback";
import HelmetItem from "@/components/Templates/HelmetItem";
import ReactSuspense from "@/components/Templates/ReactSuspense";
import * as React from "react";
import { ErrorBoundary } from "react-error-boundary"; // 内部エラーハンドリング:yarn add react-error-boundary
import { HelmetProvider } from "react-helmet-async"; // meta情報の埋め込み: yarn add react-helmet-async
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
// import { ReactQueryDevtools } from "react-query/devtools";
// import { BrowserRouter as Router } from "react-router-dom";

type AppProviderProps = {
  children: React.ReactNode;
};
export const queryClient = new QueryClient();

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <React.Suspense fallback={<ReactSuspense />}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <HelmetProvider>
          <HelmetItem />
          <QueryClientProvider client={queryClient}>
            <RecoilRoot>{children}</RecoilRoot>
          </QueryClientProvider>
        </HelmetProvider>
      </ErrorBoundary>
    </React.Suspense>
  );
};
