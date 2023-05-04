import { render } from '@/utils/test-utils';
import BlogList from './BlogList';
import { posts } from '@/data/posts';

describe('BlogList', () => {
  it('renders "No posts found" message when there are no posts', () => {
    const { getByText } = render(<BlogList posts={[]} />);

    expect(getByText('No posts found')).toBeInTheDocument();
  });

  it('renders list of posts when there are posts', () => {
    const { getByText } = render(<BlogList posts={posts} />);

    expect(getByText(posts[0].title)).toBeInTheDocument();
  });
});
