import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests'
import Button from '.'

describe('Button', () => {
  it('Should render label', () => {
    renderWithTheme(<Button>Request a quote</Button>)

    expect(screen.getByText(/request a quote/i)).toBeInTheDocument()
  })

  it('Should render with primary color when primary is passed', () => {
    renderWithTheme(<Button color="primary">Request a quote</Button>)

    expect(screen.getByRole('button')).toHaveStyle({
      backgroundColor: '#60E1CB',
    })
  })

  it('Should render with secondary color when secondary is passed', () => {
    renderWithTheme(<Button color="secondary">Request a quote</Button>)

    expect(screen.getByRole('button')).toHaveStyle({
      backgroundColor: '#7BC0E3',
    })
  })

  it('Should render with black color when black is passed', () => {
    renderWithTheme(<Button color="black">Request a quote</Button>)

    expect(screen.getByRole('button')).toHaveStyle({
      backgroundColor: '#292525',
    })
  })

  it('Should render a minimal version when minimal is true', () => {
    renderWithTheme(<Button minimal>Request a quote</Button>)

    expect(screen.getByRole('button')).toHaveStyle({
      backgroundColor: 'transparent',
      color: '#60E1CB',
      border: '0.2rem solid #60E1CB',
    })
  })
})
