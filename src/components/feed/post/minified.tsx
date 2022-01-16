// Modules
import { format } from "date-fns";

// Components
import Monogram from "@components/feed/monogram";
import PostTitle from "@components/feed/title";
import Title from "@components/global/title";

// Types
import { MinifiedPost as MinifiedPostType } from "@utils/types/feed/post";

/**
 * A post without content or attachments
 * @param post A minified post object (without content)
 */
const MinifiedPost = ({ post }: { post: MinifiedPostType }) => {
  return (
    <li className="hover:bg-light-primary-0.08-tlc">
      <button className="card container-surface text-left">
        <Title
          icon={<Monogram name={post.author} />}
          title={<PostTitle attachments={post.attachments} />}
          subhead={`${post.author?.length > 0 ? post.author : "Unknown"} • ${format(
            post.postDate,
            "dd/MM/yyyy"
          )}`}
        />
      </button>
    </li>
  );
};

export default MinifiedPost;
