// import { Button, Spinner } from "@/components/Elements";
// import { Notifications } from "@/components/Notifications/Notifications";
// import { AuthProvider } from "@/lib/auth";
// import { queryClient } from "@/lib/react-query";

import * as React from "react";
import { ErrorBoundary } from "react-error-boundary"; // 内部エラーハンドリング:yarn add react-error-boundary
import { Helmet, HelmetProvider } from "react-helmet-async"; // meta情報の埋め込み: yarn add react-helmet-async
// import { QueryClientProvider } from "react-query"; //Data Fetchingライブラリ, axiosが不要になる:
// import { ReactQueryDevtools } from "react-query/devtools";
// import { BrowserRouter as Router } from "react-router-dom";

const ErrorFallback = () => {
  return (
    <div>エラーが発生したようです</div>
    // <div
    //   className="text-red-500 w-screen h-screen flex flex-col justify-center items-center"
    //   role="alert"
    // >
    //   <h2 className="text-lg font-semibold">Ooops, something went wrong :( </h2>
    //   <Button
    //     className="mt-4"
    //     onClick={() => window.location.assign(window.location.origin)}
    //   >
    //     Refresh
    //   </Button>
    // </div>
  );
};

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <React.Suspense
      fallback={
        <div className="flex items-center justify-center w-screen h-screen">
          {/* <Spinner size="xl" /> */}
          スピナー
        </div>
      }
    >
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <HelmetProvider>
          <Helmet>
            <title>{"デフォルトタイトル"}</title>
            <meta name="description" content={"デフォルトの説明文です"} />
            <link rel="canonical" href={`https:hoge.com/${""}`} />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
          </Helmet>
          {children}
          {/* <QueryClientProvider client={queryClient}>
            {process.env.NODE_ENV !== "test" && <ReactQueryDevtools />}
            <Notifications />
            <AuthProvider>
              <Router>{children}</Router>
            </AuthProvider>
          </QueryClientProvider> */}
        </HelmetProvider>
      </ErrorBoundary>
    </React.Suspense>
  );
};
