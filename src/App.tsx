import Router from '@/router';
import { store } from '@/store';
import { ErrorBoundary } from 'react-error-boundary';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PuffLoader } from 'react-spinners';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { Toaster } from 'react-hot-toast';
import { FallbackProps } from 'react-error-boundary';

function App() {
  const persistor = persistStore(store, {}, function () {
    persistor.persist();
  });

  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Provider store={store}>
          <PersistGate
            loading={
              <div className="flex h-screen items-center justify-center">
                <PuffLoader size={70} color="#009B86" />
              </div>
            }
            persistor={persistor}
          >
            <BrowserRouter>
              <Router />
              <Toaster />
            </BrowserRouter>
          </PersistGate>
        </Provider>
      </ErrorBoundary>
    </>
  );
}

function ErrorFallback({ error }: FallbackProps) {
  return (
    <div className="flex h-screen flex-col items-center justify-center" role="alert">
      <div className="mx-auto max-w-xl px-1 text-danger">
        <h2 className="text-lg font-semibold">{error.message} </h2>
        <p className="h-96 overflow-auto">{error.stack}</p>
      </div>
    </div>
  );
}

export default App;
