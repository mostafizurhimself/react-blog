import Router from '@/router';
import { store } from '@/store';
import { ErrorBoundary } from 'react-error-boundary';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PuffLoader } from 'react-spinners';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import ErrorFallback from './components/ErrorFallback';
import { Toaster } from 'react-hot-toast';

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

export default App;
