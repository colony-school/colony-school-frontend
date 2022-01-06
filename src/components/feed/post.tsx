// Components
import AnnouncementAttachment from "@components/feed/attachment/announcement";
import SubjectPeriodAttachment from "@components/feed/attachment/subject-period";
import Title from "@components/global/title";

// Types
import { Attachment, Post as PostType } from "@utils/types/post";

const PostTitle = ({ attachments }: { attachments: Array<Attachment> }) => {
  // TODO: Post title should be generated from attachments
  return <h3>Post</h3>;
};

const PostAttachments = ({
  attachments,
}: {
  attachments: Array<Attachment>;
}) => {
  return (
    <ul className="flex flex-col gap-2">
      {attachments.map((attachment) => {
        switch (attachment.type) {
          case "announcement":
            return (
              <AnnouncementAttachment announcement={attachment.announcement} />
            );
          case "subject-period":
            return (
              <SubjectPeriodAttachment
                subjectPeriod={attachment.subjectPeriod}
              />
            );
        }
      })}
    </ul>
  );
};

const Post = ({ post }: { post: PostType }) => {
  return (
    <li className="card card-elevated w-[72ch]">
      <Title
        icon={
          <div className="grid place-items-center w-10 h-10 text-light-on-secondary font-medium bg-light-secondary rounded-full">
            {post.author[0]}
          </div>
        }
        title={<PostTitle attachments={post.attachments} />}
        subhead={`${post.author} • 03/10/2021`}
      />
      <p className="p-4">{post.content}</p>
      <PostAttachments attachments={post.attachments} />
      <div className="flex flex-row justify-end p-4">
        <button className="btn btn-text">Open in Sidebar</button>
      </div>
    </li>
  );
};

export default Post;
