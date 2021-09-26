import * as S from './styles'

export type HeadingProps = {
  children: string
  large?: boolean
}

const Heading = ({ children, large }: HeadingProps) => (
  <S.Title large={large}>{children}</S.Title>
)

export default Heading
