// Modules
import { format } from "date-fns";
import ReactMarkdown from "react-markdown";

// Components
import PostAttachments from "@components/feed/attachment";
import Title from "@components/global/title";

// Types
import { Attachment, Post as PostType } from "@utils/types/post";

const PostTitle = ({ attachments }: { attachments: Array<Attachment> }) => {
  // TODO: Post title should be generated from attachments
  return <h3>Post</h3>;
};

const Post = ({ post }: { post: PostType }) => {
  return (
    <li className="max-w-full sm:card sm:card-elevated sm:w-[72ch]">
      <Title
        icon={
          <div className="grid place-items-center w-10 h-10 text-light-on-secondary font-medium bg-light-secondary rounded-full">
            {post.author[0]}
          </div>
        }
        title={<PostTitle attachments={post.attachments} />}
        subhead={`${post.author} • ${format(post.postDate, "dd/MM/yyyy")}`}
      />
      <ReactMarkdown className="p-4">{post.content}</ReactMarkdown>
      <PostAttachments attachments={post.attachments} />
      <div className="flex flex-row justify-end p-4">
        <button className="btn btn-text">Open in Sidebar</button>
      </div>
    </li>
  );
};

export default Post;
