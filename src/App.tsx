import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router-dom';
import ErrorFallback from './components/ErrorFallback';
import Router from '@/router';
import { Provider } from 'react-redux';
import { store } from '@/store';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { PuffLoader } from 'react-spinners';

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
            </BrowserRouter>
          </PersistGate>
        </Provider>
      </ErrorBoundary>
    </>
  );
}

export default App;
