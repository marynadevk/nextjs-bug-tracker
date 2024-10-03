import { Button, Flex } from '@radix-ui/themes';
import Link from 'next/link';
import React from 'react';

const IssueActions = () => {
  return (
    <Flex justify="between">
      <Button>
        <Link href="/issues/new">New Issue</Link>
      </Button>
    </Flex>
  );
};

export default IssueActions;
