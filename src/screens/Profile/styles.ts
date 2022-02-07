import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.background_color};
`;

export const HeaderProfile = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 24px;
  width: 100%;
  padding-top: ${getStatusBarHeight() + 40}px;

  margin-bottom: 20px;
`;

export const HeaderTitle = styled.Text`
  font-size: 20px;

  margin-left: 20px;
  align-self: center;

  ${({ theme }) => css`
    color: ${theme.colors.label};
    font-family: ${theme.fonts.bold};
  `}
`;

export const AvatarContainer = styled.View`
  height: 140px;
  width: 140px;
  border-radius: 75px;
  border: 3px solid ${({ theme }) => theme.colors.placeholder};
  padding: 30px;

  align-items: center;
  justify-content: center;
  position: relative;

  margin-bottom: 20px;
`;

export const Avatar = styled.Image`
  height: 130px;
  width: 130px;
  border-radius: 70px;
`;

export const UserInfoContainer = styled.View`
  margin-bottom: 20px;
  align-items: center;
`;

export const UserName = styled.Text`
  font-size: 24px;
  margin-bottom: 4px;

  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-family: ${theme.fonts.bold};
  `}
`;

export const UserEmail = styled.Text`
  font-size: 18px;

  ${({ theme }) => css`
    color: ${theme.colors.label};
    font-family: ${theme.fonts.regular};
  `}
`;

export const ProfileMenu = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: 24,
  },
})`
  width: 100%;
`;

export const ProfileOption = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.background_color};
  border-radius: 8px;
  margin-bottom: 10px;
`;

export const ProfileOptionText = styled.Text`
  flex: 1;
  font-size: 16px;

  margin-left: 14px;

  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-family: ${theme.fonts.medium};
  `}
`;

export const ProfileOptionDescription = styled.Text`
  font-size: 14px;

  ${({ theme }) => css`
    color: ${theme.colors.placeholder};
    font-family: ${theme.fonts.medium};
  `}
`;
