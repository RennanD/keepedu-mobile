import React from 'react';

import { Feather } from '@expo/vector-icons';

import { useTheme } from 'styled-components';

import { useAuth } from '../../hooks/auth';

import {
  Container,
  AvatarContainer,
  Avatar,
  EditAvatarButton,
  UserInfoContainer,
  UserName,
  UserEmail,
  ProfileMenu,
  ProfileOption,
  ProfileOptionText,
  ProfileOptionDescription,
} from './styles';
import { ScreenHeader } from '../../components/ScreenHeader';

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
    description: 'Treinamentos de uso do app',
    icon: 'monitor',
  },
];

export function Profile(): JSX.Element {
  const { user, singOut } = useAuth();
  const theme = useTheme();

  return (
    <Container>
      <ScreenHeader title="Perfil do Aluno" />

      <UserInfoContainer>
        <AvatarContainer>
          <Avatar source={{ uri: user.avatar }} />
          <EditAvatarButton>
            <Feather
              name="camera"
              size={16}
              color={theme.colors.background_color}
            />
          </EditAvatarButton>
        </AvatarContainer>

        <UserName>{user.name}</UserName>
        <UserEmail>{user.email}</UserEmail>
      </UserInfoContainer>

      <ProfileMenu showsVerticalScrollIndicator={false}>
        {options.map(option => (
          <ProfileOption key={option.title}>
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

        <ProfileOption onPress={singOut}>
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
