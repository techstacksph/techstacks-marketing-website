import { useState } from 'react'
import { createPortal } from 'react-dom'

export const WORKS_CONTENT = [
  ['Rectangle 760', '#242734', "John Rinand Sta.Ines' Portfolio Website"],
  ['Rectangle 771', '#65C9FF', 'title'],
  ['Rectangle 772', '#96C3E5', 'title'],
  ['Rectangle 773', '#F9C22E', 'title'],
  ['Rectangle 774', '#DDB03E', 'title'],
  ['Rectangle 775', '#CF040B', 'title'],
  ['Rectangle 776', '#0E5656', 'title'],
  ['Rectangle 777', '#75CABF', 'title'],
  ['Rectangle 778', '#10AB56', 'title'],
]

const PortfolioButton = ({ img, color, title }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        className="ojt-portfolio-button"
        style={{
          backgroundColor: color,
        }}
        onClick={() => setIsOpen(current => !current)}
      >
        <img src={`/assets/img/ojt/works/${img}.png`} />
      </button>

      {isOpen &&
        createPortal(
          <>
            <div
              onClick={() => setIsOpen(current => !current)}
              className="ojt-portfolio-modal-backdrop"
            >
              {/* Backdrop */}
            </div>

            <div className="ojt-portfolio-modal-content">
              <div className="ojt-portfolio-modal-content-container">
                <img src={`/assets/img/ojt/works/${img}.png`} />

                <div className="ojt-portfolio-details-container">
                  {/* TODO: portfolio's logo */}
                  {/* <img src="" alt="" /> */}
                  <h3 className="ojt-portfolio-title">{title}</h3>
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
      {WORKS_CONTENT.map(([img, color, title], i) => (
        <PortfolioButton key={i} img={img} color={color} title={title} />
      ))}
    </div>
  )
}

export default OJTPortfolio
