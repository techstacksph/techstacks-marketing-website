import Link from 'next/link'
import { useState } from 'react'
import { createPortal } from 'react-dom'

export const WORKS_CONTENT = [
  [
    'redserve-logo', '#840000', 'Redserve', '', 'https://redserve.netlify.app/'],
  ['agora-logo', '#6D31C9', 'Agora NFT Marketplace', '', 'https://agoramp.netlify.app/'],
  ['odyssey-logo', '#83A75E', 'Odyssey Travels', '', 'https://odysseytravels.netlify.app/'],
  ['creators-logo', '#6E849C', 'New Generation Marketplace', '', 'https://creatorsmarketplace.netlify.app/'],
  ['itravels-logo', '#219EBC', 'Itravels', '', 'https://itravels14.netlify.app/home/'],
  ['ae-logo', '#F34C4C', 'AE Footgear', '', 'https://aefootgearwordpress.netlify.app/home/'],
  ['eze-logo', '#F0F6F6', 'Ezeriel Pineda', '', 'https://jespdev-wpportfolio.netlify.app/'],
]

const DreamWebsiteButton = ({ img, color, title, summary, website }) => {
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

const OJTDreamWebsite = () => {
  return (
    <div className="ojt-portfolio-items">
      {WORKS_CONTENT.map(([img, color, title, summary, website], i) => (
        <DreamWebsiteButton
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

export default OJTDreamWebsite
