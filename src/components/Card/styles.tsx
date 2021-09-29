import styled, { css } from 'styled-components'

export const CardWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    position: relative;
    width: 26rem;
    height: 28rem;
    line-height: 2rem;
    background: ${theme.colors.white};
    padding: 1rem 2rem;
    border-bottom-left-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;

    &::before {
      content: '';
      position: absolute;
      top: -0.7rem;
      left: 0;
      right: 0;
      width: 100%;
      height: 0.7rem;
      background: ${theme.colors.primary};
      border-top-left-radius: 0.8rem;
      border-top-right-radius: 0.8rem;
    }
  `}
`

export const Title = styled.h3`
  ${({ theme }) => css`
    margin-top: 2rem;
    font-size: ${theme.fonts.sizes.large};
    font-weight: 700;
  `}
`
export const Subtitle = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.small};
    margin-top: 2rem;
    margin-bottom: 2rem;
    color: ${theme.colors.black};
  `}
`
export const Link = styled.a`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.small};
    color: ${theme.colors.secondary};
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  `}
`
export const Content = styled.div`
  ${({ theme }) => css`
    margin-top: 4rem;
    svg {
      width: 2.5rem;
      color: ${theme.colors.primary};
    }
  `}
`
