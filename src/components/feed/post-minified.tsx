// Modules
import { format } from "date-fns";

// Components
import Title from "@components/global/title";
import { PostTitle } from "@components/feed/post";

// Types
import { MinifiedPost as MinifiedPostType } from "@utils/types/post";

const MinifiedPost = ({ post }: { post: MinifiedPostType }) => {
  return (
      <li className="hover:bg-light-primary-0.08-tlc">
        <button className="card container-surface text-left">
          <Title
            icon={
              <div className="grid place-items-center w-10 h-10 aspect-square
                text-light-on-secondary font-medium bg-light-secondary rounded-full">
                {post.author ? post.author[0].toUpperCase() : "U"}
              </div>
            }
            title={<PostTitle attachments={post.attachments} />}
            subhead={`${post.author ? post.author : "Unknown"} • ${format(post.postDate, "dd/MM/yyyy")}`}
          />
        </button>
      </li>
  );
}

export default MinifiedPost;