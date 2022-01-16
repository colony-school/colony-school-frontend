// Types
import { Attachment } from "@utils/types/feed/post";

/**
 *
 * @param attachments
 */
const PostTitle = ({ attachments }: { attachments: Array<Attachment> }) => {
  // TODO: Post title should be generated from attachments
  //       Will do this the first thing after the PR

  return <h3>Post</h3>;
};

// Exports
export default PostTitle;
