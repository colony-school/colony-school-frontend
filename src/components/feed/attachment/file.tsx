// Components
import Headline from "@components/global/headline";
import MaterialIcon from "@components/global/icon/material";

// Types
import { File } from "@utils/types/file";
import { FileAttachmentUsePolicy } from "@utils/types/feed/post";

/**
 * Lists the use policies of a file
 *
 * For File attachment (`FileAttachment` from `file.tsx`)
 * @param usePolicies A list of use policies
 */
const UsePolicies = ({
  usePolicies,
}: {
  usePolicies: Array<FileAttachmentUsePolicy>;
}) => {
  return (
    <ul className="text-base">
      {usePolicies.map((usePolicy) => {
        return (
          <li title={usePolicy.desc || usePolicy.summary} key={usePolicy.id}>
            {" "}
            {/* temporary stand-in for a custom card that appears on hover */}
            {usePolicy.summary}
          </li>
        );
      })}
    </ul>
  );
};

/**
 * An attachment for a file
 *
 * For Post (`Post` from `post.tsx`)
 * @param file The attached file
 * @param usePolicies A list of policies advising the user on how to use the file, protecting both the author and us from trouble, I hope
 */
const FileAttachment = ({
  file,
  usePolicies,
}: {
  file: File;
  usePolicies: Array<FileAttachmentUsePolicy>;
}) => {
  return (
    <li className="flex flex-col sm:grid sm:grid-cols-2 container-tertiary">
      <Headline
        icon={
          <MaterialIcon
            icon="attach_file"
            className="text-light-tertiary dark:text-dark-tertiary"
          />
        }
        title={<h4 className="font-display text-lg">File: {file.name}</h4>}
        subhead={
          <p className="text-base">{(file.size / 1000).toFixed(0)} kB</p>
        }
        gap={4}
      />
      <Headline
        icon={
          <MaterialIcon
            icon="copyright"
            className="text-light-tertiary dark:text-dark-tertiary"
          />
        }
        title={<h4 className="font-display text-lg">Use Policy</h4>}
        subhead={<UsePolicies usePolicies={usePolicies} />}
        gap={4}
      />
    </li>
  );
};

export default FileAttachment;
