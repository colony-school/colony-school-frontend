// Modules
import { format } from "date-fns";
import ReactMarkdown from "react-markdown";

// Components
import PostActions from "@components/feed/actions";
import PostTitle from "@components/feed/title";
import PostAttachments from "@components/feed/attachment";
import Title from "@components/global/title";

// Types
import { Post as PostType } from "@utils/types/feed/post";

/**
 * An entry in the class feed
 * @param post A post object
 */
const Post = ({ post }: { post: PostType }) => {
  return (
    <li className="w-full max-w-full sm:card sm:card-elevated sm:w-[74ch]">
      <Title
        icon={
          <div
            className="grid place-items-center w-10 h-10 aspect-square
            text-light-on-secondary font-medium bg-light-secondary rounded-full"
          >
            {post.author.length == 0 ? ":)" : post.author[0].toUpperCase()}
          </div>
        }
        title={<PostTitle attachments={post.attachments} />}
        subhead={`${post.author} • ${format(post.postDate, "dd/MM/yyyy")}`}
      />
      <ReactMarkdown className="p-4">{post.content}</ReactMarkdown>
      <PostAttachments attachments={post.attachments} />
      <PostActions attachments={post.attachments} />
    </li>
  );
};

export default Post;
