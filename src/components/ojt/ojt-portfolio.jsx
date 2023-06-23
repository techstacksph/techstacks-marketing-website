import Link from 'next/link'
import { useState } from 'react'
import { createPortal } from 'react-dom'

export const WORKS_CONTENT = [
  [
    'Rectangle 760',
    '#242734',
    "John Rinand Sta.Ines' Portfolio Website",
    // 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    'https://techstacks-ph-ojt.github.io/Rinands-Portfolio/',
  ],
  ['Rectangle 771', '#65C9FF', 'title', 'summary', 'https://example.com'],
  ['Rectangle 772', '#96C3E5', 'title', 'summary', 'https://example.com'],
  ['Rectangle 773', '#F9C22E', 'title', 'summary', 'https://example.com'],
  ['Rectangle 774', '#DDB03E', 'title', 'summary', 'https://example.com'],
  ['Rectangle 775', '#CF040B', 'title', 'summary', 'https://example.com'],
  ['Rectangle 776', '#0E5656', 'title', 'summary', 'https://example.com'],
  ['Rectangle 777', '#75CABF', 'title', 'summary', 'https://example.com'],
  ['Rectangle 778', '#10AB56', 'title', 'summary', 'https://example.com'],
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
            <p>{summary}</p>
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
