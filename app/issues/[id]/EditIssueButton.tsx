import { GoPencil } from "react-icons/go";
import { Button } from '@radix-ui/themes';
import Link from 'next/link';

const EditIssueButton = ({ issueId }: { issueId: number }) => {
  return (
    <Button>
      <GoPencil />
      <Link href={`/issues/edit/${issueId}`}>Edit Issue</Link>
    </Button>
  );
};

export default EditIssueButton;
