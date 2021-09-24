import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from '.'

const wrapperModifiers = {
  primary: (theme: DefaultTheme) => css`
    background: ${theme.colors.primary};
  `,
  secondary: (theme: DefaultTheme) => css`
    background: ${theme.colors.secondary};
  `,
  black: (theme: DefaultTheme) => css`
    background: ${theme.colors.black};
  `,
  minimal: (theme: DefaultTheme) => css`
    background: transparent;
    color: ${theme.colors.primary};
    border: 0.2rem solid ${theme.colors.primary};
  `,
}

export const Wrapper = styled.button<Pick<ButtonProps, 'color' | 'minimal'>>`
  ${({ theme, color, minimal }) => css`
    border: 0;
    color: ${theme.colors.white};
    font-weight: 700;
    cursor: pointer;
    border-radius: 2rem;
    padding: 1.2rem 2.5rem;
    ${!!color && wrapperModifiers[color!](theme)}
    ${!!minimal && wrapperModifiers.minimal(theme)}
  `}
`
