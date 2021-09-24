import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  children: string
  color?: 'primary' | 'secondary' | 'black'
  minimal?: boolean
} & ButtonTypes

const Button = ({ children, color = 'secondary', minimal }: ButtonProps) => (
  <S.Wrapper color={color} minimal={minimal}>
    {children}
  </S.Wrapper>
)

export default Button
