import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests'

import Card from '.'

describe('Card', () => {
  it('should render Card with title, subtitle and icon', () => {
    renderWithTheme(
      <Card
        title="title"
        subtitle="subtitle"
        icon={<div data-testid="icon"></div>}
      />
    )

    expect(screen.getByRole('heading', { name: /title/i })).toBeInTheDocument()
    expect(screen.getByText(/subtitle/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })
  it('should render link and href', () => {
    renderWithTheme(
      <Card
        title="title"
        subtitle="subtitle"
        icon={<div data-testid="icon"></div>}
        link="read more"
        path="/"
      />
    )
    expect(screen.getByRole('link')).toHaveAttribute('href', '/')
  })
})
