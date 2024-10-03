import React from 'react';
import { Container, Flex } from '@radix-ui/themes';
import { PiBugThin } from 'react-icons/pi';
import NavLinks from './NavLinks';
import { Link } from '@/app/components';
import { AuthStatus } from './AuthStatus';

const NavBar = () => {
  return (
    <nav className="border-b mb-5 px-5 py-3">
      <Container>
        <Flex justify="between">
          <Flex align="center" gap="3">
            <Link href="/">
              <PiBugThin />
            </Link>
            <NavLinks />
          </Flex>
          <AuthStatus />
        </Flex>
      </Container>
    </nav>
  );
};

export default NavBar;
