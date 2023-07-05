import Link from 'next/link'
import { useState } from 'react'
import { createPortal } from 'react-dom'

export const WORKS_CONTENT = [
  [
    'Rectangle 760',
    '#242734',
    "John Rinand | Portfolio",
    '',
    'https://techstacks-ph-ojt.github.io/Rinands-Portfolio/',
  ],
  ['Rectangle 771', '#65C9FF', 'Jhonas | Portfolio', '', 'https://lalojhonaskatsu21.web.app/'],
  ['Rectangle 772', '#96C3E5', 'Jedediah | Portfolio', '', 'https://jedediahchrisdev.netlify.app/'],
  ['Rectangle 773', '#F9C22E', 'Daniel Arvi | Portfolio', '', 'https://dap-dev.netlify.app/'],
  ['Rectangle 774', '#DDB03E', 'Ezeriel Pineda | Portfolio', '', 'https://jespdev-portfolio.netlify.app/'],
  ['Rectangle 775', '#CF040B', 'Ivan Mauricio | Portfolio', '', 'https://akira14.netlify.app/'],
  ['Rectangle 776', '#0E5656', 'Aaron Soniedos | Portfolio', '', 'https://ae-soniedos.netlify.app/'],
  ['Rectangle 777', '#75CABF', 'Cecile Joy | Portfolio', '', 'https://techstacks-ph-ojt.github.io/Portfolio-/'],
  ['Rectangle 778', '#10AB56', 'Hannah | Portfolio', '', 'https://techstacks-ph-ojt.github.io/My-Portfolio/'],
]

const PortfolioButton = ({ img, color, title, summary, website }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div
        className="ojt-portfolio-button"
        style={{
          backgroundColor: color,
        }}
      >
        <img src={`/assets/img/ojt/works/${img}.png`} />

        <div className="ojt-portfolio-summary">
          <div className="ojt-summary-content">
            <h4>{title}</h4>
            {/* <p>{summary}</p> */}
            <button
              className="text-uppercase"
              onClick={() => setIsOpen(current => !current)}
            >
              See more
            </button>
          </div>
        </div>
      </div>

      {isOpen &&
        createPortal(
          <>
            <div
              onClick={() => setIsOpen(current => !current)}
              className="ojt-portfolio-modal-backdrop"
            >
              {/* Backdrop */}
            </div>

            <button
              className="ojt-portfolio-close-modal-btn"
              onClick={() => setIsOpen(current => !current)}
            >
              <i class="fas fa-times"></i>
            </button>

            <div className="ojt-portfolio-modal-content">
              <div className="ojt-portfolio-modal-content-container">
                <img src={`/assets/img/ojt/works/${img}.png`} />

                <div className="ojt-portfolio-details-container">
                  <h3 className="ojt-portfolio-title">{title}</h3>
                  <p>{summary}</p>
                  <Link href={website}>
                    <a target="_blank">
                      <i class="fas fa-link"></i> <span>{website}</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </>,
          document.body,
        )}
    </>
  )
}

const OJTPortfolio = () => {
  return (
    <div className="ojt-portfolio-items">
      {WORKS_CONTENT.map(([img, color, title, summary, website], i) => (
        <PortfolioButton
          key={i}
          img={img}
          color={color}
          title={title}
          summary={summary}
          website={website}
        />
      ))}
    </div>
  )
}

export default OJTPortfolio
