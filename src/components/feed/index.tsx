// Modules
import { useState } from "react";

// Components
import Post from "@components/feed/post";

// Types
import { Post as PostType } from "@utils/types/feed/post";
import dummyFeed from "@utils/dummybase/feed";

/**
 * A list of posts curiously curated by *not* an algorithm because why would we have an algorithm for this
 *
 * For “Your Class” page
 */
const Feed = () => {
  const [feed, setFeed] = useState<Array<PostType>>(dummyFeed);

  return (
    <ul className="flex flex-col gap-4 items-center pb-8 sm:px-8">
      {feed.map((post, index) => {
        return <Post post={post} className="sm:w-[74ch]" key={index} />;
      })}
    </ul>
  );
};

export default Feed;
