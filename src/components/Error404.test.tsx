import { render } from '@/utils/test-utils';
import Error404 from './Error404';

describe('Error404', () => {
  it('should render the error message', () => {
    const { getByText } = render(<Error404 />);
    const errorMessage = getByText('404');
    expect(errorMessage).toBeInTheDocument();
  });

  it('should render the "Page not found" message', () => {
    const { getByText } = render(<Error404 />);
    const notFoundMessage = getByText('Page not found');
    expect(notFoundMessage).toBeInTheDocument();
  });
});
