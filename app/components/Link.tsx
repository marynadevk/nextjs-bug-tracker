import NextLink from 'next/link';
import { Link as RadixLink } from '@radix-ui/themes';
import { FC } from 'react';

type Props = {
  href: string;
  children?: string | React.ReactNode;
  className?: string;
};

const Link: FC<Props> = ({ href, children }) => {
  return (
    <NextLink href={href} passHref legacyBehavior>
      <RadixLink>{children}</RadixLink>
    </NextLink>
  );
};

export default Link;
