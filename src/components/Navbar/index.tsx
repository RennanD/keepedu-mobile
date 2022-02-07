import React from 'react';

import { Container, NavLink, NavLinkText } from './styles';

type LinkProps = {
  key: string;
  title: string;
};

type NavbarProps = {
  links: LinkProps[];
  activeLink: string;
  onChangeLink: (link: string) => void;
};

export function Navbar({
  links,
  activeLink,
  onChangeLink,
}: NavbarProps): JSX.Element {
  function handleChangeLink(link: string): void {
    onChangeLink(link);
  }

  return (
    <Container>
      {links.map(link => (
        <NavLink key={link.key} isActive={link.key === activeLink}>
          <NavLinkText
            onPress={() => handleChangeLink(link.key)}
            isActive={link.key === activeLink}
          >
            {link.title}
          </NavLinkText>
        </NavLink>
      ))}
    </Container>
  );
}
