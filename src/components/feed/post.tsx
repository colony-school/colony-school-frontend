// Components
import Title from "@components/global/title";

// Types
import { Post } from "@utils/types/post";

const Post = ({ post }: { post: Post }) => {
  return (
    <li className="card card-elevated w-[72ch]">
      <Title
        icon={
          <div className="grid place-items-center w-10 h-10 text-light-on-secondary bg-light-secondary rounded-full">
            S
          </div>
        }
        title={<h3>Post About Banana Eating Contest</h3>}
        subhead="Tempoom L. • 03/10/2021"
      />
      <p className="p-4">
        If you wanna stay for the whole event, you should know that the second
        half is overlapping with Chinese class. You should fill in this absence
        form and contact T. Thanyapat.
      </p>
      <div className="flex flex-row justify-end p-4">
        <button className="btn btn-text">Open in Sidebar</button>
      </div>
    </li>
  );
};

export default Post;
