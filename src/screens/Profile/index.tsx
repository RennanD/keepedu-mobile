import { Feather } from '@expo/vector-icons';
import React from 'react';
import { useTheme } from 'styled-components';
import { GoBackButton } from '../../components/GoBackButton';
import { useAuth } from '../../hooks/auth';
import shadow from '../../styles/shadow';

import {
  Container,
  HeaderProfile,
  HeaderTitle,
  AvatarContainer,
  Avatar,
  UserInfoContainer,
  UserName,
  UserEmail,
  ProfileMenu,
  ProfileOption,
  ProfileOptionText,
  ProfileOptionDescription,
} from './styles';

type OptionProps = {
  title: string;
  description: string;
  icon: React.ComponentProps<typeof Feather>['name'];
};

const options: OptionProps[] = [
  {
    title: 'Editar perfil',
    description: 'Nome, tefelfone e etc.',
    icon: 'edit',
  },
  {
    title: 'Ajuda',
    description: 'Contato, FAQ e etc.',
    icon: 'help-circle',
  },
  {
    title: 'Treinamentos',
    description: 'Treinamentos de uso do sistema',
    icon: 'monitor',
  },
];

export function Profile(): JSX.Element {
  const { user } = useAuth();
  const theme = useTheme();

  return (
    <Container>
      <HeaderProfile>
        <GoBackButton />
        <HeaderTitle>Perfil do Aluno</HeaderTitle>
      </HeaderProfile>

      <UserInfoContainer>
        <AvatarContainer>
          <Avatar source={{ uri: user.avatar }} />
        </AvatarContainer>

        <UserName>{user.name}</UserName>
        <UserEmail>{user.email}</UserEmail>
      </UserInfoContainer>

      <ProfileMenu showsVerticalScrollIndicator={false}>
        {options.map(option => (
          <ProfileOption style={shadow}>
            <Feather
              name={option.icon}
              size={26}
              color={theme.colors.primary}
            />
            <ProfileOptionText>
              {option.title}
              {'\n'}
              <ProfileOptionDescription>
                {option.description}
              </ProfileOptionDescription>
            </ProfileOptionText>
            <Feather
              name="chevron-right"
              size={28}
              color={theme.colors.placeholder}
            />
          </ProfileOption>
        ))}

        <ProfileOption style={shadow}>
          <Feather name="log-out" size={26} color={theme.colors.attention} />
          <ProfileOptionText>
            Sair{'\n'}
            <ProfileOptionDescription>
              LogOut da aplicação
            </ProfileOptionDescription>
          </ProfileOptionText>
          <Feather
            name="chevron-right"
            size={28}
            color={theme.colors.placeholder}
          />
        </ProfileOption>
      </ProfileMenu>
    </Container>
  );
}
