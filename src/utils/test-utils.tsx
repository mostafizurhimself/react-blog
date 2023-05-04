import { initialState } from '@/store/global-slice';
import { cleanup, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { afterEach } from 'vitest';

afterEach(() => {
  cleanup();
});

const mockStore = configureStore();
export const store = mockStore({
  global: initialState,
});

function customRender(ui: React.ReactElement, options = {}) {
  return render(ui, {
    // wrap provider(s) here if needed
    wrapper: ({ children }) => {
      return (
        <Provider store={store}>
          <BrowserRouter>{children}</BrowserRouter>
        </Provider>
      );
    },
    ...options,
  });
}

export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
export { customRender as render };
