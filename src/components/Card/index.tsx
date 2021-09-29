import Link from 'next/link'

import * as S from './styles'
import React from 'react'

export type CardProps = {
  title: string
  subtitle: string
  icon: React.ReactNode
  link?: string
  path?: string
}

const Card = ({ title, subtitle, link, path = '', icon }: CardProps) => (
  <S.CardWrapper>
    <S.Content>
      {icon}
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>

      {!!link && (
        <Link href={path} passHref>
          <S.Link role="link">{link}</S.Link>
        </Link>
      )}
    </S.Content>
  </S.CardWrapper>
)

export default Card
