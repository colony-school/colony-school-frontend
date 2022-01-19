// Modules
import { useState } from "react";

// Components
import Post from "@components/feed/post";
import MaterialIcon from "@components/global/icon/material";

// Types
import { Post as PostType } from "@utils/types/feed/post";

// Dummybase
import dummyFeed from "@utils/dummybase/feed";

/**
 * Displays a list of posts related to the page’s content
 * @param filter A funtion to filter the feed
 */
const RelatedPosts = ({ filter }: { filter: Function }): JSX.Element => {
  const [feed, setFeed] = useState<Array<PostType>>(
    dummyFeed.filter((post) => filter(post))
    // This will probably be a query to the db in production
  );

  return (
    <div>
      <header className="flex flex-row items-center gap-3 py-8">
        <MaterialIcon
          icon="attach_file"
          className="text-5xl text-light-primary dark:text-dark-primary"
        />
        <h3 className="text-3xl">Related Posts</h3>
      </header>
      <ul className="flex flex-col gap-4 items-center pb-8">
        {feed.length == 0 ? (
          <div className="card card-tonal flex flex-col items-center gap-4 p-4">
            <p className="text-center">
              No posts yet. Now go contribute to society and compose one!
            </p>
            <button className="btn btn-text">Compose about this</button>
          </div>
        ) : (
          feed.map((post, index) => (
            <Post post={post} key={index} />
          ))
        )}
      </ul>
    </div>
  );
};

export default RelatedPosts;
