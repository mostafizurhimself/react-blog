import { render } from '@/utils/test-utils';
import Footer from './Footer';

describe('Footer', () => {
  it('should display the correct text', () => {
    const { getByText } = render(<Footer />);
    const footerText = getByText('Copyright © 2023. Md Mostafizur Rahman');
    expect(footerText).toBeInTheDocument();
  });
});
