import styled, { css } from 'styled-components'
import { HeadingProps } from '.'

export const Title = styled.h2<Pick<HeadingProps, 'large'>>`
  ${({ theme, large }) => css`
    font-size: ${theme.fonts.sizes.xlarge};
    font-weight: 500;

    ${large &&
    css`
      font-size: ${theme.fonts.sizes.xxlarge};
      font-weight: 800;
    `}
  `}
`
