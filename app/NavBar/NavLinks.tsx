'use client';

import Link from 'next/link';
import classnames from 'classnames';
import { usePathname } from 'next/navigation';

const NavLinks = () => {
  const currentPath = usePathname();
  const links = [
    { label: 'Dashboard', href: '/' },
    { label: 'Issues', href: '/issues/list' },
  ];

  return (
    <ul className="flex space-x-6">
      {links.map((link) => (
        <li key={link.href}>
          <Link
          className={classnames({
              'nav-link': true,
              'text-teal-700, bg-teal-100': link.href === currentPath,
            })}
            href={link.href}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
