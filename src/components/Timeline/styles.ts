import styled, { css } from 'styled-components/native';

type TimelineCardContainerProps = {
  isLastItem: boolean;
};

export const TimelineItem = styled.View`
  padding: 0 12px;
`;

export const TimelineIndicator = styled.View`
  height: 16px;
  width: 16px;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.primary};
`;

export const TimelineCardContainer = styled.View<TimelineCardContainerProps>`
  margin-left: 8px;
  border-left-width: ${({ isLastItem }) => (isLastItem ? 0 : 1)}px;
  border-color: ${({ theme }) => theme.colors.border};
  padding-left: 24px;
  padding-bottom: 8px;
`;

export const TimelineCard = styled.TouchableOpacity`
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.background_color};
  padding: 20px;
  align-items: center;
  border-radius: 8px;
`;

export const TimelineCardIconContainer = styled.View`
  padding: 12px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary_light};

  border-radius: 8px;
  margin-right: 16px;
`;

export const TimelineCardTitle = styled.Text`
  font-size: 18px;
  line-height: 22px;

  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-family: ${theme.fonts.medium};
  `}
`;

export const TimelineCardDescription = styled.Text`
  font-size: 12px;

  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-family: ${theme.fonts.medium};
  `}
`;
