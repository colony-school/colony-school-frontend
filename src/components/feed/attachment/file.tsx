// Components
import Headline from "@components/global/headline";
import MaterialIcon from "@components/global/icon";

// Types
import { FileAttachmentUsePolicies } from "@utils/types/post";

const UsePolicies = ({
  usePolicies,
}: {
  usePolicies: FileAttachmentUsePolicies;
}) => {
  return (
    <ul className="text-base">
      {usePolicies.noCopy && <li>The user must not copy the material.</li>}
      {usePolicies.noParaphrase && (
        <li>The user must not paraphrase the material.</li>
      )}
      {usePolicies.noShare && <li>The user must not share the material.</li>}
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
  usePolicies: FileAttachmentUsePolicies;
}) => {
  return (
    <li className="grid grid-cols-2 bg-light-tertiary-container dark:bg-dark-tertiary-container">
      <Headline
        icon={
          <MaterialIcon
            icon="attach_file"
            className="text-light-tertiary dark:text-dark-tertiary"
          />
        }
        title={<h4 className="text-lg font-medium">File: {file.name}</h4>}
        subhead={
          <p className="text-base">{(file.size / 1000).toFixed(0)} kB</p>
        }
      />
      <Headline
        icon={
          <MaterialIcon
            icon="copyright"
            className="text-light-tertiary dark:text-dark-tertiary"
          />
        }
        title={<h4 className="text-lg font-medium">Use Policy</h4>}
        subhead={<UsePolicies usePolicies={usePolicies} />}
      />
    </li>
  );
};

export default FileAttachment;
