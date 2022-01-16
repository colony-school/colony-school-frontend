// Modules
import { format } from "date-fns";
import ReactMarkdown from "react-markdown";

// Components
import PostActions from "@components/feed/actions";
import Monogram from "@components/feed/monogram";
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
        icon={<Monogram name={post.author} />}
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
