import React from 'react';
import { Flex } from '@radix-ui/themes';
import IssueActions from './IssueActions';

const IssuesPage = () => {
  return (
    <Flex direction="column" gap="3">
      <IssueActions />
    </Flex>
  );
};

export default IssuesPage;
