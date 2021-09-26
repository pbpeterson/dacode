import { screen } from '@testing-library/dom'
import Heading from '.'
import { renderWithTheme } from '../../utils/tests'

describe('<Heading />', () => {
  it('should render Heading', () => {
    renderWithTheme(<Heading>daCode</Heading>)

    expect(screen.getByRole('heading', { name: /dacode/i })).toBeInTheDocument()
  })
  it('should render heading with a large size', () => {
    renderWithTheme(<Heading large>daCode</Heading>)

    expect(screen.getByRole('heading', { name: /dacode/i })).toHaveStyle({
      fontSize: '4rem',
      fontWeight: '800',
    })
  })
})
