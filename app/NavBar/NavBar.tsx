import { Link } from '@/app/components';
import React from 'react';
import NavLinks from './NavLinks';
import { PiBugThin } from 'react-icons/pi';
import { Container, Flex } from '@radix-ui/themes';

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
        </Flex>
      </Container>
    </nav>
  );
};

export default NavBar;
