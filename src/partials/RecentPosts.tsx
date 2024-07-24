import type { MarkdownInstance } from 'astro';
import type { IFrontmatter } from 'astro-boilerplate-components';
import {
  BlogGallery,
  GradientText,
  Section,
} from 'astro-boilerplate-components';

type IRecentPostsProps = {
  postList: MarkdownInstance<IFrontmatter>[];
};
<meta name="referrer" content="no-referrer" />
const RecentPosts = (props: IRecentPostsProps) => (

  <Section
    title={
      <div className="flex items-baseline justify-between">
        <div>
          最新 <GradientText>文章</GradientText>
        </div>

        <div className="text-sm">
          <a href="/posts/">查 看 所 有 →</a>
        </div>
      </div>
    }
  >
    <BlogGallery postList={props.postList} />
  </Section>
);

export { RecentPosts };
