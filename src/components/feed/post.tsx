// Modules
import { format } from "date-fns";
import ReactMarkdown from "react-markdown";

// Components
import PostAttachments from "@components/feed/attachment";
import Title from "@components/global/title";

// Types
import { Attachment, Post as PostType } from "@utils/types/post";

export const PostTitle = ({ attachments }: { attachments: Array<Attachment> }) => {
  // TODO: Post title should be generated from attachments
  //       Will do this the first thing after the PR

  return <h3>Post</h3>;
};

const Post = ({ post }: { post: PostType }) => {
  return (
    <li className="w-full max-w-full sm:card sm:card-elevated sm:w-[74ch]">
      <Title
        icon={
          <div className="grid place-items-center w-10 h-10 aspect-square
            text-light-on-secondary font-medium bg-light-secondary rounded-full">
            {post.author.length == 0 ? ":)" : post.author[0].toUpperCase()}
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
