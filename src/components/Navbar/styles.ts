import styled, { css } from 'styled-components/native';

type NavLinkProps = {
  isActive: boolean;
};

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const NavLink = styled.TouchableOpacity<NavLinkProps>`
  padding: 8px;

  ${({ theme, isActive }) =>
    isActive &&
    css`
      border-bottom-width: 2px;
      border-bottom-color: ${theme.colors.primary};
    `}
`;

export const NavLinkText = styled.Text<NavLinkProps>`
  font-size: 20px;

  ${({ theme, isActive }) => css`
    color: ${isActive ? theme.colors.text : theme.colors.placeholder};
    font-family: ${theme.fonts.medium};
  `}
`;
