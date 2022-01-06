// Components
import Post from "@components/feed/post";

/**
 * A list of posts curiously curated by *not* an algorithm because why would we have an algorithm for this
 * 
 * For “Your Class” page
 */
const Feed = () => {
  return (
    <ul className="flex flex-col gap-4 items-center">
      <Post />
      <Post />
      <Post />
      <Post />
    </ul>
  );
}

export default Feed;